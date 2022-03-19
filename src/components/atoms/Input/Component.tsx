import React, { useMemo, useRef, useState } from 'react';
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
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { Text, TextProps } from '../Text';
import { Icon, IconProps, IconType } from '../Icon';
import type { ViewProps } from '../View';

export interface InputProps
  extends Omit<
    TextInputProps,
    'onChangeText' | 'onChange' | 'onBlur' | 'multiline'
  > {
  label?: string | undefined;
  onChange?: ((text: string) => void) | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  errorMessage?: string | undefined;
  isPreview?: boolean | undefined;
  counter?: boolean | undefined;
  maxLength?: number | undefined;

  placeholderFloating?: boolean | undefined;
  placeholderStyle?: StyleProp<TextStyle> | undefined;
  placeholderProps?: Omit<TextProps, 'style'> | undefined;

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
    <Animated.View
      style={styleSheet.placeholderContainer}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <Text {...props} style={style}>
        {text}
      </Text>
    </Animated.View>
  );
};

const ClearIcon: React.FC<ClearIconProps> = ({ color, onClear, ...props }) => {
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={styleSheet.clearIconContainer}
    >
      <TapGestureHandler
        onHandlerStateChange={(e) => {
          if (e.nativeEvent.state === State.BEGAN) {
            onClear && onClear();
          }
        }}
      >
        <Animated.View>
          <Icon
            {...props}
            type={IconType.AntDesign}
            name="closecircleo"
            color={color}
          />
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  );
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  style,
  errorMessage,
  ...props
}) => {
  return (
    <Animated.View
      style={styleSheet.errorMessageContainer}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <Text {...props} style={styleSheet.errorMessage}>
        {errorMessage}
      </Text>
    </Animated.View>
  );
};

const CharacterCounter: React.FC<CharacterCounterProps> = ({
  text = '',
  maxLength = 0,
  style,
  ...props
}) => {
  return (
    <Animated.View
      style={styleSheet.characterCounterContainer}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <Text {...props} style={style}>
        {text?.length} / {maxLength}
      </Text>
    </Animated.View>
  );
};

const Input = React.forwardRef<View, InputProps>(
  (
    {
      value,
      label,
      errorMessage,
      placeholder,
      style,
      numberOfLines = 1,
      isPreview,
      editable,
      counter,
      maxLength,

      placeholderFloating,
      placeholderStyle,
      placeholderProps,

      clearIconColor,
      clearIconProps,

      errorMessageStyle,
      errorMessageProps,

      characterCounterStyle,
      characterCounterProps,

      onChange,
      onBlur,
      onClear,
      ...props
    },
    ref
  ) => {
    const [isFocus, setFocus] = useState(false);
    const hasValue = useMemo(() => (value as string)?.length > 0, [value]);
    const isCounterVisible = useMemo(() => {
      if (counter !== undefined) {
        return counter;
      }
      if (maxLength !== undefined && maxLength > 0) {
        return true;
      }
      return false;
    }, [counter, maxLength]);
    const textInputRef = useRef<TextInput>(null);

    return (
      <View ref={ref} style={styleSheet.container}>
        <View style={styleSheet.containerPlaceholderTextInput}>
          {label && (
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
              text={label}
            />
          )}
          <View style={styleSheet.containerClearIconTextInput}>
            <TextInput
              {...props}
              ref={textInputRef}
              editable={editable || !isPreview}
              style={StyleSheet.flatten([
                styleSheet.textInput,
                style,
                { textAlignVertical: numberOfLines! > 1 ? 'top' : 'center' },
                {
                  borderColor: !!errorMessage
                    ? 'red'
                    : (style as ViewStyle)?.borderColor,
                },
                { paddingRight: hasValue ? 44 : undefined },
              ])}
              value={value}
              placeholder={placeholder}
              maxLength={maxLength}
              multiline={numberOfLines! > 1}
              numberOfLines={numberOfLines}
              underlineColorAndroid="transparent"
              onChangeText={onChange}
              onEndEditing={(event) => {
                onBlur && onBlur(event);
              }}
              onFocus={() => {
                setFocus(true);
              }}
              onBlur={() => {
                setFocus(false);
              }}
            />
            {hasValue && (
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
          {errorMessage && (
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

const styleSheet = ScaledSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  containerPlaceholderTextInput: {
    display: 'flex',
    flexDirection: 'column',
  },
  placeholderContainer: {
    marginBottom: '5@s',
  },
  containerClearIconTextInput: {
    position: 'relative',
  },
  containerErrorMessageCharacterCounter: {
    marginTop: '3@s',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'pink',
  },
  clearIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    marginTop: '10@s',
    marginRight: '10@s',
    zIndex: 2,
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
