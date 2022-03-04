import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';
import { CardItemType } from 'components/display/card/detail/CardPanelDetail';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { useAppSelector } from 'store/store.hook';

export interface FormBuyNowButtonProps {
  nftItemId: string;
  nftItemOwnerAddress: string;
  nftItemPrice: number;
  nftItemType: CardItemType;
  nftItemImg?: StaticImageData;
}

export default function FormBuyNowButton({
  nftItemId,
  nftItemOwnerAddress,
  nftItemType,
  nftItemPrice,
  nftItemImg
}: FormBuyNowButtonProps) {
  //   const dispatch = useAppDispatch();
  const { address } = useAppSelector(selectAuthData);
  const { open } = useModalConfirmation();

  const listedByMe = address === nftItemOwnerAddress;

  const handleOnClick = async () => {
    if (listedByMe) {
      const resultCancelListing = await open({
        type: 'cancel-listing',
        size: 'fit',
        data: { nftItemId, nftItemOwnerAddress, nftItemType, nftItemImg }
      });

      if (resultCancelListing) {
        await open({ type: 'completed', size: 'md', isClosable: false, data: { type: 'marketplace' } });
      }
    } else {
      const resultListing = await open({
        type: 'checkout',
        size: 'fit',
        data: { nftItemId, nftItemOwnerAddress, nftItemType, nftItemPrice, nftItemImg }
      });

      if (resultListing) {
        await open({ type: 'completed', size: 'md', data: { type: 'inventory' } });
      }
    }
  };

  return (
    <Button
      color="secondary"
      className="text-red-100 py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl"
      content={listedByMe ? 'Cancel listing' : 'Buy Now'}
      onClick={handleOnClick}
    />
  );
}
