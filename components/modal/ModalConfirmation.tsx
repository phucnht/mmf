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
import ModalTypeCheckout from './types/ModalTypeCheckout';
import ModalTypeCompleted from './types/ModalTypeCompleted';
import ModalTypeListing from './types/ModalTypeListing';
import ModalTypeFailed from './types/ModalTypeFailed';
import ModalTypeProcessing from './types/ModalTypeProcessing';

export default function ModalConfirmation() {
  const { isOpened, type, size, data, confirm, decline } = useModalConfirmation();
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
        {type === 'checkout' && <ModalTypeCheckout data={data} decline={decline} confirm={confirm} />}
        {type === 'listing' && <ModalTypeListing data={data} confirm={confirm} />}
        {type === 'cancel-listing' && <ModalTypeListing data={data} confirm={confirm} isCancel />}
        {type === 'completed' && <ModalTypeCompleted data={data} decline={decline} />}
        {type === 'processing' && <ModalTypeProcessing />}
        {type === 'failed' && <ModalTypeFailed decline={decline} />}
        {type === 'confirm' && <ModalTypeConfirm data={data} decline={decline} confirm={confirm} />}
      </ModalContainer>
    </ModalOverlay>
  ) : null;
}
