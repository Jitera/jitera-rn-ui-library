import React, { forwardRef, FunctionComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  TextStyle,
} from 'react-native';
import Color from '../../../shared/color';
import type { TextProps } from '../../../index';
import { renderNode } from '../../../theme/helpers';

export type ButtonProps = TouchableOpacityProps &
  TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<any>;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
    buttonStyle?: StyleProp<ViewStyle>;
    type?: 'solid' | 'clear' | 'outline';
    loading?: boolean;
    loadingStyle?: StyleProp<ViewStyle>;
    loadingProps?: ActivityIndicatorProps;
    containerStyle?: StyleProp<ViewStyle>;
    linearGradientProps?: any;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTitleStyle?: StyleProp<TextStyle>;
    raised?: boolean;
    prefixComponent?: typeof React.Component;
    suffixComponent?: typeof React.Component;
    borderColor?: string;
    primaryColor?: string;
    disableColor?: string;
  };

const Button: FunctionComponent<ButtonProps> = forwardRef<any, ButtonProps>(
  (
    {
      style,
      TouchableComponent,
      onPress = () => console.log('Please attach a method to this component'),
      buttonStyle,
      type = 'solid',
      title = '',
      titleProps,
      titleStyle: passedTitleStyle,
      disabled = false,
      disabledStyle,
      disabledTitleStyle,
      linearGradientProps,
      ViewComponent = View,
      prefixComponent,
      suffixComponent,
      disableColor,
      primaryColor,
      borderColor,
      children,
      ...attributes
    },
    ref
  ) => {
    // Refactor to Pressable
    const TouchableComponentInternal =
      TouchableComponent ||
      Platform.select({
        android: TouchableOpacity,
        default: TouchableOpacity,
      });

    const titleStyle: StyleProp<TextStyle> = StyleSheet.flatten([
      {
        color: type === 'solid' ? '#FFFFFF' : primaryColor,
      },
      styles.title,
      passedTitleStyle,
      disabled && {
        color: Color(disableColor).darken(0.3).string(),
      },
      disabled && disabledTitleStyle,
    ]);

    const accessibilityState = {
      disabled: !!disabled,
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const backgroundColor = style ? style.backgroundColor : undefined;
    // @ts-ignore
    const containerHeight = style ? style.height : undefined;

    return (
      <TouchableComponentInternal
        ref={ref}
        style={style}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled}
        {...attributes}
      >
        <ViewComponent
          {...linearGradientProps}
          style={StyleSheet.flatten([
            styles.button,
            styles.buttonOrientation,
            {
              height: containerHeight,
              backgroundColor:
                type === 'solid' ? backgroundColor : 'transparent',
              borderColor: borderColor,
              borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
            },
            buttonStyle,
            disabled &&
              type === 'solid' && {
                backgroundColor: disableColor,
              },
            disabled &&
              type === 'outline' && {
                borderColor: Color(disableColor).darken(0.3).string(),
              },
            disabled && disabledStyle,
          ])}
        >
          {suffixComponent ? suffixComponent : null}
          {children || typeof title === 'string'
            ? renderNode(Text, title, {
                style: titleStyle,
                ...titleProps,
              })
            : null}
          {prefixComponent ? prefixComponent : null}
        </ViewComponent>
      </TouchableComponentInternal>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOrientation: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  container: {
    overflow: 'hidden',
  },
  title: {
    textAlign: 'center',
    paddingVertical: 1,
    ...Platform.select({
      android: {
        fontSize: 16,
      },
      default: {
        fontSize: 18,
      },
    }),
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: {
    backgroundColor: '#fff',
    overflow: 'visible',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  loading: {
    marginVertical: 2,
  },
});

Button.displayName = 'Button';

export default Button;
