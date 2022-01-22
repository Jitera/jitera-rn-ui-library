import React from 'react';
import Icon, { IconProps } from './Component';
import type { RneFunctionComponent } from '../../../theme/helpers';

const ThemedIcon: RneFunctionComponent<Omit<IconProps, 'ref'>> = (props) => {
  return <Icon {...props} />;
};

ThemedIcon.displayName = 'Icon';

export default ThemedIcon;
