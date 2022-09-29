import React from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";

export interface TouchableOpacityProps extends RNTouchableOpacityProps {}

const TouchableOpacity = React.forwardRef<RNTouchableOpacity, TouchableOpacityProps>(
  (props, ref) => {
    const { children = null, ...rest } = props;
    return (
      <RNTouchableOpacity ref={ref} {...rest}>
        {children}
      </RNTouchableOpacity>
    );
  }
);

TouchableOpacity.displayName = "TouchableOpacity";

export default TouchableOpacity;
