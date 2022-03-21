import React from 'react';
import Input, { InputProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedInput: RneFunctionComponent<Omit<InputProps, 'ref'>> = (props) => {
  return <Input {...props} />;
};

export default ThemedInput;
