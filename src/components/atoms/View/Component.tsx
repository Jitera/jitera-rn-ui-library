import React, { forwardRef, FunctionComponent } from 'react';
import { View as NativeView, ViewProps as NativeViewProps } from 'react-native';
import type { PropsWithRef } from '../../../type';

export type ViewProps = PropsWithRef<NativeViewProps>;

const View: FunctionComponent<ViewProps> = forwardRef<any, ViewProps>(
  (props, ref: any) => {
    const { children = null, ...rest } = props;
    return (
      <NativeView ref={ref} {...rest}>
        {children}
      </NativeView>
    );
  }
);

View.displayName = 'View';

export default View;
