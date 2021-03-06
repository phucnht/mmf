import { FormProvider, useForm } from 'react-hook-form';
import _keys from 'lodash/keys';
import _isBoolean from 'lodash/isBoolean';
import _isNumber from 'lodash/isNumber';
import _isEmpty from 'lodash/isEmpty';

import { useCallback, useEffect, useState } from 'react';
import MarketplaceFilterHeader from './MarketplaceFilterHeader';
import MarketplaceFilterSearch from './MarketplaceFilterSearch';
import MarketplaceFilterSelect from './MarketplaceFilterSelect';
import MarketplaceFilterSwitch from './MarketplaceFilterSwitch';
import MarketplaceFilterMinMax from './MarketplaceFilterMinMax';
import MarketplaceFilterCheckbox from './MarketplaceFilterCheckbox';
import { convertEnumToSelectOptions } from 'utils/convert';
import { ObjectProps, Option } from 'utils/types';
import { useRouter } from 'next/router';

export type FilterProps = {
  searchParams: ObjectProps;
  setSearchParams: (searchParams: ObjectProps) => void;
};

export const SORT_BY = {
  LOWEST_ID: 'Lowest ID',
  HIGHEST_ID: 'Highest ID',
  LOWEST_PRICE: 'Lowest Price',
  HIGHEST_PRICE: 'Highest Price',
  RECENTLY_LISTED: 'Recently Listed'
};

export const SORT_BY_OPTIONS = convertEnumToSelectOptions(SORT_BY);

const DEFAULT_SEARCH_PARAMS = {
  searchTerms: '',
  sortBy: undefined,
  listedByMe: undefined,
  elements: [],
  priceMin: '',
  priceMax: ''
};

export interface MarketplaceFilterProps {
  elementOptions: Option[];
}

export default function MarketplaceFilter({ elementOptions }: MarketplaceFilterProps) {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<ObjectProps>(DEFAULT_SEARCH_PARAMS);
  const method = useForm({
    defaultValues: searchParams
  });

  const handleResetFilter = useCallback(() => {
    setSearchParams({});
    method.reset(DEFAULT_SEARCH_PARAMS);
    router.push(router.pathname, undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (router.pathname) {
      handleResetFilter();
    }
  }, [router.pathname, handleResetFilter]);

  const handleSearchParams = () => {
    const values = method.getValues();
    const params = _keys(values).reduce((result: ObjectProps, key: string) => {
      const value = values[key];
      if (!_isEmpty(value) || _isBoolean(value) || (_isNumber(value) && value > 0)) {
        result[key] = value;
      }
      return result;
    }, {});
    setSearchParams(params);
    router.push(router.pathname, { query: params }, { shallow: true });
  };

  return (
    <FormProvider {...method}>
      <MarketplaceFilterSearch name="searchTerms" callback={handleSearchParams} />
      <MarketplaceFilterHeader onResetFilter={handleResetFilter} />
      <MarketplaceFilterSelect name="sortBy" options={SORT_BY_OPTIONS} callback={handleSearchParams} />
      <MarketplaceFilterSwitch name="listedByMe" callback={handleSearchParams} />
      <MarketplaceFilterCheckbox name="elements" options={elementOptions} callback={handleSearchParams} />
      <MarketplaceFilterMinMax nameMin="priceMin" nameMax="priceMax" callback={handleSearchParams} />
    </FormProvider>
  );
}
