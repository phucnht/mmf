import classNames from 'classnames';
import React from 'react';
import Select, { GroupBase, OptionsOrGroups } from 'react-select';

const defaultOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

export interface InputDropdown {
  name?: string;
  options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
  className?: string;
}

const InputDropdown = ({ name, options = defaultOptions, className }: InputDropdown) => {
  const cxInputDropdown = classNames(className);
  return <Select className={cxInputDropdown} name={name} options={options} />;
};

export default InputDropdown;
