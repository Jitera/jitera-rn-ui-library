import React, { useRef, useCallback, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
  ActivityIndicatorProps,
  TextStyle,
} from 'react-native';
import {
  renderNode,
  Color,
  RneFunctionComponent,
} from '../../../theme/helpers';
import type { Theme } from '../../../theme';
import type { TextProps } from '../../../index';

const defaultLoadingProps = (
  type: 'solid' | 'clear' | 'outline',
  theme: Theme<ButtonProps> | undefined
): ActivityIndicatorProps => ({
  color: type === 'solid' ? 'white' : theme?.colors?.primary,
  size: 'small',
});

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
  };

export const Button: RneFunctionComponent<ButtonProps> = ({
  style,
  TouchableComponent,
  containerStyle,
  onPress = () => console.log('Please attach a method to this component'),
  buttonStyle,
  type = 'solid',
  loading = false,
  loadingStyle,
  loadingProps: passedLoadingProps,
  title = '',
  titleProps,
  titleStyle: passedTitleStyle,
  disabled = false,
  disabledStyle,
  disabledTitleStyle,
  raised = false,
  linearGradientProps,
  ViewComponent = View,
  theme,
  prefixComponent,
  suffixComponent,
  ...attributes
}) => {
  const scaleAnimation = useRef(new Animated.Value(0));

  useEffect(() => {
    if (linearGradientProps && !ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const handleOnPress = useCallback(
    (evt: any) => {
      if (!loading) {
        onPress(evt);
      }
    },
    [loading, onPress]
  );

  const handlePressIn = useCallback(() => {
    scaleAnimation.current.setValue(0);
    Animated.timing(scaleAnimation.current, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressOut = useCallback(() => {
    scaleAnimation.current.setValue(1);
    Animated.timing(scaleAnimation.current, {
      toValue: 0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  }, []);

  // Refactor to Pressable
  const TouchableComponentInternal =
    TouchableComponent ||
    Platform.select({
      android: TouchableWithoutFeedback,
      default: TouchableWithoutFeedback,
    });

  const titleStyle: StyleProp<TextStyle> = StyleSheet.flatten([
    {
      color: type === 'solid' ? 'white' : theme?.colors?.primary,
    },
    styles.title,
    passedTitleStyle,
    disabled && {
      color: Color(theme?.colors?.disabled).darken(0.3).string(),
    },
    disabled && disabledTitleStyle,
  ]);

  const loadingProps: ActivityIndicatorProps = {
    ...defaultLoadingProps(type, theme),
    ...passedLoadingProps,
  };

  const accessibilityState = {
    disabled: !!disabled,
    busy: !!loading,
  };
  const animatedStyle = useMemo(
    () => ({
      transform: [
        {
          scale: scaleAnimation.current.interpolate({
            inputRange: [0, 0.8, 1],
            outputRange: [1, 0.98, 0.95],
          }),
        },
      ],
    }),
    []
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const backgroundColor = style ? style.backgroundColor : undefined;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderRadius: 4 || styles.container.borderRadius,
        },
        style,
        containerStyle,
        raised && !disabled && type !== 'clear' && styles.raised,
        animatedStyle,
      ]}
    >
      <TouchableComponentInternal
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handleOnPress}
        accessibilityRole="button"
        accessibilityState={accessibilityState}
        disabled={disabled || loading}
        {...attributes}
      >
        <ViewComponent
          {...linearGradientProps}
          style={StyleSheet.flatten([
            styles.button,
            styles.buttonOrientation,
            {
              flexDirection: 'row',
            },
            {
              backgroundColor:
                type === 'solid'
                  ? backgroundColor || theme?.colors?.primary
                  : 'transparent',
              borderColor: theme?.colors?.primary,
              borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
            },
            buttonStyle,
            disabled &&
              type === 'solid' && {
                backgroundColor: theme?.colors?.disabled,
              },
            disabled &&
              type === 'outline' && {
                borderColor: Color(theme?.colors?.disabled)
                  .darken(0.3)
                  .string(),
              },
            disabled && disabledStyle,
          ])}
        >
          {suffixComponent ? suffixComponent : null}
          {loading && (
            <ActivityIndicator
              style={StyleSheet.flatten([styles.loading, loadingStyle])}
              color={loadingProps.color}
              size={loadingProps.size}
              {...loadingProps}
            />
          )}

          {!loading &&
            !!title &&
            renderNode(Text, title, {
              style: titleStyle,
              ...titleProps,
            })}
          {prefixComponent ? prefixComponent : null}
        </ViewComponent>
      </TouchableComponentInternal>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonOrientation: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    padding: 8,
  },
  container: {
    overflow: 'hidden',
    borderRadius: 3,
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
