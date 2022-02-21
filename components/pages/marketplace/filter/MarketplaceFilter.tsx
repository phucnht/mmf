import { FormProvider, useForm } from 'react-hook-form';
// import FilterHeader from 'components/filters/header/FilterHeader';
// import FilterSelect from 'components/filters/selects/FilterSelect';
// import FilterSwitchBox from 'components/filters/selects/FilterSwitchBox';
// import FilterRange from 'components/filters/range/FilterRange';
// import FilterAccordion from 'components/filters/accordion/FilterAccordion';
// import FilterPrice from 'components/filters/price/FilterPrice';
// import { InputOutlined } from 'components/inputs';
import _keys from 'lodash/keys';
import _isBoolean from 'lodash/isBoolean';
import _isNumber from 'lodash/isNumber';
import _isEmpty from 'lodash/isEmpty';

import { useState } from 'react';
import MarketplaceFilterHeader from './MarketplaceFilterHeader';
// import { DevTool } from '@hookform/devtools';

// const listClass = {
//   items: [
//     { content: 'Assasin1', isActive: false },
//     { content: 'Marksman', isActive: false },
//     { content: 'Starpunk', isActive: false },
//     { content: 'Techie', isActive: false }
//   ]
// };

// const elementClass = {
//   items: [
//     { content: 'Assasin12', isActive: false },
//     { content: 'Marksman2', isActive: false },
//     { content: 'Starpunk2', isActive: false },
//     { content: 'Techie2', isActive: false }
//   ]
// };

export interface CheckBoxProps {
  key: string;
  value: string;
}

export interface SearchParamsProps {
  [x: string]: any;
}

export type FilterProps = {
  searchParams: SearchParamsProps;
  setSearchParams: (searchParams: SearchParamsProps) => void;
};

const DEFAULT_SEARCH_PARAMS = {
  searchTerms: undefined,
  sortBy: undefined,
  listedByMe: false,
  elements: [],
  priceMin: undefined,
  priceMax: undefined
};

export default function MarketplaceFilter() {
  const [searchParams, setSearchParams] = useState<SearchParamsProps>(DEFAULT_SEARCH_PARAMS);
  const method = useForm({
    defaultValues: searchParams
  });

  const handleResetFilter = () => {
    setSearchParams({});
    method.reset(DEFAULT_SEARCH_PARAMS);
  };

  const handleSearchParams = () => {
    const values = method.getValues();
    const params = _keys(values).reduce((result: SearchParamsProps, key: string) => {
      const value = values[key];
      if (!_isEmpty(value) || _isBoolean(value) || (_isNumber(value) && value > 0)) {
        result[key] = value;
      }
      return result;
    }, {});
    setSearchParams(params);
  };

  return (
    <FormProvider {...method}>
      <MarketplaceFilterHeader onResetFilter={handleResetFilter} />
      {/* <FilterHeader onResetFilter={handleResetFilter} />
      <FilterSelect name="sort" className="mt-24" callback={handleSearchParams} />
      <InputOutlined name="text" className="mt-24" callback={handleSearchParams} />
      <FilterSwitchBox
        name="listedByMe"
        className="mt-24 flex justify-between !px-6 text-white cursor-default"
        content="LISTED BY ME"
        isActive={false}
        callback={handleSearchParams}
      />
      <FilterAccordion
        name="class"
        className="mt-24"
        content="Class"
        items={listClass.items}
        callback={handleSearchParams}
      />
      <FilterAccordion
        name="element"
        className="mt-24"
        content="Element"
        items={elementClass.items}
        callback={handleSearchParams}
      />
      <FilterRange name="quality" className="mt-24" content="Quality" callback={handleSearchParams} />
      <FilterRange name="tiers" className="mt-24" content="Tiers" callback={handleSearchParams} />
      <FilterRange name="levels" className="mt-24" content="Levels" callback={handleSearchParams} />
      <FilterPrice name="price" className="mt-24" callback={handleSearchParams} /> */}
    </FormProvider>
  );
}
