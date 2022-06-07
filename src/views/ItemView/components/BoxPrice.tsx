import { Button, Dialog } from '@mui/material';
import { ItemType } from 'models/Item';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { walletService } from 'services';
import { PopupBuy, PopupListing, PopupCancel } from 'views/ItemView/popups';

const BoxPrice = ({ item }: { item: ItemType }) => {
  const { isLoggedIn, address } = useSelector(profileSelector);

  const isOwner = isLoggedIn && address === item.ownerAddress;

  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const [isOpenLising, setIsOpenLising] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsOpenLising(false);
      setIsOpenCancel(false);
      setIsOpenBuy(false);
    }
  }, [isLoggedIn]);

  return (
    <div className='mt-10'>
      {item.listedOnMarket ? (
        <>
          {isOwner ? (
            <Button color='secondary' className='w-40' onClick={() => setIsOpenCancel(true)}>
              Cancel Listing
            </Button>
          ) : isLoggedIn ? (
            <Button color='secondary' className='w-40' onClick={() => setIsOpenBuy(true)}>
              Buy Now
            </Button>
          ) : (
            <Button color='secondary' className='w-40' onClick={() => walletService.connectWallet()}>
              Connect Wallet
            </Button>
          )}
        </>
      ) : (
        <>
          {isLoggedIn ? (
            isOwner ? (
              <Button color='secondary' className='w-40' onClick={() => setIsOpenLising(true)}>
                Put On Market
              </Button>
            ) : null
          ) : (
            <Button color='secondary' className='w-40' onClick={() => walletService.connectWallet()}>
              Connect Wallet
            </Button>
          )}
        </>
      )}

      <Dialog open={isOpenLising} fullWidth maxWidth='sm'>
        <PopupListing item={item} onClose={() => setIsOpenLising(false)} />
      </Dialog>
      <Dialog open={isOpenCancel} fullWidth maxWidth='sm'>
        <PopupCancel item={item} onClose={() => setIsOpenCancel(false)} />
      </Dialog>
      <Dialog open={isOpenBuy} fullWidth maxWidth='sm'>
        <PopupBuy item={item} onClose={() => setIsOpenBuy(false)} />
      </Dialog>
    </div>
  );
};

export default BoxPrice;
