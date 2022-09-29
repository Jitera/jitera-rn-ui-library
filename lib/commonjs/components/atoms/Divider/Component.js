"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _Component = _interopRequireDefault(require("../View/Component"));

var _Component2 = _interopRequireDefault(require("../Text/Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Divider = /*#__PURE__*/_react.default.forwardRef((_ref, ref) => {
  let {
    style,
    color,
    size = 1,
    content,
    contentPosition = "center",
    contentStyles,
    containerStyles
  } = _ref;

  const renderContent = () => {
    if (!content) return null;
    if (typeof content === "string") return /*#__PURE__*/_react.default.createElement(_Component2.default, {
      style: [defaultStyles.text, contentStyles]
    }, content);
    return /*#__PURE__*/_react.default.createElement(_Component.default, {
      style: [defaultStyles.contentContainer, containerStyles]
    }, content());
  };

  return /*#__PURE__*/_react.default.createElement(_Component.default, {
    ref: ref,
    style: [defaultStyles.container, style]
  }, /*#__PURE__*/_react.default.createElement(_Component.default, {
    style: defaultStyles.lineContainer
  }, /*#__PURE__*/_react.default.createElement(_Component.default, {
    style: [defaultStyles.line, {
      borderTopColor: color,
      borderTopWidth: size
    }]
  })), /*#__PURE__*/_react.default.createElement(_Component.default, {
    style: [defaultStyles.contentWrapper, {
      justifyContent: getContentPositionClass(contentPosition)
    }]
  }, renderContent()));
});

const defaultStyles = _reactNative.StyleSheet.create({
  container: {
    position: "relative"
  },
  lineContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  },
  contentWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  contentContainer: {
    paddingHorizontal: 4,
    backgroundColor: "#FFFFFF"
  },
  text: {
    paddingHorizontal: 4,
    backgroundColor: "#FFFFFF",
    color: "#bbb"
  },
  line: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#bbb"
  }
});

const getContentPositionClass = position => {
  if (position === "left") return "flex-start";
  if (position === "right") return "flex-end";
  return "center";
};

var _default = Divider;
exports.default = _default;
//# sourceMappingURL=Component.js.map