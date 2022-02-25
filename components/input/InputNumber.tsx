import { Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { validateInputNumber } from 'utils/validate';
import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  amount?: number;
  className?: string;
}

const InputNumber = ({ type = 'number', min = 0, max = 40, disabled, className, name, ...props }: InputProps) => {
  const { register, watch, setValue } = useFormContext();

  const handleValidateInput = (e: any) => {
    // Prevent number is over max value
    const isOverMax = +(watch(name) + e.key) > max;
    return (validateInputNumber(e) || isOverMax) && e.preventDefault();
  };

  const handleDecrease = () => {
    const value = +watch(name);

    if (value > min) {
      const newValue = value - 1;
      setValue(name, newValue);
    }
  };

  const handleIncrease = () => {
    const value = +watch(name);

    if (value < max) {
      const newValue = value + 1;
      setValue(name, newValue);
    }
  };

  const handleSetMax = () => {
    setValue(name, max);
  };

  const handleFocus = (e: any) => e.target.select();

  const cxInputWrapper = classNames('item-center', className);
  const cxInput = classNames(
    'bg-blue-400 py-5 px-8 w-[29.7rem] h-[5.2rem] items-center justify-center rounded-[2rem]',
    {
      [`input-${type}`]: true
    }
  );

  return (
    <Flex className={cxInputWrapper}>
      <Flex className={cxInput}>
        <button
          type="button"
          className="focus:outline-none cursor-pointer w-[2.8rem] h-[2.8rem] bg-brown-100 rounded-lg"
          onClick={handleDecrease}
        >
          <MinusIcon className={`text-white h-8 m-auto`} />
        </button>
        <input
          className="border-none focus:outline-none bg-blue-400 w-full text-center text-white text-xl font-black "
          type="number"
          {...register(name)}
          min={min}
          max={max}
          disabled={disabled}
          onKeyDown={handleValidateInput}
          onFocus={handleFocus}
          {...props}
        />
        <button
          type="button"
          className="focus:outline-none cursor-pointer w-[2.8rem] h-[2.8rem] bg-brown-100 rounded-lg"
          onClick={handleIncrease}
        >
          <PlusIcon className={`text-white h-8 m-auto`} />
        </button>
      </Flex>
      <button
        type="button"
        className="focus:outline-none text-blue-100 uppercase text-lg font-bold ml-6 cursor-pointer"
        onClick={handleSetMax}
      >
        MAX
      </button>
    </Flex>
  );
};

export default InputNumber;
