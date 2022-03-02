import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import EmptyBanner from 'components/display/empty/EmptyBanner';

import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import MarketplaceItemCard from './MarketplaceItemCard';
import { getNftItems } from 'store/market/nft-item/nftItem.api';
import { selectAuthData } from 'store/account/auth/auth.slice';

import _random from 'lodash/random';
import _sample from 'lodash/sample';

import imgPants from '/public/assets/inventory/items/pants.png';
import imgHair from '/public/assets/inventory/items/hair.png';
import imgClothes from '/public/assets/inventory/items/clothes.png';
import imgBoots from '/public/assets/inventory/items/boots.png';
import { selectNftItemData } from 'store/market/nft-item/nftItem.slice';

export const MOCK_ITEM = {
  id: '#257578245',
  stars: _random(1, 3),
  element: 'Thunder',
  name: 'Item',
  rarity: _sample(['blue', 'green', 'pink', 'yellow']),
  breedCount: 3,
  imgSrc: _sample([imgPants, imgHair, imgClothes, imgBoots]),
  priceBNB: 11356,
  priceUSD: 1127
};

const MarketplaceItemCardList: FC = () => {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/marketplace/items/${itemId}`);
  };

  const dispatch = useAppDispatch();
  const nftItems = useAppSelector(selectNftItemData);

  useEffect(() => {
    dispatch(getNftItems({}));
  }, [dispatch]);

  if (_isEmpty(nftItems)) {
    return (
      <Box className="h-[48rem]">
        <EmptyBanner title="No items found" />
      </Box>
    );
  }

  return (
    <GridBox className="grid-cols-fluid-31 gap-4">
      {_map(nftItems, _item => {
        const item = { ...MOCK_ITEM, id: _item.id, name: _item.name };
        return (
          <>
            <MarketplaceItemCard key={item.id} item={item} onClick={() => goTo(item.id)} />
          </>
        );
      })}
    </GridBox>
  );
};

export default MarketplaceItemCardList;
