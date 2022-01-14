import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import Button, { ButtonProps } from './Component';

const ThemedButton: RneFunctionComponent<ButtonProps> = (props) => {
  const { children } = props;

  return <Button {...props}>{children}</Button>;
};

export default ThemedButton;
