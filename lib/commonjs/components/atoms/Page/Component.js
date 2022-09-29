"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Page = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    style,
    children,
    statusBar,
    backgroundTop,
    backgroundColor,
    keyboardVerticalOffset = 0,
    SafeAreaView = _reactNative.SafeAreaView,
    hideKeyboardHandled = false,
    hidden = false,
    statusColor = undefined,
    safeArea = false,
    insetBottom = false,
    insetTop = false,
    backgroundBottom = undefined
  } = _ref;
  const containerStyles = (0, _react.useMemo)(() => {
    return [styles.container, {
      backgroundColor
    }, style];
  }, [backgroundColor, style]);
  const innerComponent = (0, _react.useMemo)(() => {
    if (hideKeyboardHandled && _reactNative.Platform.OS !== "web") {
      return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
        activeOpacity: 1,
        accessible: false,
        onPress: _reactNative.Keyboard.dismiss,
        style: containerStyles
      }, children);
    }

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: containerStyles
    }, children);
  }, [containerStyles, children]);
  const topSafeArea = (0, _react.useMemo)(() => {
    if (safeArea || insetTop) {
      return /*#__PURE__*/_react.default.createElement(SafeAreaView, {
        edges: ["top"],
        style: [styles.flex0, {
          backgroundColor: backgroundTop
        }]
      });
    }

    return undefined;
  }, [insetTop, safeArea, backgroundTop]);
  const bottomSafeArea = (0, _react.useMemo)(() => {
    if (safeArea || insetBottom) {
      return /*#__PURE__*/_react.default.createElement(SafeAreaView, {
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
  } = (0, _react.useMemo)(() => {
    return {
      WrapperComponent: _reactNative.Platform.OS === 'web' ? _reactNative.View : _reactNative.KeyboardAvoidingView,
      wraperProps: _reactNative.Platform.select({
        ios: {
          behavior: "padding"
        },
        default: {}
      })
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(WrapperComponent, _extends({
    ref: ref,
    style: styles.container
  }, wraperProps, {
    keyboardVerticalOffset: keyboardVerticalOffset
  }), /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    hidden: hidden,
    backgroundColor: statusColor,
    barStyle: statusBar || "dark-content"
  }), topSafeArea, innerComponent, bottomSafeArea);
});

const styles = _reactNative.StyleSheet.create({
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
var _default = Page;
exports.default = _default;
//# sourceMappingURL=Component.js.map