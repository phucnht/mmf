import classNames from 'classnames';
import { FC } from 'react';
import { ValidateResult } from 'react-hook-form';

export type AlertType = 'info' | 'success' | 'warning' | 'error';
interface AlertProps {
  type?: AlertType;
  content?: string | ValidateResult;
  className?: string;
}

const defaultProps = { type: 'info' as AlertType };

const Alert: FC<AlertProps> = ({ type, content, className, children }) => {
  const alertClassName = classNames(
    'flex text-content items-center',
    {
      'text-info': type === 'info',
      'text-warning': type === 'warning',
      'text-success': type === 'success',
      'text-error': type === 'error'
    },
    className
  );

  return (
    <div className={alertClassName}>
      {children ? (
        children
      ) : (
        <>
          <span className="icon-warning" />
          <p className="ml-3">{content}</p>
        </>
      )}
    </div>
  );
};

Alert.defaultProps = defaultProps;
Alert.displayName = 'Alert';

export default Alert;
