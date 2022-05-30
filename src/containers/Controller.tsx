import { AppFooter, AppHeader } from 'containers';
import { useNotification } from 'hooks';
import { default as jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from 'reducers/profileSlice';
import { saveSystem } from 'reducers/systemSlice';
import { systemService, walletService } from 'services';

const Controller = ({ children }: any) => {
  useNotification();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const profile = JSON.parse(localStorage.getItem('profile')!);
      jwtDecode(profile.accessToken);
      dispatch(signIn(profile));
      walletService.connectProvider();
    } catch {
      dispatch(signOut());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {} = useQuery(['fetchPayments'], () => systemService.fetchPayments());
  const { isSuccess } = useQuery(['fetchConfig'], () => systemService.fetchConfig(), {
    onSuccess: (data) => dispatch(saveSystem(data)),
  });

  return (
    <>
      <AppHeader />
      <main>{isSuccess ? children : null}</main>
      <AppFooter />
    </>
  );
};

export default Controller;
