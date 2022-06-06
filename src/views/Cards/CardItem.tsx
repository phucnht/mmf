import { CardMedia, Paper } from '@mui/material';
import { ItemType, RarityType } from 'models/Item';
import { merge } from 'utils/common';

const ChipItemRarity = ({ rarity }: { rarity: RarityType }) => (
  <div
    className={merge('px-2 py-1 rounded-[8px]', {
      'bg-rarity-common': rarity === 'Common',
      'bg-rarity-rare': rarity === 'Rare',
      'bg-rarity-epic': rarity === 'Epic',
      'bg-rarity-legendary': rarity === 'Legendary',
    })}
  >
    <span className='font-semibold text-sm uppercase text-white'>{rarity}</span>
  </div>
);

const CardItem = ({ item, onListing }: { item: ItemType; onListing?: boolean }) => {
  return (
    <Paper elevation={0} className='p-5 rounded-[8px] hover:shadow-md'>
      <div className='font-black text-2xl max-line-1'>{item.name}</div>
      <div className='font-semibold text-sm'>#{item.tokenId}</div>
      <CardMedia image={item.external.backgroundUrl} className='h-[240px] relative p-8 mt-3 border'>
        <div className='absolute top-3 left-3'>
          <ChipItemRarity rarity={item.external.rarity} />
        </div>
        <img src={item.external.iconUrl} className='border' />
      </CardMedia>
    </Paper>
  );
};

CardItem.Rarity = ChipItemRarity;

export default CardItem;
