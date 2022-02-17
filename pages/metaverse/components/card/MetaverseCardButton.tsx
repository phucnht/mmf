import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from '@whammytechvn/wt-components';

import useModalConfirmation from 'hooks/useModal';
import { useRouter } from 'next/router';
import { useAppSelector } from 'store/store.hook';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { checkIsInWhitelist } from 'store/account/auth/auth.api';

const ButtonType = {
  IDLE: 'idle',
  PROCESSING: 'processing',
  SUCCESS: 'success'
};

const MetaverseCardButton: FC<{ whitelistContract: string }> = ({ whitelistContract }) => {
  const { accessToken, address } = useAppSelector(selectAuthData);
  const [isClaimable, setIsClaimable] = useState(false);

  const toggleWhitelist = useCallback(async () => {
    const result = await checkIsInWhitelist(whitelistContract, address);
    setIsClaimable(result);
  }, [whitelistContract, address]);

  useEffect(() => {
    if (address) {
      toggleWhitelist();
    }
  }, [address, toggleWhitelist]);

  const router = useRouter();
  const [type, setType] = useState(ButtonType.IDLE);

  // Modal confirmation
  const { open } = useModalConfirmation();
  const handleOpenDialogAuthRequired = async () => {
    await open({ type: 'account' });
  };

  const handleProcess = () => {
    setType(ButtonType.PROCESSING);
  };

  const handleSuccess = () => {
    router.push('/inventory');
  };

  useEffect(() => {
    if (type === ButtonType.PROCESSING) {
      setTimeout(() => {
        setType(ButtonType.SUCCESS);
      }, 2000);
    }
  }, [type]);

  let renderButton = (
    <Button
      color="primary"
      content="I want to receive it"
      fullWidth
      className="py-5"
      onClick={handleOpenDialogAuthRequired}
    />
  );

  if (accessToken) {
    renderButton = (
      <Button
        color={isClaimable ? 'secondary' : 'default'}
        disabled={!isClaimable}
        content="Claim"
        fullWidth
        className="py-5 text-red-100 disabled:bg-grey-400 disabled:cursor-not-allowed"
        onClick={handleProcess}
      />
    );
  }

  if (type === ButtonType.PROCESSING) {
    renderButton = (
      <Button disabled content="Processing..." fullWidth className="py-5 bg-grey-400 cursor-not-allowed" />
    );
  }

  if (type === ButtonType.SUCCESS) {
    renderButton = (
      <Button content="Check My Inventory" fullWidth className="py-5 !bg-green-200" onClick={handleSuccess} />
    );
  }

  return renderButton;
};

export default MetaverseCardButton;
