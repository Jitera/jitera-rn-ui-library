"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO: find a solution to add molecule component instead of mock component
const Item = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: '#c0d7ff',
      height: 60,
      justifyContent: 'center',
      marginBottom: 10,
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      color: '#1890ff',
      textAlign: 'center'
    }
  }, title));
};

const FlatList = /*#__PURE__*/_react.default.forwardRef((_ref2, ref) => {
  let {
    style,
    isPreview,
    ...props
  } = _ref2;

  if (isPreview) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({}, props, {
      ref: ref
    }), /*#__PURE__*/_react.default.createElement(Item, {
      title: "List 1"
    }), /*#__PURE__*/_react.default.createElement(Item, {
      title: "List 2"
    }), /*#__PURE__*/_react.default.createElement(Item, {
      title: "List 3"
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, _extends({
    style: [styles.container, style],
    ref: ref
  }, props));
});

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  }
});

FlatList.displayName = 'FlatList';
var _default = FlatList;
exports.default = _default;
//# sourceMappingURL=Component.js.map