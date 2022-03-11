import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { inventoryActions, selectInventoryState } from 'store/market/nft-item/inventory.slice';
import EmptyBanner from 'components/display/empty/EmptyBanner';

import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import InventoryAirdropCard from './InventoryAirdropCard';
import { getInventory } from 'store/market/nft-item/nftItem.api';
import { selectAuthData } from 'store/account/auth/auth.slice';
import Pagination from 'components/pagination/Pagination';

const InventoryAirdropCardList: FC = () => {
  const { address } = useAppSelector(selectAuthData);
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/inventory/airdrop/${itemId}`);
  };
  const dispatch = useAppDispatch();
  const { data, currentPage, pages } = useAppSelector(selectInventoryState);

  const cb = (page: number) => {
    dispatch(inventoryActions.updatePage(page));
  };

  useEffect(() => {
    if (address) {
      dispatch(getInventory({ page: currentPage }));
    }
  }, [dispatch, address, currentPage]);

  if (_isEmpty(data)) {
    return (
      <Box className="h-[48rem] text-white">
        <EmptyBanner title="No items found" />
      </Box>
    );
  }

  return (
    <>
      <GridBox className="grid-cols-2 lg:grid-cols-fluid-32 gap-8 lg:gap-4">
        {_map(data, item => (
          <InventoryAirdropCard key={item.tokenId} item={item} onClick={() => goTo(item.id)} />
        ))}
      </GridBox>
      <Pagination index={currentPage} size={pages} cb={cb} className="mt-12" />
    </>
  );
};

export default InventoryAirdropCardList;
