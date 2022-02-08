import { useRouter } from 'next/router';
import { Popover, Transition } from '@headlessui/react';

import { ButtonImage, Text } from '@whammytechvn/wt-components';

import HeaderBalance from '../HeaderBalance';
import TextCopyable from 'components/display/TextCopyable';
import { useAccount, useBalance } from 'wagmi';
import HeaderButtonLogin from './HeaderButtonLogin';
import { forwardRef } from 'react';
import { ButtonImageProps } from '@whammytechvn/wt-components/dist/controls/button-image/ButtonImage.i';

const ButtonImageRef = forwardRef<any, ButtonImageProps>(({ children, ...props }: ButtonImageProps, ref) => {
  return (
    <div ref={ref}>
      <ButtonImage {...props}>{children}</ButtonImage>
    </div>
  );
});

const HeaderButtonUser = () => {
  const [{ data: account }, disconnect] = useAccount();

  const [{ data: balanceToken1, loading: loadingToken1 }] = useBalance({
    addressOrName: process.env.NEXT_PUBLIC_TOKEN_1
  });
  const [{ data: balanceToken2, loading: loadingToken2 }] = useBalance({
    addressOrName: process.env.NEXT_PUBLIC_TOKEN_2
  });

  const router = useRouter();
  const goTo = (path: string) => {
    router.push(path);
  };

  if (!account?.address) {
    return <HeaderButtonLogin />;
  }

  return (
    <Popover className="relative">
      <Popover.Button as={ButtonImageRef} imgSrc="/assets/bg-header-user.png" className="h-[10rem] w-[19.3rem] pt-6">
        <Text className="truncate capitalize font-bold">Anthony93</Text>
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
        <Popover.Panel className="text-white text-sm bg-blue-400 rounded-[2rem] py-8 min-w-[20rem]">
          <TextCopyable className="px-8 py-4" value={account?.address} />
          <HeaderBalance className="px-8 py-4" value={balanceToken1?.formatted} loading={loadingToken1} />
          <HeaderBalance className="px-8 py-4" value={balanceToken2?.formatted} loading={loadingToken2} />
          <div
            role="navigation"
            onClick={() => goTo('/marketplace/inventory')}
            className="px-8 py-4 font-bold hover:bg-green-500 cursor-pointer"
          >
            Inventory
          </div>
          <div role="navigation" onClick={disconnect} className="px-8 py-4 font-bold hover:bg-green-500 cursor-pointer">
            Disconnect
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderButtonUser;
