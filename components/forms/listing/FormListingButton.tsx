import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';

export interface FormListingButtonProps {
  nftItemId: string;
  nftItemImg: StaticImageData;
}

export default function FormListingButton({ nftItemId, nftItemImg }: FormListingButtonProps) {
  //   const dispatch = useAppDispatch();
  const { open } = useModalConfirmation();

  const handleOnClick = async () => {
    const resultListing = await open({ type: 'listing', size: 'fit', data: { nftItemId, nftItemImg } });

    if (resultListing) {
      await open({ type: 'completed', size: 'md' });
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
