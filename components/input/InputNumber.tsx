import { Flex } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { validateInputNumber } from 'utils/validate';
import './input-number.css';

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

  const inputWrapperClassName = classNames('item-center', className);
  const inputClassName = classNames(
    'bg-[#082c6b] py-[1.6rem] px-[2.4rem] w-[27rem] h-[5.6rem] border border-solid border-[#ffba1a] flex-1 items-center justify-center text-white text-input rounded-[0.4rem]',
    {
      [`input-${type}`]: true
    }
  );

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

  return (
    <Flex className={inputWrapperClassName}>
      <Flex className={inputClassName}>
        <button
          type="button"
          className="focus:outline-none w-[3.8rem] h-[2.8rem] bg-img-icon-minus bg-img-default cursor-pointer"
          onClick={handleDecrease}
        />
        <input
          className="focus:outline-none bg-[#082c6b] w-full text-center cursor-default"
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
          className="focus:outline-none w-[3.8rem] h-[2.8rem] bg-img-icon-plus bg-img-default cursor-pointer"
          onClick={handleIncrease}
        />
      </Flex>
      <button
        type="button"
        className="focus:outline-none text-[#5da8ec] uppercase text-input font-bold ml-6 cursor-pointer"
        onClick={handleSetMax}
      >
        MAX
      </button>
    </Flex>
  );
};

export default InputNumber;
