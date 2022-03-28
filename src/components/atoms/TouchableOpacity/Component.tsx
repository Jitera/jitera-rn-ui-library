import React, { forwardRef } from 'react';
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';
import type { PropsWithRef } from '../../../type';

export type TouchableOpacityProps = PropsWithRef<RNTouchableOpacityProps>;

const TouchableOpacity: React.FC<TouchableOpacityProps> = forwardRef<
  RNTouchableOpacity,
  TouchableOpacityProps
>((props, ref) => {
  const { children = null, ...rest } = props;
  return (
    <RNTouchableOpacity ref={ref} {...rest}>
      {children}
    </RNTouchableOpacity>
  );
});

TouchableOpacity.displayName = 'TouchableOpacity';

export default TouchableOpacity;
