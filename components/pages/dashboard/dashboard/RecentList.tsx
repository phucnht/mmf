import _map from 'lodash/map';
import List from 'components/display/list/List';
import Image from 'components/display/image/Image';
import { ObjectProps } from 'utils/types';
import { IconStarList } from 'components/icon/IconStar';

const { Container, Item, ItemAvatar, ItemText } = List;

export interface RecentListProps {
  items: ObjectProps[];
}

export const RecentListLevelBadges = ({ items }: RecentListProps) => {
  return (
    <Container title="Recently listed">
      <List>
        {_map(items, (item, index) => (
          <Item key={index}>
            <ItemAvatar>
              <Image src={item.imgUrl} alt={item.id} />
            </ItemAvatar>
            <ItemText primary="ID" secondary={item.id} />
            <ItemText primary="Level" secondary={item.level} />
            <IconStarList count={item.stars} className="gap-2" />
            <ItemText
              isCurrency
              className="flex-1"
              primary={item.price.base}
              secondary={
                <div className="flex flex-col">
                  <span>{item.price.toUSD}</span>
                  <span className="text-xs opacity-50">{item.price.lastUpdated}</span>
                </div>
              }
            />
          </Item>
        ))}
      </List>
    </Container>
  );
};

export const RecentListBuyerSeller = ({ items }: RecentListProps) => {
  return (
    <Container title="Recently listed">
      <List>
        {_map(items, (item, index) => (
          <Item key={index}>
            <ItemAvatar>
              <Image src={item.imgUrl} alt={item.id} />
            </ItemAvatar>
            <ItemText primary="ID" secondary={item.id} />
            <ItemText primary="Buyer" secondary={item.buyer.address} />
            <ItemText primary="Seller" secondary={item.seller.address} />
            <ItemText
              isCurrency
              className="flex-1"
              primary={item.price.base}
              secondary={
                <div className="flex flex-col">
                  <span>{item.price.toUSD}</span>
                  <span className="text-xs opacity-50">{item.price.lastUpdated}</span>
                </div>
              }
            />
          </Item>
        ))}
      </List>
    </Container>
  );
};
