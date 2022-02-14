import { MAX_ALLOWANCE } from 'utils/contract';
import { showModal, MODAL_TYPE } from 'store/modal/modalSlice';
import { useAppDispatch } from './../hook';
import { useState } from 'react';
import { erc20Contract } from 'utils/contract';
import appConfig from 'config';

const { seasonAddress: SEASON_ADDRESS, tokenAddress: TOKEN_ADDRESS } = appConfig.web3;

const useApproveAllowance = (userAddress: string | null) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const approveMax = async (): Promise<void> => {
    if (!userAddress) {
      dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { subtitle: 'User not identified!' } }));
      return;
    }
    setLoading(true);

    const contract = erc20Contract(TOKEN_ADDRESS);
    try {
      await contract.methods.approve(SEASON_ADDRESS, MAX_ALLOWANCE).send({ from: userAddress });
    } catch (e: any) {
      dispatch(showModal({ type: MODAL_TYPE.FAILED, data: { subtitle: e.message } }));
    } finally {
      setLoading(false);
    }
  };

  return [approveMax, loading] as const;
};

export default useApproveAllowance;
