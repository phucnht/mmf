import { useEffect } from 'react';

import { MODAL_TYPE, showModal } from 'store/modal/modalSlice';
import { logout } from 'store/auth/authSlice';
import { getSeasonInfos } from 'store/season/seasonApi';
import { useAppDispatch, useAppSelector } from 'store/hook';

import { selectAuth } from './authSlice';

const { ethereum } = window;

const useAuthWeb3 = () => {
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector(selectAuth);

  useEffect(() => {
    if (ethereum === undefined) {
      dispatch(
        showModal({
          type: MODAL_TYPE.FAILED,
          data: { closable: false, title: 'Please install Metamask', subtitle: 'https://metamask.io/download' }
        })
      );
      return;
    }

    getSeasonInfos();

    // Detect if user changes wallet net or change account
    ethereum.on('accountsChanged', () => {
      dispatch(logout());
      window.location.reload();
    });
    ethereum.on('chainChanged', () => {
      window.location.reload();
    });

    if (!loggedIn) {
      dispatch(showModal({ type: MODAL_TYPE.LOGIN, data: { closable: false } }));
      return;
    }
  }, [ethereum, loggedIn]);

  const isLoggedIn = ethereum !== undefined && loggedIn;

  return isLoggedIn;
};

export default useAuthWeb3;
