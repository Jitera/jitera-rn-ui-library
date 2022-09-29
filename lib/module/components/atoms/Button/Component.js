import React from "react";
import { Text, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { Color } from "../../../theme/helpers";
const Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    style,
    title,
    titleStyle: titleStyleProps,
    disabled,
    loading,
    onPress,
    children
  } = _ref;
  const containerStyle = StyleSheet.flatten([styles.container, style]);
  const titleStyle = StyleSheet.flatten([styles.title, titleStyleProps, (disabled || loading) && {
    opacity: 0.1
  }]);
  let backgroundColor = containerStyle.backgroundColor;

  if ((disabled || loading) && backgroundColor) {
    backgroundColor = Color(backgroundColor).alpha(0.2).toString();
  }

  containerStyle.backgroundColor = backgroundColor;

  const handlePress = event => {
    if (loading || disabled) return;

    if (onPress) {
      onPress(event);
    }
  };

  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    ref: ref,
    style: containerStyle,
    onPress: handlePress
  }, /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
    style: styles.loading,
    size: "small"
  }), title && /*#__PURE__*/React.createElement(Text, {
    style: titleStyle
  }, title), children));
});
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#40a9ff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20
  },
  loading: {
    position: "absolute"
  }
});
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=Component.js.map