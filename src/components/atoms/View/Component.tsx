import React from 'react';
import { View as NativeView, ViewProps as NativeViewProps } from 'react-native';
import type { PropsWithRef } from '../../../type';

export interface ViewProps extends NativeViewProps {}

const View = React.forwardRef<NativeView, ViewProps>(
  ({ children = null, ...props }, ref) => {
    return (
      <NativeView ref={ref} {...props}>
        {children}
      </NativeView>
    );
  }
);

View.displayName = 'View';

export default View;
