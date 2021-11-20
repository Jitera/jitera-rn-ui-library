import React, { FunctionComponent } from 'react';
import {
  Platform,
  TouchableHighlight,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableHighlightProps,
} from 'react-native';
import type {
  IconButtonProps,
  IconProps as VectorIconProps,
} from 'react-native-vector-icons';
import getIconType from './getIconType';
import getIconStyle from './getIconStyle';

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | 'Zocial'
  | 'Octicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Ionicons'
  | 'Foundation'
  | 'EvilIcons'
  | 'Entypo'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'SimpleLineIcons'
  | 'Feather'
  | 'AntDesign'
  | 'Fontisto'
  | string;

export type IconObject = TouchableHighlightProps & {
  /** Name of icon. */
  name?: string;

  /** Color of icon. */
  color?: string;

  /** Size of icon. */
  size?: number;

  /** Type of icon */
  type?: IconType;

  /** Apply style to the icon using iconStyle. */
  iconStyle?: StyleProp<TextStyle>;
};

export type IconNode = boolean | React.ReactElement<any> | Partial<IconProps>;

export type IconProps = IconButtonProps & {
  /** Type of icon set. [Supported sets here](#available-icon-sets). */
  type?: IconType;

  /** Update React Native Component. */
  Component?: typeof React.Component;

  /** Reverses color scheme. */
  reverse?: boolean;

  /** Adds box shadow to button. */
  raised?: boolean;

  /** Add styling to container holding icon. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Provide all props from react-native Icon component. */
  iconProps?: VectorIconProps;

  /** Specify reverse icon color. */
  reverseColor?: string;

  /** Disables onPress events. Only works when `onPress` has a handler. */
  disabled?: boolean;

  /** Style for the button when disabled. Only works when `onPress` has a handler. */
  disabledStyle?: StyleProp<ViewStyle>;

  /** Uses the solid font. */
  solid?: boolean;

  /** Uses the brands font (FontAwesome5 only). */
  brand?: boolean;
};

/** Icons are visual indicators usually used to describe action or intent.
 * They are also used for displaying information. */
const Icon: FunctionComponent<IconProps> = ({
  type = 'material',
  name,
  size = 24,
  color: colorProp,
  iconStyle,
  iconProps,
  underlayColor = 'transparent',
  reverse = false,
  raised = false,
  containerStyle,
  reverseColor: reverseColorProp,
  disabled = false,
  disabledStyle,
  onPress,
  Component = onPress
    ? Platform.select<typeof React.Component>({
        android: TouchableNativeFeedback,
        default: TouchableHighlight,
      })
    : View,
  solid = false,
  brand = false,
  theme,
  ...attributes
}) => {
  const color = colorProp || theme?.colors?.black;
  const reverseColor = reverseColorProp || theme?.colors?.white;
  const IconComponent = getIconType(type);
  const iconSpecificStyle = getIconStyle(type, { solid, brand });

  // const getBackgroundColor = () => {
  //   if (reverse) {
  //     return color;
  //   }
  //   return raised ? theme?.colors?.white : 'transparent';
  // };

  const buttonStyles = {
    borderRadius: size + 4,
    height: size * 2 + 4,
    width: size * 2 + 4,
  };

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        (reverse || raised) && styles.button,
        (reverse || raised) && buttonStyles,
        raised && styles.raised,
        iconStyle && iconStyle.borderRadius
          ? {
              borderRadius: iconStyle.borderRadius,
            }
          : {},
        containerStyle && containerStyle,
      ])}
    >
      <Component
        {...attributes}
        {...(onPress && {
          onPress,
          disabled,
          underlayColor: reverse ? color : underlayColor,
          activeOpacity: 0.3,
        })}
      >
        <View
          style={StyleSheet.flatten([
            (reverse || raised) && buttonStyles,
            {
              // backgroundColor: getBackgroundColor(),
              alignItems: 'center',
              justifyContent: 'center',
            },
            disabled && styles.disabled,
            disabled && disabledStyle,
          ])}
        >
          <IconComponent
            testID="iconIcon"
            style={StyleSheet.flatten([
              { backgroundColor: 'transparent' },
              iconStyle && iconStyle,
            ])}
            size={size}
            name={name}
            color={reverse ? reverseColor : color}
            {...iconSpecificStyle}
            {...iconProps}
          />
        </View>
      </Component>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
});

Icon.displayName = 'Icon';

export default Icon;
