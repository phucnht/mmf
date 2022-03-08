import { ButtonImage, Text } from '@whammytechvn/wt-components';
import { connect } from 'store/account/auth/auth.api';
import { selectAuthState } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';

const HeaderButtonLogin = () => {
  const { loading } = useAppSelector(selectAuthState);

  return (
    <ButtonImage
      imgSrc="/assets/bg/bg-header-user.png"
      className="bg-contain h-[8rem] w-[16rem] xl:h-[10rem] xl:w-[19.3rem] pt-6"
      onClick={() => connect()}
      disabled={loading}
    >
      <Text className="text-sm xl:text-md">Login</Text>
    </ButtonImage>
  );
};

export default HeaderButtonLogin;
