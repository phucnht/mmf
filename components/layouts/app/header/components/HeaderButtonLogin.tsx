import { useConnect } from 'wagmi';
import { ButtonImage, Text } from '@whammytechvn/wt-components';

const HeaderButtonLogin = () => {
  const [{ data }, connect] = useConnect();

  const loginWeb3 = () => {
    connect(data.connectors[0]);
  };

  return (
    <ButtonImage imgSrc="/assets/bg/bg-header-user.png" className="h-[10rem] w-[19.3rem] pt-6" onClick={loginWeb3}>
      <Text>Login</Text>
    </ButtonImage>
  );
};

export default HeaderButtonLogin;
