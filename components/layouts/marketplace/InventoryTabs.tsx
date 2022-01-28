import { Flex, Box, Text, Stack } from '@whammytechvn/wt-components';
import Image from 'next/image';

import imgIconAirdrop from '/public/assets/icons/airdrop.png';
import imgIconBox from '/public/assets/icons/box.png';
import imgIconCharacters from '/public/assets/icons/characters.png';
import imgIconEvents from '/public/assets/icons/events.png';
import imgIconItems from '/public/assets/icons/items.png';
import imgIconLands from '/public/assets/icons/lands.png';

const tabs = [
  {
    icon: imgIconAirdrop,
    content: 'Characters'
  },
  {
    icon: imgIconBox,
    content: 'Box'
  },
  {
    icon: imgIconCharacters,
    content: 'Characters'
  },
  {
    icon: imgIconEvents,
    content: 'Events'
  },
  {
    icon: imgIconItems,
    content: 'Items'
  },
  {
    icon: imgIconLands,
    content: 'Lands'
  }
];

const InventoryTabs = () => (
  <Flex className="w-full py-10 px-24 rounded-[2rem] bg-green-300 justify-between -mt-[11.5rem] mb-[2.5rem]">
    {tabs.map(tab => (
      <Stack className="uppercase font-black text-md cursor-pointer">
        <Image src={tab.icon} />
        <Text className="ml-3 uppercase">{tab.content}</Text>
      </Stack>
    ))}
  </Flex>
);

export default InventoryTabs;
