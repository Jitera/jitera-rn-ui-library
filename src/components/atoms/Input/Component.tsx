import React, { FunctionComponent } from 'react';
import {
  TextInput,
  Animated,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { View, Text, Icon } from '../../..';
import { renderNode, patchWebProps } from '../../../theme/helpers';

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

const Input: FunctionComponent<InputProps> = ({
  containerStyle,
  disabled,
  disabledInputStyle,
  inputContainerStyle,
  InputComponent = TextInput,
  inputStyle,
  errorProps,
  errorStyle,
  errorMessage,
  label,
  labelStyle,
  labelProps,
  renderErrorMessage = true,
  style,
  showClearText,
  iconStyle,
  multiline,
  numberOfLines,
  maxLength,
  ...attributes
}) => {
  const hideErrorMessage = !renderErrorMessage && !errorMessage;

  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {renderText(label, { style: labelStyle, ...labelProps }, {})}

      <Animated.View
        style={StyleSheet.flatten([
          styles.animatedContainer,
          inputContainerStyle,
        ])}
      >
        <InputComponent
          underlineColorAndroid="transparent"
          editable={!disabled}
          style={StyleSheet.flatten([
            {
              minHeight:
                Platform.OS === 'ios' && numberOfLines
                  ? 25 * numberOfLines
                  : 50,
            },
            styles.input,
            inputStyle,
            disabled && styles.disabledInput,
            disabled && disabledInputStyle,
            style,
          ])}
          multiline={multiline}
          maxLength={maxLength}
          numberOfLines={numberOfLines}
          {...patchWebProps(attributes)}
        />
        {showClearText ? (
          <TouchableOpacity
            style={StyleSheet.flatten([styles.icon, iconStyle])}
          >
            <Icon type="AntDesign" name="close" />
          </TouchableOpacity>
        ) : null}
      </Animated.View>
      <Text
        {...errorProps}
        style={StyleSheet.flatten([
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
};

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
    borderColor: 'e1e8ee',
    marginTop: 10,
    borderRadius: 5,
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Input;
