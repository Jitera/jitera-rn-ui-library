import React from 'react';
import type { RneFunctionComponent } from '../../../theme/helpers';
import Divider, { DividerProps } from './Component';

const ThemedDivider: RneFunctionComponent<DividerProps> = (props) => {
  const { theme, children } = props;
  return (
    <Divider color={theme?.colors.primary} {...props}>
      {children}
    </Divider>
  );
};

export default ThemedDivider;
