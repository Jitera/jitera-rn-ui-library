import React from 'react';
import {
  TextInput,
  Animated,
  Easing,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { View, Text, Icon } from '../../..';
import { renderNode, patchWebProps } from '../../../theme/helpers';
import { ThemeProps, defaultTheme } from '../../../theme';

const renderText = (content: any, defaultProps: any, style: StyleProp<any>) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  disabledInputStyle?: StyleProp<TextStyle>;
  focusInputColor?: string;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  InputComponent?: typeof React.Component;
  errorProps?: any;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  label?: string | React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  labelProps?: any;
  renderErrorMessage?: boolean;
  showClearText?: boolean;
  iconStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
};

export class Input extends React.Component<
  InputProps & Partial<ThemeProps<InputProps>>
> {
  static displayName = 'Input';
  input: any;
  shakeAnimationValue = new Animated.Value(0);

  focus(): void {
    this.input.focus();
  }

  blur(): void {
    this.input.blur();
  }

  clear(): void {
    this.input.clear();
  }

  isFocused(): boolean {
    return this.input?.isFocused();
  }

  setNativeProps(nativeProps: Partial<TextInputProps>): void {
    this.input.setNativeProps(nativeProps);
  }

  shake = () => {
    const { shakeAnimationValue } = this;
    shakeAnimationValue.setValue(0);
    // Animation duration based on Material Design
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const {
      containerStyle,
      disabled,
      disabledInputStyle,
      focusInputColor,
      inputContainerStyle,
      InputComponent = TextInput,
      inputStyle,
      errorProps,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      labelProps,
      theme,
      renderErrorMessage = true,
      style,
      showClearText,
      iconStyle,
      multiline,
      numberOfLines,
      maxLength,
      ...attributes
    } = this.props;

    const handleClearText = () => {
      this.clear();
    };

    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });

    const hideErrorMessage = !renderErrorMessage && !errorMessage;

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        {renderText(
          label,
          { style: labelStyle, ...labelProps },
          {
            fontSize: theme?.fontSizes?.FONT_16,
            color: theme?.colors?.grey3,
            ...Platform.select({
              default: {
                fontWeight: 'bold',
              },
            }),
          }
        )}

        <Animated.View
          style={StyleSheet.flatten([
            styles.animatedContainer,
            inputContainerStyle,
            { transform: [{ translateX }] },
          ])}
        >
          <InputComponent
            underlineColorAndroid="transparent"
            editable={!disabled}
            ref={(ref: any) => {
              this.input = ref;
            }}
            style={StyleSheet.flatten([
              {
                color: theme?.colors?.black,
                minHeight:
                  Platform.OS === 'ios' && numberOfLines
                    ? 25 * numberOfLines
                    : defaultTheme?.spacing?.SPACING_50,
              },
              styles.input,
              inputStyle,
              disabled && styles.disabledInput,
              disabled && disabledInputStyle,
              this.isFocused() && focusInputColor
                ? {
                    color: focusInputColor,
                  }
                : null,
              style,
            ])}
            placeholderTextColor={theme?.colors?.grey3}
            multiline={multiline}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            {...patchWebProps(attributes)}
          />
          {showClearText ? (
            <TouchableOpacity
              style={StyleSheet.flatten([styles.icon, iconStyle])}
              onPress={handleClearText}
            >
              <Icon
                type="AntDesign"
                name="close"
                color={defaultTheme?.colors?.grey4}
              />
            </TouchableOpacity>
          ) : null}
        </Animated.View>
        <Text
          {...errorProps}
          style={StyleSheet.flatten([
            {
              marginTop: theme?.spacing?.SPACING_5,
              fontSize: theme?.fontSizes?.FONT_12,
              color: theme?.colors?.error,
            },
            errorStyle && errorStyle,
            hideErrorMessage && {
              height: 0,
              margin: 0,
              padding: 0,
            },
          ])}
        >
          {errorMessage}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  disabledInput: {
    opacity: 0.5,
  },
  animatedContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0,
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '40%',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: defaultTheme?.colors?.grey5,
    marginTop: defaultTheme?.spacing?.SPACING_10,
    borderRadius: defaultTheme?.spacing?.SPACING_5,
    fontSize: defaultTheme?.fontSizes?.FONT_18,
    flex: 1,
    paddingHorizontal: defaultTheme?.spacing?.SPACING_10,
  },
});
