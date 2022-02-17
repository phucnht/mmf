import { Flex, Heading } from '@whammytechvn/wt-components';
import MetaverseCard from './card/MetaverseCard';

import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { getAirdropEvents } from 'store/market/airdrop-event/airdropEvent.api';
import { selectAirdropEventData } from 'store/market/airdrop-event/airdropEvent.slice';

import _map from 'lodash/map';

const MetaverseCardList: FC = () => {
  const dispatch = useAppDispatch();
  const metaverses = useAppSelector(selectAirdropEventData);

  useEffect(() => {
    dispatch(getAirdropEvents());
  }, [dispatch]);

  return (
    <>
      {_map(metaverses, metaverse => (
        <MetaverseCard key={metaverse.id} metaverse={metaverse} />
      ))}
    </>
  );
};

export default MetaverseCardList;
