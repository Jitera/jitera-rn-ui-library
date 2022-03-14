import React, { forwardRef, FunctionComponent } from 'react';
import { ScrollView as NativeScrollView, ScrollViewProps as NativeScrollViewProps } from 'react-native';
import type { PropsWithRef } from '../../../type';

export type ScrollViewProps = PropsWithRef<NativeScrollViewProps>;

const ScrollView: FunctionComponent<ScrollViewProps> = forwardRef<ScrollViewProps>(
  (props, ref: any) => {
    const { children = null, ...rest } = props;
    return (
      <NativeScrollView ref={ref} {...rest}>
        {children}
      </NativeScrollView>
    );
  }
);

ScrollView.displayName = 'ScrollView';

export default ScrollView;
