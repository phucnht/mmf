import { Flex, Text } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { FC } from 'react';
import { ValidateResult } from 'react-hook-form';
import { ExclamationCircleIcon } from '@heroicons/react/outline';

export type AlertType = 'info' | 'success' | 'warning' | 'error';
interface AlertProps {
  type?: AlertType;
  content?: string | ValidateResult;
  className?: string;
}

const defaultProps = { type: 'info' as AlertType };

const Alert: FC<AlertProps> = ({ type, content, className, children }) => {
  const alertClassName = classNames(
    'text-md items-center',
    {
      'text-blue-200': type === 'info',
      'text-yellow-200': type === 'warning',
      'text-green-300': type === 'success',
      'text-red-a200': type === 'error'
    },
    className
  );

  return (
    <Flex className={alertClassName}>
      {children ? (
        children
      ) : (
        <>
          <ExclamationCircleIcon width={20} height={20} />
          <Text className="ml-3">{content}</Text>
        </>
      )}
    </Flex>
  );
};

Alert.defaultProps = defaultProps;
Alert.displayName = 'Alert';

export default Alert;
