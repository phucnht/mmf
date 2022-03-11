import { Box, Flex, Stack, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import Image from 'components/display/image/CustomImage';
import { ReactNode } from 'react';
import imgCharacter1 from 'public/assets/items/characters/character-1.png';

export interface CardImageCharacterProps {
  id?: string;
  name?: string;
  imgSrc?: StaticImageData | undefined;
  className?: string;
  children?: ReactNode;
}

export default function CardImageCharacter({ imgSrc, className, name, children }: CardImageCharacterProps) {
  const cxCardWrapper = classNames(
    "mx-auto relative h-[42rem] max-w-[48rem] items-start justify-center bg-[url('/assets/bg/bg-character.svg')] bg-[length:46.3rem_100%] bg-no-repeat bg-center",
    className
  );
  const renderContent = children || <Text className="text-center">{name}</Text>;

  return (
    <Box className="w-full">
      <Flex className={cxCardWrapper}>
        <Image
          alt={name}
          src={imgSrc || imgCharacter1}
          layout="fill"
          objectFit="cover"
          className="character-frame-clip scale-95 translate-x-3 translate-y-4"
        />
        <SvgCharacterFrame />
        <span className='absolute bottom-14 left-20 bg-[url("/assets/items/characters/cf-flower-left.png")] w-[5.4rem] h-[4.6rem] bg-auto bg-no-repeat bg-center' />
        <span className='absolute bottom-14 right-24 bg-[url("/assets/items/characters/cf-flower-right.png")] w-[4.8rem] h-[4.1rem] bg-auto bg-no-repeat bg-center' />
        <Stack className="absolute bottom-0">
          <Stack className="justify-center w-full">
            <Box className="absolute text-2xl font-bold">{renderContent}</Box>
            <SvgCharacterTitle />
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

const SvgCharacterFrame = () => {
  return (
    <svg>
      <clipPath id="characterFrameClip">
        <path d="M0 75.0875V317.66C0 340.82 23.8136 358.539 60.6526 370.906C64.2572 372.158 68.2087 372.341 71.9356 371.427C75.6625 370.513 78.9714 368.551 81.3839 365.824C85.0941 361.45 89.8661 357.906 95.3312 355.465C100.796 353.025 106.808 351.753 112.903 351.748H350.841C356.773 351.772 362.625 352.995 367.967 355.33C373.309 357.664 378.006 361.05 381.714 365.239C384.117 367.843 387.351 369.711 390.973 370.588C394.595 371.466 398.428 371.309 401.948 370.141C439.433 357.684 463.694 340.191 463.694 317.75V75.0875C463.694 -27.1761 0 -22.859 0 75.0875Z" />
      </clipPath>
    </svg>
  );
};

const SvgCharacterTitle = () => (
  <svg width="270" height="57" viewBox="0 0 270 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.910828" width="269.045" height="57" rx="10" fill="url(#paint0_linear_25_1339)" />
    <g>
      <path
        d="M11.3068 17.1276C12.8765 15.0592 13.6266 12.2771 12.982 10.9135C12.3375 9.54995 10.5425 10.1213 8.97278 12.1897C7.40306 14.2581 6.65304 17.0402 7.29755 18.4038C7.94207 19.7674 9.73704 19.196 11.3068 17.1276Z"
        fill="white"
      />
    </g>
    <g>
      <path
        d="M6.08243 25.1471C6.96066 25.1471 7.67261 23.9584 7.67261 22.492C7.67261 21.0256 6.96066 19.8369 6.08243 19.8369C5.2042 19.8369 4.49225 21.0256 4.49225 22.492C4.49225 23.9584 5.2042 25.1471 6.08243 25.1471Z"
        fill="white"
      />
    </g>
    <g opacity="0.5">
      <path
        d="M259.25 46.2193C261.049 44.762 262.14 42.3136 261.685 40.7508C261.231 39.1879 259.405 39.1024 257.606 40.5597C255.807 42.0171 254.716 44.4654 255.17 46.0282C255.624 47.5911 257.451 47.6766 259.25 46.2193Z"
        fill="white"
      />
    </g>
    <g opacity="0.5">
      <path
        d="M263.398 39.9337C264.277 39.9337 264.989 38.7449 264.989 37.2786C264.989 35.8122 264.277 34.6235 263.398 34.6235C262.52 34.6235 261.808 35.8122 261.808 37.2786C261.808 38.7449 262.52 39.9337 263.398 39.9337Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_25_1339"
        x1="135.433"
        y1="0"
        x2="135.433"
        y2="57"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F5799E" />
        <stop offset="1" stopColor="#DE6585" />
      </linearGradient>
    </defs>
  </svg>
);
