import { ModalConfirmationPayload } from '../store/modal-confirmation/modalConfirmation.slice';
import { useDispatch, useSelector } from 'react-redux';
import { modalConfirmationActions } from '../store/modal-confirmation/modalConfirmation.slice';
import modalConfirmationThunkActions from '../store/modal-confirmation/modalConfirmation.thunk';
import { AppDispatch, AppState } from '../store/store';

function useModal() {
  const dispatch: AppDispatch = useDispatch();

  const { isOpened, data, type, size } = useSelector(
    ({ modalConfirmation: { isOpened, data, type, size } }: AppState) => ({
      isOpened,
      data,
      type,
      size
    })
  );

  const open = async ({ type, size, data }: ModalConfirmationPayload) => {
    const { payload } = await dispatch(modalConfirmationThunkActions.open({ type, size, data }));
    return payload;
  };

  const confirm = () => {
    return dispatch(modalConfirmationActions.confirm());
  };

  const decline = () => {
    return dispatch(modalConfirmationActions.decline());
  };

  return {
    isOpened,
    data,
    type,
    size,
    open,
    confirm,
    decline
  };
}

export default useModal;
