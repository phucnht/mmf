import { ModalConfirmationPayload } from '../store/modal-confirmation/modalConfirmation.slice';
import { useDispatch, useSelector } from 'react-redux';
import { modalConfirmationActions } from '../store/modal-confirmation/modalConfirmation.slice';
import modalConfirmationThunkActions from '../store/modal-confirmation/modalConfirmation.thunk';
import { AppDispatch, AppState } from '../store/store';

function useModal() {
  const dispatch: AppDispatch = useDispatch();

  const { isOpened, data, type, size, isClosable } = useSelector(
    ({ modalConfirmation: { isOpened, data, type, size, isClosable } }: AppState) => ({
      isOpened,
      data,
      type,
      size,
      isClosable
    })
  );

  const open = async ({ type, size, isClosable, data }: ModalConfirmationPayload) => {
    const { payload } = await dispatch(modalConfirmationThunkActions.open({ type, size, data, isClosable }));
    return payload;
  };

  const confirm = () => {
    return dispatch(modalConfirmationActions.confirm({}));
  };

  const decline = () => {
    return dispatch(modalConfirmationActions.decline());
  };

  const close = () => {
    return dispatch(modalConfirmationActions.close());
  };

  return {
    isOpened,
    isClosable,
    data,
    type,
    size,
    open,
    confirm,
    decline,
    close
  };
}

export default useModal;
