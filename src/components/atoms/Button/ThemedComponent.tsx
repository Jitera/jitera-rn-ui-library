import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import Button, { ButtonProps } from './Component';

const ThemedButton: RneFunctionComponent<ButtonProps> = (props) => {
  const { theme, children } = props;
  return (
    <Button
      disableColor={theme?.colors?.disabled}
      primaryColor={theme?.colors?.primary}
      borderColor={theme?.colors?.primary}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ThemedButton;
