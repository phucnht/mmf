import { ButtonImage, Text } from '@whammytechvn/wt-components';
import { connect } from 'store/account/auth/auth.api';

const HeaderButtonLogin = () => {
  return (
    <ButtonImage
      imgSrc="/assets/bg/bg-header-user.png"
      className="h-[10rem] w-[19.3rem] pt-6"
      onClick={() => connect()}
    >
      <Text>Login</Text>
    </ButtonImage>
  );
};

export default HeaderButtonLogin;
