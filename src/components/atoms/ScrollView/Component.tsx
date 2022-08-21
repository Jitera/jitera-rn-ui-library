import React from "react";
import {
  ScrollView as NativeScrollView,
  ScrollViewProps as NativeScrollViewProps,
} from "react-native";
import type { PropsWithRef } from "../../../type";

export interface ScrollViewProps extends NativeScrollViewProps {}

const ScrollView = React.forwardRef<NativeScrollView, ScrollViewProps>(
  ({ children, ...props }, ref) => {
    return (
      <NativeScrollView ref={ref} {...props}>
        {children}
      </NativeScrollView>
    );
  }
);

ScrollView.displayName = "ScrollView";

export default ScrollView;
