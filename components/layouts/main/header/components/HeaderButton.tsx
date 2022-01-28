import { Box } from '@whammytechvn/wt-components';
import { useAccount } from 'wagmi';
import HeaderButtonLogin from './HeaderButtonLogin';
import HeaderButtonUser from './HeaderButtonUser';

const HeaderButton = () => {
  const [{ data: account }] = useAccount();
  return <Box>{account?.address ? <HeaderButtonUser /> : <HeaderButtonLogin />}</Box>;
};

export default HeaderButton;
