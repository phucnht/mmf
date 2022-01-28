import TextCopyable from 'components/display/TextCopyable';
import Image from 'components/display/Image';
import { FC } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { useAccount } from 'wagmi';
import imgAvatar from 'public/assets/profile/avatar.png';
import imgAvatarFrame from 'public/assets/profile/avatar-frame.png';
import { Box, Stack } from '@whammytechvn/wt-components';
import classNames from 'classnames';

interface UserAvatarProps {
  className?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ className }) => {
  const [{ data: account }] = useAccount();
  const cxUserAvatar = classNames('flex-col', className);

  return (
    <Stack className={cxUserAvatar}>
      <Box className="relative min-w-full flex items-center justify-center mb-2">
        <Box className="absolute">
          <Image src={imgAvatar} alt="Anthony93" />
        </Box>
        <Image src={imgAvatarFrame} alt="Avatar Frame" />
      </Box>
      <Stack className="text-white text-normal text-md flex-col">
        <Box className="font-black text-2xl">Anthony93</Box>
        <Box className="flex justify-center items-center">
          <TextCopyable value={getEllipsisTxt(account?.address)} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default UserAvatar;
