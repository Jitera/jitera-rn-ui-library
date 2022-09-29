import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  Platform,
  View as RNView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import View from "../View/Component";
import { defaultTheme } from "../../../theme";
import { Text, Icon, IconType } from "../../../index";

export interface HeaderProps {
  title?: string;
  renderLeft?: () => JSX.Element;
  renderCenter?: () => JSX.Element;
  renderRight?: () => JSX.Element;
  backgroundColor?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  height?: number;
  useDefaultBackButton?: boolean;
  onBackPress?: () => void;
  style?: StyleProp<ViewStyle>;
  leftIconName?: string;
  leftIconType?: `${IconType}`;
  leftIconSize?: number;
  leftIconColor?: string;
  onPressLeftIcon?: () => void;
  rightIconName?: string;
  rightIconType?: `${IconType}`;
  rightIconSize?: number;
  rightIconColor?: string;
  onPressRightIcon?: () => void;
  titleStyle?: TextStyle;
  safeAreaTop?: boolean;
}

const Header = React.forwardRef<RNView, HeaderProps>(
  (
    {
      title,
      height,
      renderLeft,
      renderCenter,
      renderRight,
      backgroundColor,
      borderBottomWidth,
      borderBottomColor,
      onBackPress,
      useDefaultBackButton = false,
      style,
      leftIconName = "chevron-left",
      leftIconType = IconType.Feather,
      leftIconSize,
      leftIconColor,
      onPressLeftIcon,
      rightIconName,
      rightIconType,
      rightIconSize,
      rightIconColor,
      onPressRightIcon,
      titleStyle,
      safeAreaTop,
    },
    ref
  ) => {
    const defaultLeftIconSize =
      leftIconSize || (Platform.OS === "web" ? 24 : defaultTheme.fontSizes.FONT_24);

    const defaultRightIconSize =
      rightIconSize || (Platform.OS === "web" ? 24 : defaultTheme.fontSizes.FONT_24);

    const onPressBack = () => {
      if (onBackPress) {
        return onBackPress();
      }
    };
    const renderCenterComponent = () => {
      if (renderCenter) {
        return renderCenter();
      }
      return <Text style={[styles.labelText, titleStyle]}>{title}</Text>;
    };

    // Render the default left button
    const renderDefaultLeftButton = () => (
      <TouchableOpacity onPress={onPressBack} style={styles.buttonBackContainer}>
        <Icon type={IconType.Feather} name="chevron-left" size={defaultLeftIconSize} color="#000" />
      </TouchableOpacity>
    );

    const renderLeftComponents = () => {
      if (useDefaultBackButton) {
        return renderDefaultLeftButton();
      } else if (renderLeft) {
        return renderLeft();
      } else if (leftIconName) {
        return (
          <TouchableOpacity onPress={onPressLeftIcon} style={styles.buttonBackContainer}>
            <Icon
              type={leftIconType}
              name={leftIconName}
              size={defaultLeftIconSize}
              color={leftIconColor}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };

    const renderRightComponents = () => {
      if (renderRight) {
        return renderRight();
      } else if (rightIconName) {
        return (
          <TouchableOpacity onPress={onPressRightIcon} style={styles.rightButtonContainer}>
            <Icon
              type={rightIconType}
              name={rightIconName}
              size={defaultRightIconSize}
              color={rightIconColor}
            />
          </TouchableOpacity>
        );
      }
      return null;
    };

    const renderInside = () => {
      return (
        <>
          {safeAreaTop ? <SafeAreaView edges={["top"]} style={{ backgroundColor }} /> : undefined}
          <View
            ref={ref}
            style={[
              styles.wrapper,
              {
                backgroundColor,
                borderBottomWidth: borderBottomWidth ?? 1,
                borderBottomColor: borderBottomColor ?? "rgba(0,0,0,0.1)",
                height: height || (Platform.OS === "web" ? 45 : defaultTheme?.spacing?.SPACING_45),
              },
              style,
            ]}
          >
            <View style={styles.leftWrapper}>{renderLeftComponents()}</View>
            <View style={styles.centerWrapper}>{renderCenterComponent()}</View>
            <View style={styles.rightWrapper}>{renderRightComponents()}</View>
          </View>
        </>
      );
    };
    return renderInside();
  }
);

const styles = StyleSheet.create({
  buttonBackContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Platform.OS === "web" ? 10 : defaultTheme.spacing.SPACING_10,
  },
  rightButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: Platform.OS === "web" ? 10 : defaultTheme.spacing.SPACING_10,
  },
  wrapper: {
    flexDirection: "row",
    borderColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
  },
  leftWrapper: {
    flex: 0.2,
  },
  centerWrapper: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    width: "100%",
    fontWeight: "600",
    fontSize: Platform.OS === "web" ? 16 : defaultTheme.fontSizes.FONT_16,
    textAlign: "center",
  },
  rightWrapper: {
    flex: 0.2,
    alignItems: "flex-end",
  },
});

Header.displayName = "Header";

export default Header;
