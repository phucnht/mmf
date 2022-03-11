import TextCopyable from 'components/display/text/TextCopyable';
import Image from 'components/display/image/CustomImage';
import { FC } from 'react';
import { formatUsername, getEllipsisTxt } from 'utils/format';
import imgAvatar from 'public/assets/sidebar/avatar.png';
import imgAvatarFrame from 'public/assets/sidebar/avatar-frame.png';
import { Box, Stack } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { useAppSelector } from 'store/store.hook';
import { selectProfileData } from 'store/account/profile/profile.slice';
interface UserAvatarProps {
  className?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ className }) => {
  const { username, address, avatar } = useAppSelector(selectProfileData);
  const cxUserAvatar = classNames('flex-col', className);

  return (
    <Stack className={cxUserAvatar}>
      <Box className="relative min-w-full flex items-center justify-center mb-2">
        <Box className="absolute">
          <Image src={avatar || imgAvatar} alt={username || 'Unknown'} />
        </Box>
        <Image src={imgAvatarFrame} alt="Avatar Frame" />
      </Box>
      <Stack className="text-white text-normal text-md flex-col">
        <Box className="font-black text-2xl">{formatUsername(username)}</Box>
        <Box className="flex justify-center items-center">
          <TextCopyable value={getEllipsisTxt(address)} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default UserAvatar;
