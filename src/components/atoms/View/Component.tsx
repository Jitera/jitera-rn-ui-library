import React, { forwardRef, FunctionComponent } from 'react';
import { View as NativeView, ViewProps as NativeViewProps } from 'react-native';

export type ViewProps = NativeViewProps & {};

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
