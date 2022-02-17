import { Flex, Heading } from '@whammytechvn/wt-components';
import MetaverseCard from './card/MetaverseCard';

import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { getAirdropEvents } from 'store/market/airdrop-event/airdropEvent.api';
import { selectAirdropEventData } from 'store/market/airdrop-event/airdropEvent.slice';

import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';

const MetaverseCardList: FC = () => {
  const dispatch = useAppDispatch();
  const airdropEvents = useAppSelector(selectAirdropEventData);
  const isEmptyAirdropEvents = _isEmpty(airdropEvents);

  useEffect(() => {
    dispatch(getAirdropEvents());
  }, [dispatch]);

  if (isEmptyAirdropEvents) {
    return (
      <Flex className="flex-col items-center justify-center gap-8 min-h-[60rem]">
        <Heading as="h1" className="text-white text-4xl">
          No Events Available
        </Heading>
      </Flex>
    );
  }

  return (
    <>
      {_map(airdropEvents, airdropEvent => (
        <MetaverseCard
          key={airdropEvent.id}
          name={airdropEvent.name}
          description={airdropEvent.description}
          condition={airdropEvent.condition}
          bgImgSrc={airdropEvent.backgroundImage}
          bgImgAlt={airdropEvent.description}
          itemImgSrc={airdropEvent.itemImage}
          itemImgAlt={airdropEvent.description}
        />
      ))}
    </>
  );
};

export default MetaverseCardList;
