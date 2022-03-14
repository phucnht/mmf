import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';
import { ObjectProps } from 'utils/types';

export interface FormListingButtonProps {
  item: ObjectProps;
}

export default function FormListingButton({ item }: FormListingButtonProps) {
  //   const dispatch = useAppDispatch();
  const { open } = useModalConfirmation();

  const handleOnClick = async () => {
    const resultListing = await open({
      type: 'listing',
      size: 'fit',
      data: { ...item }
    });

    if (resultListing) {
      await open({ type: 'completed', size: 'md', data: { type: 'marketplace' } });
    }
  };

  return (
    <Button
      color="secondary"
      className="text-red-100 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl"
      content="Listing Now"
      onClick={handleOnClick}
    />
  );
}
