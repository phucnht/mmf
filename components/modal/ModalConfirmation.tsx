import React from 'react';
import useModalConfirmation from 'hooks/useModal';
import ModalContainer from './components/ModalContainer';
import ModalOverlay from './components/ModalOverlay';
import ModalTypeAccount from './types/ModalTypeAccount';
import ModalTypeConfirm from './types/ModalTypeConfirm';
import ModalTypeCreateGameProfile from './types/ModalTypeCreateGameProfile';
import { useAppDispatch } from 'store/store.hook';
import useUnload from 'hooks/useUnload';
import ModalTypeLoginRequired from './types/ModalTypeLoginRequired';

export default function ModalConfirmation() {
  const { isOpened, type, size, title, description, confirm, decline } = useModalConfirmation();
  const dispatch = useAppDispatch();

  useUnload(() => {
    dispatch(decline());
  });

  return isOpened ? (
    <ModalOverlay>
      <ModalContainer decline={decline} size={size}>
        {type === 'createGameProfile' && <ModalTypeCreateGameProfile />}
        {type === 'account' && <ModalTypeAccount decline={decline} />}
        {type === 'login' && <ModalTypeLoginRequired decline={decline} />}
        {type === 'confirm' && (
          <ModalTypeConfirm title={title} description={description} decline={decline} confirm={confirm} />
        )}
      </ModalContainer>
    </ModalOverlay>
  ) : null;
}
