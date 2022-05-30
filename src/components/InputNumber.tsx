import React from 'react';
import NumberFormat from 'react-number-format';

// eslint-disable-next-line react/display-name
const InputNumber = React.forwardRef(({ onChange, ...props }: any, ref) => (
  <NumberFormat
    getInputRef={ref}
    allowNegative={false}
    decimalScale={4}
    thousandSeparator=','
    onValueChange={({ floatValue }) => {
      onChange({ target: { value: floatValue } });
    }}
    {...props}
  />
));

export default InputNumber;
