import React from "react";
import { StyleSheet } from "react-native";
import View from "../View/Component";
import Text from "../Text/Component";
const Divider = /*#__PURE__*/React.forwardRef((_ref, ref) => {
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
    if (typeof content === "string") return /*#__PURE__*/React.createElement(Text, {
      style: [defaultStyles.text, contentStyles]
    }, content);
    return /*#__PURE__*/React.createElement(View, {
      style: [defaultStyles.contentContainer, containerStyles]
    }, content());
  };

  return /*#__PURE__*/React.createElement(View, {
    ref: ref,
    style: [defaultStyles.container, style]
  }, /*#__PURE__*/React.createElement(View, {
    style: defaultStyles.lineContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: [defaultStyles.line, {
      borderTopColor: color,
      borderTopWidth: size
    }]
  })), /*#__PURE__*/React.createElement(View, {
    style: [defaultStyles.contentWrapper, {
      justifyContent: getContentPositionClass(contentPosition)
    }]
  }, renderContent()));
});
const defaultStyles = StyleSheet.create({
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

export default Divider;
//# sourceMappingURL=Component.js.map