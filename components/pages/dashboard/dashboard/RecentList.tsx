import _map from 'lodash/map';
import List from 'components/display/list/List';
import Image from 'components/display/image/CustomImage';
import { ObjectProps } from 'utils/types';
import { IconStarList } from 'components/icon/IconStar';
import { useQuery } from 'react-query';
import { clientMarket } from 'utils/api';
import { useState } from 'react';
import { formatUsername } from 'utils/format';
import { DateTime } from 'luxon';
import { Button } from '@whammytechvn/wt-components';

const { Container, Item, ItemAvatar, ItemText } = List;

export interface RecentListProps {
  items: ObjectProps[];
}

export const RecentListBuyerSeller = () => {
  const [search, setSearch] = useState({ page: 1, size: 10, fromDate: 0, toDate: Date.now() });

  const { data = {} } = useQuery(
    ['/statistics/recent', search],
    () => clientMarket.get(`/statistics/recent`, { params: search }),
    { keepPreviousData: true }
  ) as any;
  const { items = [], currentPage = 0, hasNext, hasPrevious } = data;

  const onSearchChange = (data: any) => {
    setSearch(search => ({
      ...search,
      ...data
    }));
  };

  return (
    <Container title="TRANSACTIONS">
      <List>
        {_map(items, item => (
          <Item key={item.tokenId}>
            <ItemAvatar className="flex items-center justify-center m-0 px-3 py-2 border border-gray-300">
              <Image src={item.itemId.external.iconUrl} alt={item.tokenId} width={40} height={40} />
            </ItemAvatar>
            <ItemText className="w-[18rem]" primary={item.itemId.external.name} secondary={`#${item.tokenId}`} />
            <ItemText className="w-[10rem]" primary="Rarity" secondary={item.itemId.external.rarity} />
            <ItemText className="w-[18rem]" primary="Seller" secondary={formatUsername(item.fromAddress)} />
            <ItemText className="w-[18rem]" primary="Buyer" secondary={formatUsername(item.toAddress)} />
            <ItemText className="w-[10rem]" primary="Price" secondary={`${item.price} ${item.paymentToken.symbol}`} />
            <ItemText primary="Time" secondary={DateTime.fromISO(item.createdAt).toFormat('MMM dd, yyyy')} />
          </Item>
        ))}
      </List>
      <div className="flex justify-center items-center gap-2 mt-10">
        <Button
          className="min-w-[0rem] py-3 rounded-full"
          color={hasPrevious ? 'primary' : 'default'}
          disabled={!hasPrevious}
          onClick={() => onSearchChange({ size: search.size - 1 })}
        >
          {'<'}
        </Button>
        <Button className="min-w-[0rem] py-3 rounded-full">{currentPage}</Button>
        <Button
          className="min-w-[0rem] py-3 rounded-full"
          color={hasNext ? 'primary' : 'default'}
          disabled={!hasNext}
          onClick={() => onSearchChange({ size: search.size + 1 })}
        >
          {'>'}
        </Button>
      </div>
    </Container>
  );
};
