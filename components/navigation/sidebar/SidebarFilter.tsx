import { Box, Flex, Grid } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import MarketplaceFilter from 'components/pages/marketplace/filter/MarketplaceFilter';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { ObjectProps } from 'utils/types';
import { convertEnumToSelectOptions } from 'utils/convert';

export const MARKETPLACE_ITEMS = {
  SHIRT: 'Shirt',
  TROUSERS: 'Trousers',
  ACCESSORY: 'Accessory',
  FOODS: 'Foods',
  SEEDS: 'Seeds',
  SETS: 'Sets'
};

export const MARKETPLACE_CHARACTERS = {
  MALE: 'Male',
  FEMALE: 'Female'
};

export const MARKETPLACE_LANDS = {
  LARGE_SIZE: 'Large',
  MEDIUM_SIZE: 'Medium',
  SMALL_SIZE: 'Small'
};

const ELEMENTS_BY_ROUTES: ObjectProps = {
  items: MARKETPLACE_ITEMS,
  characters: MARKETPLACE_CHARACTERS,
  lands: MARKETPLACE_LANDS
};

export default function SidebarFilter({ children }: { children: ReactNode }) {
  const cxTabsWrapper = classNames('flex-col gap-[2.5rem] mt-48 pb-48 min-w-[18rem] max-w-[35rem] w-full');
  const currentIndex = useRouter().pathname.split('/').pop() as string;
  const elements = convertEnumToSelectOptions(ELEMENTS_BY_ROUTES[currentIndex]);

  return (
    <Grid className="grid-cols-4 items-start justify-start w-full gap-x-6 gap-y-4">
      <Flex className={cxTabsWrapper}>
        <MarketplaceFilter elementOptions={elements} />
      </Flex>
      <Box className="col-span-3 w-full h-full text-white text-sm">{children}</Box>
    </Grid>
  );
}
