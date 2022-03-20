// import { Input } from '@jitera/jitera-rn-ui-library';
import { Icon, IconProps, IconType, Text, TextProps, ViewProps } from '@jitera/jitera-rn-ui-library';
// import React, { useEffect, useRef, useState } from 'react';
// import { TextInput } from 'react-native';
import BaseLayout from '~/layouts/Base';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useFirstMountState } from 'react-use';
import {
  TextInput,
  ColorValue,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInputEndEditingEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
  Platform,
} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
// import { Text, TextProps } from '../Text';
// import { Icon, IconProps, IconType } from '../Icon';
// import type { ViewProps } from '../View';

export interface InputProps
  extends Omit<
    TextInputProps,
    'onChangeText' | 'onChange' | 'onBlur' | 'multiline' | 'style'
  > {
  title?: string | undefined;
  style?: StyleProp<ViewStyle> | undefined;

  onChange?: ((text: string) => void) | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  errorMessage?: string | undefined;
  isPreview?: boolean | undefined;
  counter?: boolean | undefined;
  maxLength?: number | undefined;
  inputRef?: React.MutableRefObject<TextInput | null> | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;

  placeholderFloating?: boolean | undefined;
  placeholderStyle?: StyleProp<TextStyle> | undefined;
  placeholderProps?: Omit<TextProps, 'style'> | undefined;

  showClearText?: boolean | undefined;
  clearIconColor?: ColorValue | undefined;
  clearIconProps?: IconProps | undefined;

  showSecureEye?: boolean | undefined;
  secureEyeIconColor?: ColorValue | undefined;
  secureEyeIconProps?: IconProps | undefined

  errorMessageStyle?: StyleProp<TextStyle> | undefined;
  errorMessageProps?: Omit<TextProps, 'style'> | undefined;

  characterCounterStyle?: StyleProp<TextStyle> | undefined;
  characterCounterProps?: Omit<TextProps, 'style'> | undefined;

  onClear?: (() => void) | undefined;
}

export interface PlaceholderProps extends TextProps {
  text?: string | undefined;
  onTap?: (() => void) | undefined;
}

export interface FloatingIconProps extends ViewProps {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactElement;
  onTap?: (() => void) | undefined;
}

export interface ErrorMessageProps extends TextProps {
  errorMessage?: string | undefined;
}

export interface CharacterCounterProps extends TextProps {
  text?: string | undefined;
  maxLength?: number | undefined;
}

const Placeholder: React.FC<PlaceholderProps> = ({
  style,
  text,
  onTap,
  ...props
}) => {
  return (
    <View style={styleSheet.placeholderContainer}>
      <Text {...props} style={style}>
        {text}
      </Text>
    </View>
  );
};

const FloatingIcon: React.FC<FloatingIconProps> = (({ icon, style, containerStyle, onTap, ...props }) => {
  return (
    <View style={StyleSheet.flatten([styleSheet.floatingIconContainer, containerStyle])}>
      <TapGestureHandler
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.BEGAN) {
            onTap && onTap();
          }
        }}
      >
        <View {...props} style={style}>
          {icon}
        </View>
      </TapGestureHandler>
    </View>
  )
})

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  style,
  errorMessage,
  ...props
}) => {
  return (
    <View>
      <Text {...props} style={styleSheet.errorMessage}>
        {errorMessage}
      </Text>
    </View>
  );
};

const CharacterCounter: React.FC<CharacterCounterProps> = ({
  text = '',
  maxLength = 0,
  style,
  ...props
}) => {
  return (
    <View style={styleSheet.characterCounterContainer}>
      <Text {...props} style={style}>
        {text?.length} / {maxLength}
      </Text>
    </View>
  );
};

const Input = React.forwardRef<View, InputProps>(
  (
    {
      value,
      title,
      errorMessage,
      placeholder,
      style,
      numberOfLines = 1,
      isPreview,
      editable,
      counter,
      maxLength,
      inputRef,
      inputStyle,
      secureTextEntry,

      placeholderFloating,
      placeholderStyle,
      placeholderProps,

      showClearText,
      clearIconColor,
      clearIconProps,

      showSecureEye,
      secureEyeIconColor,
      secureEyeIconProps,

      errorMessageStyle,
      errorMessageProps,

      characterCounterStyle,
      characterCounterProps,

      onChange,
      onBlur,
      onClear,
      onFocus,
      ...props
    },
    ref
  ) => {
    const internalInputRef = useRef<TextInput>(null);
    const isFirstMount = useFirstMountState();
    const [contentSizeHeight, setContentSizeHeight] = useState(0);
    const isMultiline = useMemo(() => {
      if (secureTextEntry !== undefined && numberOfLines! > 1) {
        return false
      }
      return numberOfLines! > 1
    }, [secureTextEntry, numberOfLines])

    const isClearIconVisible = useMemo(
      () => {
        if (showClearText !== undefined) {
          return showClearText
        }
        return (value as string)?.length > 0
      },
      [value, showClearText]
    );

    const [secured, setSecured] = useState(true)
    const isSecureEyeIconVisible = useMemo(() => {
      if (showSecureEye !== undefined) {
        return showSecureEye
      }
      return secureTextEntry
    }, [secureTextEntry, showSecureEye])

    const paddingRight = useMemo(() => {
      if (isClearIconVisible && isSecureEyeIconVisible) {
        return 74
      }
      if (isClearIconVisible || isSecureEyeIconVisible) {
        return 44
      }
      return undefined
    }, [])

    const isCounterVisible = useMemo(() => {
      if (counter !== undefined) {
        return counter;
      }
      if (maxLength !== undefined && maxLength > 0) {
        return true;
      }
      return false;
    }, [counter, maxLength]);

    const minHeight = useMemo(() => {
      if (Platform.OS === 'ios' && isMultiline) {
        return numberOfLines * contentSizeHeight + 28;
      }
      return undefined;
    }, [contentSizeHeight, numberOfLines, isMultiline]);

    return (
      <View ref={ref} style={StyleSheet.flatten([styleSheet.container, style])}>
        <View style={styleSheet.containerPlaceholderTextInput}>
          {title !== undefined && (
            <Placeholder
              {...placeholderProps}
              style={StyleSheet.flatten([
                placeholderStyle,
                {
                  color: !!errorMessage
                    ? 'red'
                    : (placeholderStyle as TextStyle)?.color,
                },
              ])}
              text={title}
            />
          )}
          <View style={styleSheet.containerClearIconTextInput}>
            <TextInput
              {...props}
              ref={(ref) => {
                if (inputRef) {
                  inputRef.current = ref;
                }
                internalInputRef.current = ref;
              }}
              editable={editable || !isPreview}
              style={StyleSheet.flatten([
                styleSheet.textInput,
                { textAlignVertical: isMultiline ? 'top' : 'center' },
                { paddingTop: 14, paddingBottom: 14 },
                { minHeight },
                {
                  borderColor: !!errorMessage
                    ? 'red'
                    : (inputStyle as ViewStyle)?.borderColor,
                },
                { paddingRight },
                inputStyle,
              ])}
              value={value}
              placeholder={placeholder}
              maxLength={maxLength}
              multiline={isMultiline}
              numberOfLines={secureTextEntry !== undefined ? undefined : numberOfLines}
              secureTextEntry={secured}
              underlineColorAndroid="transparent"
              onFocus={(event) => {
                if (!isPreview) {
                  onFocus && onFocus(event);
                  return;
                }
                internalInputRef.current?.blur();
              }}
              onChangeText={onChange}
              onEndEditing={(event) => {
                onBlur && onBlur(event);
              }}
              onContentSizeChange={(e) => {
                if (Platform.OS === 'ios' && isFirstMount) {
                  setContentSizeHeight(e.nativeEvent.contentSize.height);
                }
              }}
            />
            {isClearIconVisible && (
              <FloatingIcon
                containerStyle={{
                  display: isMultiline ? undefined : 'flex',
                  justifyContent: isMultiline ? undefined : 'center',
                }}
                style={{
                  marginTop: isMultiline ? 10 : undefined,
                  marginRight: isSecureEyeIconVisible ? 40 : 10
                }}
                icon={
                  <Icon
                    {...clearIconProps}
                    type={IconType.Ionicons}
                    name="close-circle"
                    color={!!errorMessage ? 'red' : clearIconColor}
                  />
                }
                onTap={() => {
                  if (!isPreview) {
                    onClear && onClear()
                  }
                }}
              />
            )}
            {isSecureEyeIconVisible && (
              <FloatingIcon
                containerStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
                style={{
                  marginRight: 10
                }}
                icon={
                  <Icon
                    {...secureEyeIconProps}
                    type={IconType.Ionicons}
                    name={secured ? 'eye' : 'eye-off'}
                    color={!!errorMessage ? 'red' : secureEyeIconColor}
                  />
                }
                onTap={() => {
                  if (!isPreview) {
                    setSecured((oldSecured) => !oldSecured)
                  }
                }}
              />
            )}
          </View>
        </View>
        <View style={styleSheet.containerErrorMessageCharacterCounter}>
          {errorMessage !== undefined && (
            <ErrorMessage
              {...errorMessageProps}
              style={errorMessageStyle}
              errorMessage={errorMessage}
            />
          )}
          {isCounterVisible && (
            <CharacterCounter
              {...characterCounterProps}
              style={characterCounterStyle}
              text={value}
              maxLength={maxLength}
            />
          )}
        </View>
      </View>
    );
  }
);

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  containerPlaceholderTextInput: {
    display: 'flex',
    flexDirection: 'column',
  },
  placeholderContainer: {
    marginBottom: 5,
  },
  containerClearIconTextInput: {
    position: 'relative',
  },
  containerErrorMessageCharacterCounter: {
    marginTop: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  floatingIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  errorMessage: {
    color: 'red',
  },
  characterCounterContainer: {
    marginLeft: 'auto',
  },
});

const InputViews: React.FC = () => {
  const [value, setValue] = useState<string>('Address')
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus()
    }, 3000);
  }, [])

  return (
    <BaseLayout>
      <Input
        title="Address"
        inputRef={inputRef}
        isPreview={false}
        value={value}
        errorMessage={!(value?.length > 0) ? 'Lorem ipsum dolor sit amet amet.': undefined}
        maxLength={100}
        numberOfLines={3}
        onChange={setValue}
        // showClearText={false}
        // showSecureEye={false}
        secureTextEntry={true}
        onBlur={() => {
          console.log('blur')
        }}
        onClear={() => setValue('')}
      />
    </BaseLayout>
  );
}

export default InputViews;
