import useModalConfirmation from 'hooks/useModal';
import { Button } from '@whammytechvn/wt-components';
import { ObjectProps } from 'utils/types';
import ReactTooltip from 'react-tooltip';
import clsxm from 'utils/clsxm';

export interface FormListingButtonProps {
  item: ObjectProps;
}

export default function FormListingButton({ item }: FormListingButtonProps) {
  //   const dispatch = useAppDispatch();
  const { open } = useModalConfirmation();

  const isFullListing = item.amount === item.amountSale || true;

  const handleOnClick = async (e: any) => {
    if (e) e.preventDefault();

    if (!isFullListing) {
      const resultListing = await open({
        type: 'listing',
        size: 'fit',
        data: { ...item }
      });

      if (resultListing) {
        await open({ type: 'completed', size: 'md', data: { type: 'marketplace' } });
      }
    }
  };

  const cxBtn = clsxm('py-3 px-4 min-w-fit xl:min-w-[20rem] text-xl', {
    '!bg-gray-400 !cursor-not-allowed': isFullListing,
    'text-red-100': !isFullListing
  });

  return (
    <>
      <Button
        color={isFullListing ? 'default' : 'secondary'}
        className={cxBtn}
        content="Listing Now"
        onClick={handleOnClick}
        // data-tip={isFullListing ? 'All items are listed' : undefined}
        data-tip="Comming soon"
      />
      <ReactTooltip place="bottom" />
    </>
  );
}
