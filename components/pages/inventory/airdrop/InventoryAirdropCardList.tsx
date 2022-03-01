import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { selectInventoryData } from 'store/market/nft-item/inventory.slice';
import EmptyBanner from 'components/display/empty/EmptyBanner';

import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import InventoryAirdropCard from './InventoryAirdropCard';
import { getInventory } from 'store/market/nft-item/nftItem.api';
import { selectAuthData } from 'store/account/auth/auth.slice';

const InventoryAirdropCardList: FC = () => {
  const { address } = useAppSelector(selectAuthData);
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/inventory/airdrop/${itemId}`);
  };
  const dispatch = useAppDispatch();
  const inventory = useAppSelector(selectInventoryData);

  useEffect(() => {
    if (address) {
      dispatch(getInventory());
    }
  }, [dispatch, address]);

  if (_isEmpty(inventory)) {
    return (
      <Box className="h-[48rem]">
        <EmptyBanner title="No items found" />
      </Box>
    );
  }

  return (
    <GridBox className="grid-cols-fluid-32 gap-4">
      {_map(inventory, item => (
        <InventoryAirdropCard key={item.id} item={item} onClick={() => goTo(item.id)} />
      ))}
    </GridBox>
  );
};

export default InventoryAirdropCardList;
