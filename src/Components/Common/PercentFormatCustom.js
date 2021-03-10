import React from 'react';

import NumberFormat from 'react-number-format';
/* eslint-disable  react/prop-types */
export default function PercentFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="%"
    />
  );
}
/* eslint-enable  react/prop-types */