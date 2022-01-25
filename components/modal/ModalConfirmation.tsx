import React from 'react';
import useModalConfirmation from 'hooks/useModal';
import ModalContainer from './components/ModalContainer';
import ModalOverlay from './components/ModalOverlay';
import { Stack } from '@whammytechvn/wt-components';
import ModalTypeAccount from './types/ModalTypeAccount';
import ModalTypeConfirm from './types/ModalTypeConfirm';

export default function ModalConfirmation() {
  const { isOpened, type, title, description, confirm, decline } = useModalConfirmation();

  return isOpened ? (
    <ModalOverlay>
      <ModalContainer decline={decline}>
        {type === 'account' && <ModalTypeAccount decline={decline} />}
        {type === 'confirm' && (
          <ModalTypeConfirm title={title} description={description} decline={decline} confirm={confirm} />
        )}
      </ModalContainer>
    </ModalOverlay>
  ) : null;
}
