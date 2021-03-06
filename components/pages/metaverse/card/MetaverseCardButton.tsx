import { FC, useCallback, useEffect, useState } from 'react';
import { Button } from '@whammytechvn/wt-components';

import useModalConfirmation from 'hooks/useModal';
import { useRouter } from 'next/router';
import { useAppSelector } from 'store/store.hook';
import { selectAuthData } from 'store/account/auth/auth.slice';
import { checkIsInWhitelist } from 'store/account/auth/auth.api';
import { metaverseContract } from 'utils/contract';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { toast } from 'react-toastify';

const ButtonType = {
  IDLE: 'idle',
  PROCESSING: 'processing',
  SUCCESS: 'success'
};

const MetaverseCardButton: FC<{ whitelistContract: string; onchainId: string }> = ({
  whitelistContract,
  onchainId
}) => {
  const { accessToken, address } = useAppSelector(selectAuthData);
  const { metaverseContractAddress } = useAppSelector(selectSystemConfigData);
  const [isClaimable, setIsClaimable] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleClaimable = useCallback(async () => {
    const result = await checkIsInWhitelist(whitelistContract, address);
    const alreadyClaimed = await metaverseContract(metaverseContractAddress)
      .methods.metaverseEventClaims(onchainId, address)
      .call();

    setIsClaimable(result && alreadyClaimed === false);
  }, [metaverseContractAddress, onchainId, whitelistContract, address]);

  useEffect(() => {
    if (address) {
      toggleClaimable();
    }
  }, [address, toggleClaimable]);

  const router = useRouter();
  const [type, setType] = useState(ButtonType.IDLE);

  // Modal confirmation
  const { open } = useModalConfirmation();
  const handleOpenDialogAuthRequired = async () => {
    await open({ type: 'account' });
  };

  const handleProcess = () => {
    setIsProcessing(true);
    metaverseContract(metaverseContractAddress)
      .methods.claim1155Event(onchainId)
      .send({ from: address })
      .once('transactionHash', function () {
        setIsProcessing(false);
        setType(ButtonType.PROCESSING);
      })
      .once('receipt', async function () {
        setIsProcessing(false);
        setType(ButtonType.SUCCESS);
      })
      .on('error', function (e: any) {
        console.error(e);
        setIsProcessing(false);
        setType(ButtonType.IDLE);
        toast.error('Claim failed');
      });
  };

  const handleSuccess = () => {
    router.push('/inventory');
  };

  let renderButton = (
    <Button
      color="primary"
      content="I want to receive it"
      fullWidth
      className="py-5"
      disabled={isProcessing}
      onClick={handleOpenDialogAuthRequired}
    />
  );

  if (accessToken) {
    renderButton = (
      <Button
        color={isClaimable && !isProcessing ? 'secondary' : 'default'}
        disabled={!isClaimable || isProcessing}
        content="Claim"
        fullWidth
        className="py-5 text-red-100 disabled:bg-grey-400 disabled:cursor-not-allowed disabled:pointer-events-none"
        onClick={handleProcess}
      />
    );
  }

  if (type === ButtonType.PROCESSING) {
    renderButton = (
      <Button
        disabled
        content="Processing..."
        fullWidth
        className="py-5 bg-grey-400 cursor-not-allowed pointer-events-none"
      />
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
