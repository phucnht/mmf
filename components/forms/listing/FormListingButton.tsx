import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';

export interface FormListingButtonProps {
  nftItemId: string;
  nftItemOwnerAddress: string;
  nftItemImg: StaticImageData;
}

export default function FormListingButton({ nftItemId, nftItemOwnerAddress, nftItemImg }: FormListingButtonProps) {
  //   const dispatch = useAppDispatch();
  const { open } = useModalConfirmation();

  const handleOnClick = async () => {
    const resultListing = await open({
      type: 'listing',
      size: 'fit',
      data: { nftItemId, nftItemOwnerAddress, nftItemImg }
    });

    if (resultListing) {
      await open({ type: 'completed', size: 'md', data: { type: 'inventory' } });
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
