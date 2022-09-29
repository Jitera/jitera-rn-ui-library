function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from "react";
import { View, Platform, Keyboard, StyleSheet, StatusBar, TouchableOpacity, KeyboardAvoidingView, SafeAreaView as RNSafeAreaView } from "react-native";
const Page = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    style,
    children,
    statusBar,
    backgroundTop,
    backgroundColor,
    keyboardVerticalOffset = 0,
    SafeAreaView = RNSafeAreaView,
    hideKeyboardHandled = false,
    hidden = false,
    statusColor = undefined,
    safeArea = false,
    insetBottom = false,
    insetTop = false,
    backgroundBottom = undefined
  } = _ref;
  const containerStyles = useMemo(() => {
    return [styles.container, {
      backgroundColor
    }, style];
  }, [backgroundColor, style]);
  const innerComponent = useMemo(() => {
    if (hideKeyboardHandled && Platform.OS !== "web") {
      return /*#__PURE__*/React.createElement(TouchableOpacity, {
        activeOpacity: 1,
        accessible: false,
        onPress: Keyboard.dismiss,
        style: containerStyles
      }, children);
    }

    return /*#__PURE__*/React.createElement(View, {
      style: containerStyles
    }, children);
  }, [containerStyles, children]);
  const topSafeArea = useMemo(() => {
    if (safeArea || insetTop) {
      return /*#__PURE__*/React.createElement(SafeAreaView, {
        edges: ["top"],
        style: [styles.flex0, {
          backgroundColor: backgroundTop
        }]
      });
    }

    return undefined;
  }, [insetTop, safeArea, backgroundTop]);
  const bottomSafeArea = useMemo(() => {
    if (safeArea || insetBottom) {
      return /*#__PURE__*/React.createElement(SafeAreaView, {
        edges: ["bottom"],
        style: [styles.flex0, {
          backgroundColor: backgroundBottom || backgroundColor
        }]
      });
    }

    return undefined;
  }, [insetBottom, safeArea, backgroundTop, backgroundColor]);
  const {
    WrapperComponent,
    wraperProps
  } = useMemo(() => {
    return {
      WrapperComponent: Platform.OS === 'web' ? View : KeyboardAvoidingView,
      wraperProps: Platform.select({
        ios: {
          behavior: "padding"
        },
        default: {}
      })
    };
  }, []);
  return /*#__PURE__*/React.createElement(WrapperComponent, _extends({
    ref: ref,
    style: styles.container
  }, wraperProps, {
    keyboardVerticalOffset: keyboardVerticalOffset
  }), /*#__PURE__*/React.createElement(StatusBar, {
    hidden: hidden,
    backgroundColor: statusColor,
    barStyle: statusBar || "dark-content"
  }), topSafeArea, innerComponent, bottomSafeArea);
});
const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1
  },
  flex0: {
    flex: 0
  },
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    overflow: "hidden"
  }
});
Page.displayName = "Page";
export default Page;
//# sourceMappingURL=Component.js.map