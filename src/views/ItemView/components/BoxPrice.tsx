import { Button, Dialog } from '@mui/material';
import { useValidNetwork } from 'hooks';
import { ItemType } from 'models/Item';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { walletService } from 'services';
import { PopupBuy, PopupListing, PopupCancel } from 'views/ItemView/popups';

const BoxPrice = ({ item }: { item: ItemType }) => {
  const { validNetwork } = useValidNetwork();
  const { isLoggedIn, address } = useSelector(profileSelector);

  const isOwner = isLoggedIn && address === item.ownerAddress;

  const [isOpenBuy, setOpenBuy] = useState(false);
  const [isOpenLising, setOpenLising] = useState(false);
  const [isOpenCancel, setOpenCancel] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      setOpenLising(false);
      setOpenCancel(false);
      setOpenBuy(false);
    }
  }, [isLoggedIn]);

  return (
    <div className='mt-10'>
      {item.listedOnMarket ? (
        <>
          {isOwner ? (
            <Button color='secondary' className='w-40' onClick={() => validNetwork(() => setOpenCancel(true))}>
              Cancel Listing
            </Button>
          ) : isLoggedIn ? (
            <Button color='secondary' className='w-40' onClick={() => validNetwork(() => setOpenBuy(true))}>
              Buy Now
            </Button>
          ) : (
            <Button color='secondary' className='w-40' onClick={() => validNetwork(walletService.connectWallet)}>
              Connect Wallet
            </Button>
          )}
        </>
      ) : (
        <>
          {isLoggedIn ? (
            isOwner ? (
              <Button color='secondary' className='w-40' onClick={() => validNetwork(() => setOpenLising(true))}>
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
        <PopupListing item={item} onClose={() => setOpenLising(false)} />
      </Dialog>
      <Dialog open={isOpenCancel} fullWidth maxWidth='sm'>
        <PopupCancel item={item} onClose={() => setOpenCancel(false)} />
      </Dialog>
      <Dialog open={isOpenBuy} fullWidth maxWidth='sm'>
        <PopupBuy item={item} onClose={() => setOpenBuy(false)} />
      </Dialog>
    </div>
  );
};

export default BoxPrice;
