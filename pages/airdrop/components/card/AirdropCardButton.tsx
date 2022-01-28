import { FC, useEffect, useState } from 'react';
import { Button } from '@whammytechvn/wt-components';

import useModalConfirmation from 'hooks/useModal';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';

const ButtonType = {
  IDLE: 'idle',
  PROCESSING: 'processing',
  SUCCESS: 'success'
};

const AirdropCardButton: FC = () => {
  const [{ data: account }] = useAccount();
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
    router.push('/marketplace/inventory');
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

  if (account?.address) {
    renderButton = (
      <Button color="secondary" content="Claim" fullWidth className="py-5 text-red-100" onClick={handleProcess} />
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

export default AirdropCardButton;
