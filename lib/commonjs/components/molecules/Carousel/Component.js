"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebSwiper = _interopRequireDefault(require("react-native-web-swiper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Carousel = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    data,
    resizeMode = 'stretch',
    style = {},
    loop = true,
    ...props
  } = _ref;
  const images = (0, _react.useMemo)(() => {
    return data.map(url => {
      if (url) return {
        uri: url
      };
      return undefined;
    }).filter(image => !!image);
  }, [data]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    ref: ref,
    style: _reactNative.StyleSheet.flatten([styles.container, style])
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWebSwiper.default, _extends({
    loop: loop,
    controlsProps: {
      dotsTouchable: true,
      prevPos: false,
      nextPos: false,
      ...(props === null || props === void 0 ? void 0 : props.controlsProps)
    }
  }, props), images.map((source, i) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.slideContainer,
    key: i
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: source,
    style: styles.imageItem,
    resizeMode: resizeMode
  })))));
});

const styles = _reactNative.StyleSheet.create({
  container: {
    height: 200
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageItem: {
    width: '100%',
    height: '100%'
  }
});

Carousel.displayName = 'Carousel';
var _default = Carousel;
exports.default = _default;
//# sourceMappingURL=Component.js.map