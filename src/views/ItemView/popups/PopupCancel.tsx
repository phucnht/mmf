import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { CloseButton } from 'components';
import { erc20Contract, marketContract, web3 } from 'contracts';
import { PopupController } from 'models/Common';
import { ItemType } from 'models/Item';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { systemSelector } from 'reducers/systemSlice';
import { marketService, queryClient } from 'services';

type PopupProps = PopupController & {
  item: ItemType;
};

const PopupCancel = ({ item, onClose }: PopupProps) => {
  const { address } = useSelector(profileSelector);
  const { marketplaceAddress } = useSelector(systemSelector);

  return (
    <>
      <DialogTitle>Purchase</DialogTitle>
      <DialogContent>
        <div className='flex items-end mb-4'></div>
      </DialogContent>
      <DialogActions></DialogActions>
      <CloseButton onClick={onClose} />
    </>
  );
};

export default PopupCancel;
