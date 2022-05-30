import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { publicRoute } from 'routes';

type RequiredLoginType = {
  requiredLogin?: boolean;
};

const useRequiredLogin = (props?: RequiredLoginType) => {
  const { isLoggedIn } = useSelector(profileSelector);
  const { requiredLogin = true } = props ?? {};

  useEffect(() => {
    if (!isLoggedIn) {
      if (requiredLogin) {
        Router.push(publicRoute.home.path);
      }
    }
  }, [isLoggedIn, requiredLogin]);
};

export default useRequiredLogin;
