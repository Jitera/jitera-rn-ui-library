function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { View, StyleSheet, FlatList as RNFlatList, Text } from 'react-native';

// TODO: find a solution to add molecule component instead of mock component
const Item = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: '#c0d7ff',
      height: 60,
      justifyContent: 'center',
      marginBottom: 10,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: {
      color: '#1890ff',
      textAlign: 'center'
    }
  }, title));
};

const FlatList = /*#__PURE__*/React.forwardRef((_ref2, ref) => {
  let {
    style,
    isPreview,
    ...props
  } = _ref2;

  if (isPreview) {
    return /*#__PURE__*/React.createElement(View, _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(Item, {
      title: "List 1"
    }), /*#__PURE__*/React.createElement(Item, {
      title: "List 2"
    }), /*#__PURE__*/React.createElement(Item, {
      title: "List 3"
    }));
  }

  return /*#__PURE__*/React.createElement(RNFlatList, _extends({
    style: [styles.container, style],
    ref: ref
  }, props));
});
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
FlatList.displayName = 'FlatList';
export default FlatList;
//# sourceMappingURL=Component.js.map