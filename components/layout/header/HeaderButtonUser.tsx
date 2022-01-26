import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';

import { Box, Button, ButtonImage, Text } from '@whammytechvn/wt-components';

import HeaderBalance from './HeaderBalance';
import logger from 'utils/logger';
import TextCopyable from 'components/display/TextCopyable';

const ID = '0xf8b04679020Cc5708c7655DA3576960a8c4252B1';

const HeaderButtonUser = () => {
  const router = useRouter();
  const isAuth = true;

  const goTo = (path: string) => {
    router.push(path);
  };

  const logout = () => {
    logger.info('Log out');
  };

  return (
    <Box>
      <Menu>
        <Menu.Button as={ButtonImage} imgSrc="/assets/bg-header-user.png" className="h-[10rem] w-[19.3rem] pt-6">
          {isAuth ? <Text className="truncate capitalize font-bold">Anthony93</Text> : <Text>Login</Text>}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="text-white text-sm bg-blue-400 rounded-[2rem] py-8">
            <Menu.Item>
              <TextCopyable className="px-8 py-4" value={ID} />
            </Menu.Item>
            <Menu.Item>
              <HeaderBalance className="px-8 py-4" value={0.3665} />
            </Menu.Item>
            <Menu.Item>
              <HeaderBalance className="px-8 py-4" value={120.999} />
            </Menu.Item>
            <Menu.Item>
              <div onClick={() => goTo('/inventory')} className="px-8 py-4 font-bold hover:bg-green-500 cursor-pointer">
                Inventory
              </div>
            </Menu.Item>
            <Menu.Item>
              <div onClick={logout} className="px-8 py-4 font-bold hover:bg-green-500 cursor-pointer">
                Disconnect
              </div>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </Box>
  );
};

export default HeaderButtonUser;
