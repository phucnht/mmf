import { MAX_ALLOWANCE } from 'utils/contract';
import { useState } from 'react';
import { erc20Contract } from 'utils/contract';
import { useAppSelector } from 'store/store.hook';
import { selectPaymentTokenData } from 'store/market/payment-token/paymentToken.slice';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { toast } from 'react-toastify';

const useApproveAllowance = (userAddress: string | null) => {
  const [loading, setLoading] = useState(false);
  const { marketplaceAddress } = useAppSelector(selectSystemConfigData);
  const { MMF } = useAppSelector(selectPaymentTokenData);

  const approveMax = async (): Promise<void> => {
    if (!userAddress) {
      toast.error('User not identified!');
      return;
    }
    setLoading(true);

    const contract = erc20Contract(MMF.contractAddress);
    try {
      await contract.methods.approve(marketplaceAddress, MAX_ALLOWANCE).send({ from: userAddress });
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return [approveMax, loading] as const;
};

export default useApproveAllowance;
