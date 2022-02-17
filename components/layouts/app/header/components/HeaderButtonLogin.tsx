import { ButtonImage, Text } from '@whammytechvn/wt-components';
import { connect } from 'store/account/auth/auth.api';
import { selectAuthState } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';

const HeaderButtonLogin = () => {
  const { loading } = useAppSelector(selectAuthState);

  return (
    <ButtonImage
      imgSrc="/assets/bg/bg-header-user.png"
      className="h-[10rem] w-[19.3rem] pt-6"
      onClick={() => connect()}
      disabled={loading}
    >
      <Text>{loading ? 'Login...' : 'Login'}</Text>
    </ButtonImage>
  );
};

export default HeaderButtonLogin;
