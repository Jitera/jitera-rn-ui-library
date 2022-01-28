import React, { FunctionComponent, forwardRef } from 'react';
import {
  TextInput,
  Platform,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import View from '../View/Component';
import type { PropsWithRef } from '../../../type';
import { Text, Icon } from '../../..';
import { renderNode, patchWebProps } from '../../../theme/helpers';

export type InputProps = PropsWithRef<
  Omit<TextInputProps, 'style' | 'multiline'> & {
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    inputStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    title?: string | React.ReactNode;
    showClearText?: boolean;
    numberOfLines?: number;
    onClear?: () => void;
  }
>;

const Input: FunctionComponent<InputProps> = forwardRef<any, InputProps>(
  (
    {
      style,
      disabled,
      inputStyle,
      errorMessage,
      title,
      showClearText,
      numberOfLines,
      onClear,
      ...attributes
    },
    ref
  ) => {
    const hideErrorMessage = !errorMessage;

    return (
      <View ref={ref} style={StyleSheet.flatten([styles.container, style])}>
        {renderNode(Text, title)}

        <View style={styles.animatedContainer}>
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
            multiline={typeof numberOfLines === 'number' && numberOfLines > 2}
            numberOfLines={numberOfLines}
            {...patchWebProps(attributes)}
          />
          {showClearText ? (
            <TouchableOpacity
              style={StyleSheet.flatten([styles.icon])}
              onPress={onClear}
            >
              <Icon type="AntDesign" name="close" />
            </TouchableOpacity>
          ) : null}
        </View>

        {!hideErrorMessage && (
          <Text style={StyleSheet.flatten([styles.errorStyle])}>
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
