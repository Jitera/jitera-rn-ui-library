function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-web-swiper';
const Carousel = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    data,
    resizeMode = 'stretch',
    style = {},
    loop = true,
    ...props
  } = _ref;
  const images = useMemo(() => {
    return data.map(url => {
      if (url) return {
        uri: url
      };
      return undefined;
    }).filter(image => !!image);
  }, [data]);
  return /*#__PURE__*/React.createElement(View, {
    ref: ref,
    style: StyleSheet.flatten([styles.container, style])
  }, /*#__PURE__*/React.createElement(Swiper, _extends({
    loop: loop,
    controlsProps: {
      dotsTouchable: true,
      prevPos: false,
      nextPos: false,
      ...(props === null || props === void 0 ? void 0 : props.controlsProps)
    }
  }, props), images.map((source, i) => /*#__PURE__*/React.createElement(View, {
    style: styles.slideContainer,
    key: i
  }, /*#__PURE__*/React.createElement(Image, {
    source: source,
    style: styles.imageItem,
    resizeMode: resizeMode
  })))));
});
const styles = StyleSheet.create({
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
export default Carousel;
//# sourceMappingURL=Component.js.map