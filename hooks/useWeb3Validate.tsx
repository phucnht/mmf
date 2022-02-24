import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { logout } from 'store/account/auth/auth.slice';
import { useAppDispatch } from 'store/store.hook';
import Link from 'components/navigation/link/Link';
import { Flex, Text } from '@whammytechvn/wt-components';

const ToastWithLink = () => (
  <Flex className="flex-col">
    <Text className="font-black">Please install Metamask:</Text>
    <Link href="https://metamask.io/download">https://metamask.io/download</Link>
  </Flex>
);

export default function useWeb3Validate() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum === undefined) {
      toast.error(<ToastWithLink />);
      return;
    }

    // Detect if user changes wallet net or change account
    ethereum.on('accountsChanged', () => {
      dispatch(logout());
      window.location.reload();
    });
    ethereum.on('chainChanged', () => {
      window.location.reload();
    });
  }, [dispatch]);
}
