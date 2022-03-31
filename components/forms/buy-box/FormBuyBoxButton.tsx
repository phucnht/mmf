import { Button } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import useApproveAllowance from 'hooks/useAllowanceApprove';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { selectAuthData } from 'store/account/auth/auth.slice';
import { selectSystemConfigData } from 'store/market/system-config/systemConfig.slice';
import { useAppSelector } from 'store/store.hook';
import { erc20Contract } from 'utils/contract';

interface FormBuyBoxButtonrops {
  name: string;
  price: number;
  min: number;
  max: number;
}

// /**
//  * Check if the user allowance is enough to make a purchase
//  */
// export const isEnoughAllowance = async (
//   amount: number,
//   userAddress: string | null,
//   tokenAddress = TOKEN_ADDRESS
// ): Promise<boolean> => {
//   if (!userAddress) {
//     return false;
//   }

//   const { price } = store.getState().season;

//   const allowance = await erc20Contract(tokenAddress).methods.allowance(userAddress, SEASON_ADDRESS).call();
//   const totalAmount = amount * price;

//   return +web3.utils.fromWei(allowance, 'ether') >= totalAmount;
// };

const FormBuyBoxButton = ({ name, price, min, max }: FormBuyBoxButtonrops) => {
  const { watch } = useFormContext();
  const { address } = useAppSelector(selectAuthData);
  const { marketplaceAddress } = useAppSelector(selectSystemConfigData);

  const [buyAvailable, setBuyAvailable] = useState(false);

  const [approveMax, loading] = useApproveAllowance(address);

  useEffect(() => {
    const handleSetBuyAvailable = async () => {
      // const enoughAllowance = await isEnoughAllowance(watch(name), address);
      const enoughAllowance = true;
      setBuyAvailable(enoughAllowance);
    };

    if (!loading) {
      handleSetBuyAvailable();
    }
  }, [
    // watch(name),
    address,
    loading
  ]);

  const handleApprove = () => {
    // approve(price * watch(name));
    approveMax();
  };

  const valueInvalid = watch(name) < min || watch(name) > max || !watch(name);
  const cxButton = classNames('text-red-100 p-8 w-fit text-xl min-w-[29.7rem]');

  if (valueInvalid) {
    return <Button className={cxButton} disabled content={`Purchase 0 BNB`} type="button" />;
  }

  if (loading) {
    return <Button className={cxButton} content="Approving..." disabled color="primary" type="button" />;
  }

  if (!address || (address && buyAvailable)) {
    return (
      <Button
        className={cxButton}
        type="submit"
        disabled={valueInvalid}
        color="secondary"
        content={`Purchase ${watch(name) * price} BNB`}
      />
    );
  }

  return (
    <Button
      className={cxButton}
      content="Approve"
      disabled={valueInvalid}
      color="secondary"
      type="button"
      onClick={() => handleApprove()}
    />
  );
};

export default FormBuyBoxButton;
