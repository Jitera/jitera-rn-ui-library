import React from "react";
import { View as RNView, StyleSheet, StyleProp, ViewStyle } from "react-native";
import View from "../View/Component";
import Text from "../Text/Component";

import type { ViewProps } from "react-native";

export interface DividerProps extends ViewProps {
  color?: string;
  size?: number;
  content?: string | (() => JSX.Element);
  contentPosition?: "left" | "center" | "right";
  contentStyles?: StyleProp<ViewStyle>;
  containerStyles?: StyleProp<ViewStyle>;
}

const Divider = React.forwardRef<RNView, DividerProps>(
  (
    { style, color, size = 1, content, contentPosition = "center", contentStyles, containerStyles },
    ref
  ) => {
    const renderContent = () => {
      if (!content) return null;

      if (typeof content === "string")
        return <Text style={[defaultStyles.text, contentStyles]}>{content}</Text>;

      return <View style={[defaultStyles.contentContainer, containerStyles]}>{content()}</View>;
    };

    return (
      <View ref={ref} style={[defaultStyles.container, style]}>
        <View style={defaultStyles.lineContainer}>
          <View style={[defaultStyles.line, { borderTopColor: color, borderTopWidth: size }]} />
        </View>
        <View
          style={[
            defaultStyles.contentWrapper,
            { justifyContent: getContentPositionClass(contentPosition) },
          ]}
        >
          {renderContent()}
        </View>
      </View>
    );
  }
);

const defaultStyles = StyleSheet.create({
  container: {
    position: "relative",
  },
  lineContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  contentWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  contentContainer: {
    paddingHorizontal: 4,
    backgroundColor: "#FFFFFF",
  },
  text: {
    paddingHorizontal: 4,
    backgroundColor: "#FFFFFF",
    color: "#bbb",
  },
  line: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#bbb",
  },
});

const getContentPositionClass: (
  postion: "left" | "center" | "right"
) => "flex-start" | "center" | "flex-end" = (position) => {
  if (position === "left") return "flex-start";
  if (position === "right") return "flex-end";

  return "center";
};

export default Divider;
