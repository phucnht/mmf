import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';

import { ButtonImage, Text } from '@whammytechvn/wt-components';

import HeaderBalance from '../HeaderBalance';
import TextCopyable from 'components/display/text/TextCopyable';
import HeaderButtonLogin from './HeaderButtonLogin';
import { forwardRef, useEffect } from 'react';
import { ButtonImageProps } from '@whammytechvn/wt-components/dist/controls/button-image/ButtonImage.i';
import { useAppDispatch, useAppSelector } from 'store/store.hook';
import { logout, selectAuthData } from 'store/account/auth/auth.slice';
import { selectProfileData } from 'store/account/profile/profile.slice';
import { getProfileByAddress } from 'store/account/profile/profile.api';
import { formatUsername } from 'utils/format';
import classNames from 'classnames';
import Divider from 'components/display/divider/Divider';

const ButtonImageRef = forwardRef<any, ButtonImageProps>(({ children, ...props }: ButtonImageProps, ref) => {
  return (
    <div ref={ref}>
      <ButtonImage {...props}>{children}</ButtonImage>
    </div>
  );
});

ButtonImageRef.displayName = 'ButtonImageRef';

const HeaderButtonUser = () => {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const { accessToken, address, balance, balance2 } = useAppSelector(selectAuthData);
  const { username } = useAppSelector(selectProfileData);
  const cxTab = (path?: string, isLast = false) =>
    classNames('px-8 py-4 uppercase font-bold hover:bg-green-500/70 cursor-pointer', {
      'bg-green-500': path ? pathname.startsWith(path) : false,
      'hover:rounded-b-[2rem]': isLast
    });

  useEffect(() => {
    if (accessToken) {
      dispatch(getProfileByAddress({ address }));
    }
  }, [accessToken, dispatch, address]);

  const router = useRouter();
  const goTo = (path: string) => {
    router.push(path);
  };

  if (!accessToken) {
    return <HeaderButtonLogin />;
  }

  return (
    <Popover className="relative">
      <Popover.Button as={ButtonImageRef} imgSrc="/assets/bg/bg-header-user.png" className="h-[10rem] w-[19.3rem] pt-6">
        <Text className="truncate capitalize font-bold">{formatUsername(username)}</Text>
      </Popover.Button>
      <Transition
        as="div"
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        className="absolute right-0"
      >
        <Popover.Panel className="text-white text-md bg-blue-400 rounded-[2rem] min-w-[20rem]">
          {({ close }) => (
            <>
              <TextCopyable className="px-8 py-4" value={address} />
              <Divider />
              <HeaderBalance className="px-8 py-4" value={balance} />
              <HeaderBalance className="px-8 py-4" value={balance2} />
              <div
                role="navigation"
                onClick={() => {
                  goTo('/inventory/airdrop');
                  close();
                }}
                className={cxTab('/inventory')}
              >
                Inventory
              </div>
              <div role="navigation" onClick={() => dispatch(logout())} className={cxTab(undefined, true)}>
                Disconnect
              </div>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderButtonUser;
