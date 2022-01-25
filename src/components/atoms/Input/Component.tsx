import React, { FunctionComponent, forwardRef } from 'react';
import {
  TextInput,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import View from '../View/Component';
import { Text, Icon } from '../../..';
import { renderNode, patchWebProps } from '../../../theme/helpers';

const renderText = (content: any, defaultProps: any, style: StyleProp<any>) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

export type InputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  errorMessage?: string;
  label?: string | React.ReactNode;
  labelStyle?: StyleProp<TextStyle>;
  showClearText?: boolean;
  iconStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  onClear?: () => void;
};

const Input: FunctionComponent<InputProps> = forwardRef<any, InputProps>(
  (
    {
      containerStyle,
      disabled,
      inputContainerStyle,
      inputStyle,
      errorStyle,
      errorMessage,
      label,
      labelStyle,
      showClearText,
      iconStyle,
      multiline,
      numberOfLines,
      maxLength,
      onClear,
      ...attributes
    },
    ref
  ) => {
    const hideErrorMessage = !errorMessage;

    return (
      <View
        ref={ref}
        style={StyleSheet.flatten([styles.container, containerStyle])}
      >
        {renderText(label, { style: labelStyle }, {})}

        <View
          style={StyleSheet.flatten([
            styles.animatedContainer,
            inputContainerStyle,
          ])}
        >
          <TextInput
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
              { paddingRight: showClearText ? 15 : 0 },
            ])}
            multiline={multiline}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            {...patchWebProps(attributes)}
          />
          {showClearText ? (
            <TouchableOpacity
              style={StyleSheet.flatten([styles.icon, iconStyle])}
              onPress={onClear}
            >
              <Icon type="AntDesign" name="close" />
            </TouchableOpacity>
          ) : null}
        </View>

        {!hideErrorMessage && (
          <Text style={StyleSheet.flatten([styles.errorStyle, errorStyle])}>
            {errorMessage}
          </Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  disabledInput: {
    opacity: 0.5,
  },
  errorStyle: {
    marginTop: 5,
    color: '#B00020',
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
    borderColor: '#e1e8ee',
    marginTop: 10,
    borderRadius: 5,
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Input;
