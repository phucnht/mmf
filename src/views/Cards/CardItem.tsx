import { CardMedia, Paper } from '@mui/material';
import { ItemType, RarityType } from 'models/Item';
import { merge } from 'utils/common';

export const ChipItemRarity = ({ rarity }: { rarity: RarityType }) => (
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

const CardItem = ({ item }: { item: ItemType }) => {
  return (
    <Paper elevation={0} className='p-5 rounded-[8px] hover:shadow-card'>
      <div className='font-black text-2xl max-line-1'>{item.name}</div>
      <div className='font-semibold text-sm'>#{item.tokenId}</div>
      <CardMedia
        image={item.external.iconUrl}
        className='flex justify-center items-center h-[240px] relative rounded-[8px] p-8 mt-3'
      >
        <div className='absolute top-3 left-3'>
          <ChipItemRarity rarity={item.external.rarity} />
        </div>
      </CardMedia>
    </Paper>
  );
};

CardItem.Rarity = ChipItemRarity;

export default CardItem;
