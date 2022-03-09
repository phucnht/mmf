import { FormProvider, useForm } from 'react-hook-form';
import _keys from 'lodash/keys';
import _isBoolean from 'lodash/isBoolean';
import _isNumber from 'lodash/isNumber';
import _isEmpty from 'lodash/isEmpty';

import { useCallback, useEffect } from 'react';
import MarketplaceFilterHeader from './MarketplaceFilterHeader';
import MarketplaceFilterSearch from './MarketplaceFilterSearch';
import MarketplaceFilterSelect from './MarketplaceFilterSelect';
import MarketplaceFilterSwitch from './MarketplaceFilterSwitch';
import MarketplaceFilterMinMax from './MarketplaceFilterMinMax';
import MarketplaceFilterCheckbox from './MarketplaceFilterCheckbox';
import { ObjectProps, Option } from 'utils/types';
import { useRouter } from 'next/router';
import { stringify } from 'querystring';
import { useAppSelector } from 'store/store.hook';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { convertEnumToSelectOptions } from 'utils/convert';

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
// export const SORT_BY_OPTIONS = [
//   { key: 'Lowest ID', text: 'Lowest ID', value: { orderBy: 'id', desc: false } },
//   { key: 'Highest ID', text: 'Highest ID', value: { orderBy: 'id', desc: true } },
//   { key: 'Lowest Price', text: 'Lowest Price', value: { orderBy: 'price', desc: false } },
//   { key: 'Highest Price', text: 'Highest Price', value: { orderBy: 'price', desc: true } },
//   { key: 'Recently Listed', text: 'Recently Listed', value: { orderBy: 'createdAt', desc: true } }
// ];

export type searchParamsProps = {
  search: string;
  orderBy: string;
  listedByMe: boolean;
  elements: string[];
  minPrice: number;
  maxPrice: number;
};

const DEFAULT_SEARCH_PARAMS: searchParamsProps = {
  search: '',
  orderBy: '',
  listedByMe: false,
  elements: [],
  minPrice: 0,
  maxPrice: 0
};

export interface MarketplaceFilterProps {
  elementOptions: Option[];
}

export const convertQueryToFormaValues = (query: ObjectProps) => {
  let result = {};

  // codes using router.query
  for (const [key, value] of Object.entries(query)) {
    if (key === 'owner') {
      result = { ...result, listedByMe: true };
    } else if (key === 'orderBy') {
      if (value === 'price') {
        if (query['desc'] === 'true') {
          result = { ...result, orderBy: SORT_BY.HIGHEST_PRICE };
        } else {
          result = { ...result, orderBy: SORT_BY.LOWEST_PRICE };
        }
      } else if (value === 'id') {
        if (query['desc'] === 'true') {
          result = { ...result, orderBy: SORT_BY.HIGHEST_ID };
        } else {
          result = { ...result, orderBy: SORT_BY.LOWEST_ID };
        }
      } else {
        result = { ...result, orderBy: SORT_BY.RECENTLY_LISTED };
      }
    } else if (key === 'desc') {
      continue;
    } else {
      result = { ...result, [key]: value };
    }
  }

  return result;
};

export default function MarketplaceFilter({ elementOptions }: MarketplaceFilterProps) {
  const { query, isReady, pathname, push } = useRouter();
  const { address } = useAppSelector(selectAuthData);
  const method = useForm({
    defaultValues: DEFAULT_SEARCH_PARAMS
  });

  const handleResetFilter = useCallback(
    (query = {}) => {
      method.reset({ ...DEFAULT_SEARCH_PARAMS, ...convertQueryToFormaValues(query) });
    },
    [method]
  );

  useEffect(() => {
    if (!isReady) return;
    handleResetFilter(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  const handleSearchParams = () => {
    const values = method.getValues() as any;

    const params = _keys(values).reduce((result: ObjectProps, key: string) => {
      const value = values[key];
      if (!_isEmpty(value) || _isBoolean(value) || (_isNumber(value) && value > 0)) {
        if (key === 'listedByMe') {
          if (value) result['owner'] = address;
        } else if (key === 'orderBy') {
          switch (value) {
            case SORT_BY.LOWEST_ID: {
              result['orderBy'] = 'id';
              result['desc'] = false;
              break;
            }
            case SORT_BY.HIGHEST_ID: {
              result['orderBy'] = 'id';
              result['desc'] = true;
              break;
            }
            case SORT_BY.LOWEST_PRICE: {
              result['orderBy'] = 'price';
              result['desc'] = false;
              break;
            }
            case SORT_BY.HIGHEST_PRICE: {
              result['orderBy'] = 'price';
              result['desc'] = true;
              break;
            }
            default: {
              result['orderBy'] = 'createdAt';
              result['desc'] = true;
              break;
            }
          }
        } else {
          result[key] = value;
        }
      }
      return result;
    }, {});

    push(`${pathname}?${stringify(params)}`, undefined, { shallow: true });
  };

  return (
    <FormProvider {...method}>
      <MarketplaceFilterSearch name="search" callback={handleSearchParams} />
      <MarketplaceFilterHeader onResetFilter={handleResetFilter} />
      <MarketplaceFilterSelect name="orderBy" options={SORT_BY_OPTIONS} callback={handleSearchParams} />
      <MarketplaceFilterSwitch name="listedByMe" label="Listed By Me" callback={handleSearchParams} />
      <MarketplaceFilterCheckbox
        disabled
        name="elements"
        label="Elements"
        options={elementOptions}
        callback={handleSearchParams}
      />
      <MarketplaceFilterMinMax disabled nameMin="minPrice" nameMax="maxPrice" callback={handleSearchParams} />
    </FormProvider>
  );
}
