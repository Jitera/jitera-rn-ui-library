import React, { useMemo, useRef, useState } from 'react';
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
import { Text, TextProps } from '../Text';
import { Icon, IconProps, IconType } from '../Icon';
import type { ViewProps } from '../View';

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
  clearIconProps?: Omit<ViewProps, 'style'> | undefined;

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

export interface ClearIconProps extends IconProps {
  color?: ColorValue | undefined;
  onClear?: (() => void) | undefined;
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

const ClearIcon: React.FC<ClearIconProps> = ({ color, onClear, ...props }) => {
  return (
    <View style={styleSheet.clearIconContainer}>
      <TapGestureHandler
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.BEGAN) {
            onClear && onClear();
          }
        }}
      >
        <View style={styleSheet.clearIconInnerContainer}>
          <Icon
            {...props}
            type={IconType.AntDesign}
            name="closecircleo"
            color={color}
          />
        </View>
      </TapGestureHandler>
    </View>
  );
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  style,
  errorMessage,
  ...props
}) => {
  return (
    <View style={styleSheet.errorMessageContainer}>
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

      placeholderFloating,
      placeholderStyle,
      placeholderProps,

      showClearText,
      clearIconColor,
      clearIconProps,

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
    const isClearIconVisible = useMemo(
      () => (value as string)?.length > 0 || showClearText,
      [value, showClearText]
    );
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
      if (Platform.OS === 'ios' && numberOfLines! > 1) {
        return numberOfLines * contentSizeHeight + 28;
      }
      return undefined;
    }, [contentSizeHeight, numberOfLines]);

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
                { textAlignVertical: numberOfLines! > 1 ? 'top' : 'center' },
                { paddingTop: 14, paddingBottom: 14 },
                { minHeight },
                {
                  borderColor: !!errorMessage
                    ? 'red'
                    : (inputStyle as ViewStyle)?.borderColor,
                },
                { paddingRight: isClearIconVisible ? 44 : undefined },
                inputStyle,
              ])}
              value={value}
              placeholder={placeholder}
              maxLength={maxLength}
              multiline={numberOfLines! > 1}
              numberOfLines={numberOfLines}
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
              <ClearIcon
                {...clearIconProps}
                color={!!errorMessage ? 'red' : clearIconColor}
                onClear={() => {
                  if (!isPreview) {
                    onClear && onClear();
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
  clearIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  clearIconInnerContainer: {
    marginTop: 10,
    marginRight: 10
  },
  errorMessage: {
    color: 'red',
  },
  errorMessageContainer: {},
  characterCounterContainer: {
    marginLeft: 'auto',
  },
});

export default Input;
