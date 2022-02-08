import { ModalConfirmationPayload } from '../store/modal-confirmation/modalConfirmation.slice';
import { useDispatch, useSelector } from 'react-redux';
import { modalConfirmationActions } from '../store/modal-confirmation/modalConfirmation.slice';
import modalConfirmationThunkActions from '../store/modal-confirmation/modalConfirmation.thunk';
import { AppDispatch, AppState } from '../store/store';

function useModal() {
  const dispatch: AppDispatch = useDispatch();

  const { isOpened, title, description, type } = useSelector(
    ({ modalConfirmation: { isOpened, title, description, type, size } }: AppState) => ({
      isOpened,
      title,
      description,
      type,
      size
    })
  );

  const open = async ({ description, title, type }: ModalConfirmationPayload) => {
    const { payload } = await dispatch(modalConfirmationThunkActions.open({ title, description, type, size }));
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
    title,
    description,
    type,
    size,
    open,
    confirm,
    decline
  };
}

export default useModal;
