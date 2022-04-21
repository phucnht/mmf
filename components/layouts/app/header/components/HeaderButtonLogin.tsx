import { ButtonImage, Text } from '@whammytechvn/wt-components';
import { useNetworkValidate } from 'hooks/useNetworkValidate';
import { connect } from 'store/account/auth/auth.api';
import { selectAuthState } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';
import clsxm from 'utils/clsxm';
import { CxProps } from 'utils/types';

const HeaderButtonLogin = ({ className }: CxProps) => {
  const { loading } = useAppSelector(selectAuthState);
  const [isWrongNetwork] = useNetworkValidate();

  const handleConnectWallet = () => {
    if (isWrongNetwork()) return;
    connect();
  };

  return (
    <ButtonImage
      imgSrc="/assets/bg/bg-header-user.png"
      className={clsxm('h-[6rem] w-[10.5rem] sm:w-[16rem] xl:h-[9rem] xl:w-[19.3rem] pt-5 lg:pt-6', className)}
      onClick={handleConnectWallet}
      disabled={loading}
    >
      <Text className="text-sm xl:text-md font-bold">Login</Text>
    </ButtonImage>
  );
};

export default HeaderButtonLogin;
