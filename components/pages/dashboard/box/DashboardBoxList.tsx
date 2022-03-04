import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import EmptyBanner from 'components/display/empty/EmptyBanner';

import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Box, GridBox } from '@whammytechvn/wt-components';
import { useRouter } from 'next/router';
import DashboardBoxCard from './DashboardBoxCard';
import { selectBoxData } from 'store/box/box.slice';
import { getBoxesThunk } from 'store/box/box.api';

export default function DashboardBoxList() {
  const router = useRouter();
  const goTo = (itemId: string) => {
    router.push(`/dashboard/box/${itemId}`);
  };
  const dispatch = useAppDispatch();
  const boxes = useAppSelector(selectBoxData);

  useEffect(() => {
    dispatch(getBoxesThunk());
  }, [dispatch]);

  if (_isEmpty(boxes)) {
    return (
      <Box className="h-[48rem] text-white">
        <EmptyBanner title="No items found" />
      </Box>
    );
  }

  return (
    <GridBox className="grid-cols-fluid-42 gap-8">
      {_map(boxes, item => (
        <DashboardBoxCard key={item.id} item={item} onClick={() => goTo(item.id)} />
      ))}
    </GridBox>
  );
}
