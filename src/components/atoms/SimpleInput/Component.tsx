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
  Platform,
} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import { Icon, IconProps, IconType } from '../Icon';
import { useFirstMountState } from '../../../hooks/useFirstMountState';
import type { ViewProps } from '../View';

export interface SimpleInputProps
  extends Omit<
    TextInputProps,
    'onChangeText' | 'onChange' | 'onBlur' | 'multiline' | 'style'
  > {
  style?: StyleProp<ViewStyle> | undefined;

  onChange?: ((text: string) => void) | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  isPreview?: boolean | undefined;
  maxLength?: number | undefined;
  inputRef?: React.MutableRefObject<TextInput | null> | undefined;
  inputStyle?: StyleProp<TextStyle> | undefined;

  showClearText?: boolean | undefined;
  clearIconColor?: ColorValue | undefined;
  clearIconProps?: IconProps | undefined;

  showSecureEye?: boolean | undefined;
  secureEyeIconColor?: ColorValue | undefined;
  secureEyeIconProps?: IconProps | undefined;

  onClear?: (() => void) | undefined;
}

export interface FloatingIconProps extends ViewProps {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: React.ReactElement;
  onTap?: (() => void) | undefined;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  icon,
  style,
  containerStyle,
  onTap,
  ...props
}) => {
  return (
    <View
      style={StyleSheet.flatten([
        styleSheet.floatingIconContainer,
        containerStyle,
      ])}
    >
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
  );
};

const SimpleInput = React.forwardRef<View, SimpleInputProps>(
  (
    {
      value,
      placeholder,
      style,
      numberOfLines = 1,
      isPreview,
      editable,
      maxLength,
      inputRef,
      inputStyle,
      secureTextEntry,

      showClearText,
      clearIconColor,
      clearIconProps,

      showSecureEye,
      secureEyeIconColor,
      secureEyeIconProps,

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
      if (secureTextEntry && numberOfLines! > 1) {
        return false;
      }
      return numberOfLines! > 1;
    }, [secureTextEntry, numberOfLines]);

    const isClearIconVisible = useMemo(() => {
      if (showClearText !== undefined) {
        return showClearText;
      }
      return (value as string)?.length > 0;
    }, [value, showClearText]);

    const [secured, setSecured] = useState(secureTextEntry);
    const isSecureEyeIconVisible = useMemo(() => {
      if (showSecureEye !== undefined) {
        return showSecureEye;
      }
      return secureTextEntry;
    }, [secureTextEntry, showSecureEye]);

    const paddingRight = useMemo(() => {
      if (isClearIconVisible && isSecureEyeIconVisible) {
        return 74;
      }
      if (isClearIconVisible || isSecureEyeIconVisible) {
        return 44;
      }
      return undefined;
    }, []);

    const minHeight = useMemo(() => {
      if (Platform.OS === 'ios' && isMultiline) {
        return numberOfLines * contentSizeHeight + 28;
      }
      return undefined;
    }, [contentSizeHeight, numberOfLines, isMultiline]);

    return (
      <View ref={ref} style={StyleSheet.flatten([styleSheet.container, style])}>
        <View style={styleSheet.containerTextInput}>
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
                  borderColor: (inputStyle as ViewStyle)?.borderColor,
                },
                { paddingRight },
                inputStyle,
              ])}
              value={value}
              placeholder={placeholder}
              maxLength={maxLength}
              multiline={isMultiline}
              numberOfLines={secureTextEntry ? undefined : numberOfLines}
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
                  marginRight: isSecureEyeIconVisible ? 40 : 10,
                }}
                icon={
                  <Icon
                    {...clearIconProps}
                    type={IconType.Ionicons}
                    name="close-circle"
                    color={clearIconColor}
                  />
                }
                onTap={() => {
                  if (!isPreview) {
                    onClear && onClear();
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
                  marginRight: 10,
                }}
                icon={
                  <Icon
                    {...secureEyeIconProps}
                    type={IconType.Ionicons}
                    name={secured ? 'eye' : 'eye-off'}
                    color={secureEyeIconColor}
                  />
                }
                onTap={() => {
                  if (!isPreview) {
                    setSecured((oldSecured) => !oldSecured);
                  }
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
);

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  containerTextInput: {
    display: 'flex',
    flexDirection: 'column',
  },
  placeholderContainer: {
    marginBottom: 5,
  },
  containerClearIconTextInput: {
    position: 'relative',
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  floatingIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
});

export default SimpleInput;
