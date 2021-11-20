import React, { FunctionComponent } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { defaultTheme } from '../../../theme';
import { Text, Icon } from '../../../index';

export type HeaderProps = {
  title?: string;
  renderLeft?: () => JSX.Element;
  renderCenter?: () => JSX.Element;
  renderRight?: () => JSX.Element;
  backgroundColor?: string;
  height?: number;
  unsafe?: boolean;
  useDefaultBackButton?: boolean;
  onBackPress?: () => void;
  style?: StyleProp<ViewStyle>;
  leftIconName?: string;
  leftIconType?: string;
  leftIconSize?: number;
  leftIconColor?: string;
  onPressLeftIcon?: () => void;
  rightIconName?: string;
  rightIconType?: string;
  rightIconSize?: number;
  rightIconColor?: string;
  onPressRightIcon?: () => void;
  SafeAreaView?: any;
  titleStyle: TextStyle;
  safeAreaTop?: number;
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
  height,
  renderLeft,
  renderCenter,
  renderRight,
  backgroundColor,
  unsafe = true,
  onBackPress,
  useDefaultBackButton = false,
  style,
  leftIconName,
  leftIconType,
  leftIconSize,
  leftIconColor,
  onPressLeftIcon,
  rightIconName,
  rightIconType,
  rightIconSize,
  rightIconColor,
  onPressRightIcon,
  SafeAreaView,
  titleStyle,
  safeAreaTop,
}) => {
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
      <Icon
        type="Feather"
        name="chevron-left"
        size={rightIconSize || defaultTheme?.fontSizes?.FONT_24}
        color={rightIconColor}
      />
    </TouchableOpacity>
  );

  const renderLeftComponents = () => {
    if (useDefaultBackButton) {
      return renderDefaultLeftButton();
    } else if (renderLeft) {
      return renderLeft();
    } else if (leftIconName) {
      return (
        <TouchableOpacity
          onPress={onPressLeftIcon}
          style={styles.buttonBackContainer}
        >
          <Icon
            type={leftIconType}
            name={leftIconName}
            size={leftIconSize || defaultTheme?.fontSizes?.FONT_24}
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
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={styles.rightButtonContainer}
        >
          <Icon
            type={rightIconType}
            name={rightIconName}
            size={rightIconSize || defaultTheme?.fontSizes?.FONT_24}
            color={rightIconColor}
          />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderInside = () => {
    const defaultHeight: number =
      (defaultTheme?.spacing?.SPACING_45 || 0) +
      ((unsafe ? safeAreaTop : 0) || 0);
    return (
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor,
            height: height || defaultHeight,
            paddingTop: unsafe ? safeAreaTop : 0,
          },
          style,
        ]}
      >
        <View style={styles.leftWrapper}>{renderLeftComponents()}</View>
        <View style={styles.centerWrapper}>{renderCenterComponent()}</View>
        <View style={styles.rightWrapper}>{renderRightComponents()}</View>
      </View>
    );
  };
  if (unsafe) {
    return renderInside();
  }
  return <SafeAreaView edges={['top']} />;
};

const styles = StyleSheet.create({
  buttonBackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: defaultTheme.spacing.SPACING_10,
  },
  rightButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: defaultTheme.spacing.SPACING_10,
  },
  wrapper: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
  },
  leftWrapper: {
    flex: 0.2,
  },
  centerWrapper: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontWeight: '600',
    fontSize: defaultTheme.fontSizes.FONT_16,
  },
  rightWrapper: {
    flex: 0.22,
    alignItems: 'flex-end',
  },
});

Header.displayName = 'Header';

export default Header;
