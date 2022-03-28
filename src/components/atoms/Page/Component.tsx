import React from 'react';
import {
  View,
  Platform,
  Keyboard,
  StyleSheet,
  StyleProp,
  ViewStyle,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ViewProps,
} from 'react-native';

import type { SafeAreaView } from 'react-native-safe-area-context'

export interface PageProps extends ViewProps, KeyboardAvoidingViewProps {
  scrollEnabled?: boolean;
  children?: React.ReactNode;
  SafeAreaView: typeof SafeAreaView;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  statusBar?: 'light-content' | 'dark-content';
  unsafe?: boolean;
  hidden?: boolean;
  statusColor?: string;
  safeArea?: boolean;
  /**
   * Enable to draw behind status bar android
   * @default false
   */
  draw?: boolean;

  /**
   * Enable to custom background color of inset bottom on Iphone
   * @default false
   */
  insetTop?: boolean;

  /**
   * Enable to custom background color of inset bottom on Iphone
   * @default false
   */
  insetBottom?: boolean;

  /**
   * Color of inset top when customInsetBottom set to true
   * @default #ffffff
   */
  backgroundTop?: string;

  /**
   * Color of inset bottom IPhone when customInsetBottom set to true
   * @default #ffffff
   */
  backgroundBottom?: string;

  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  keyboardVerticalOffset?: number;

  /**
   * Keyboard will hide when tap outside
   * @default 0
   */
  hideKeyboardHandled?: boolean;

  /**
   * keyboardShouldPersistTaps for scrollview
   * @default 0
   */
  keyboardShouldPersistTaps?: boolean | 'always' | 'never' | 'handled';
}


const Page = React.forwardRef<View | KeyboardAvoidingView, PageProps>(
  (
    {
      scrollEnabled = false,
      showsHorizontalScrollIndicator = false,
      showsVerticalScrollIndicator = false,
      hidden = false,
      statusColor = undefined,
      safeArea = false,
      backgroundBottom = undefined,
      style = {},
      keyboardVerticalOffset = 0,
      children,
      statusBar,
      backgroundTop,
      backgroundColor,
      SafeAreaView = View,
      hideKeyboardHandled = false,
      keyboardShouldPersistTaps = 'handled',
    },
    ref
  ) => {
    const renderComponent = () => {
      if (scrollEnabled) {
        return (
          <ScrollView
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
            showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
            style={[styles.container, { backgroundColor }]}
            contentContainerStyle={style}
          >
            {children}
          </ScrollView>
        );
      } else if (hideKeyboardHandled && Platform.OS !== 'web') {
        return (
          <TouchableOpacity
            activeOpacity={1}
            accessible={false}
            onPress={Keyboard.dismiss}
            style={[styles.container, { backgroundColor }, style]}
          >
            {children}
          </TouchableOpacity>
        );
      }
      return (
        <View style={[styles.container, { backgroundColor }, style]}>
          {children}
        </View>
      );
    };
    const WrapperComponent =
      Platform.OS === 'web' ? View : KeyboardAvoidingView;
    return (
      <WrapperComponent
        ref={ref}
        style={styles.container}
        {...Platform.select({
          ios: {
            behavior: 'padding',
          },
          default: {},
        })}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <StatusBar
          hidden={hidden}
          backgroundColor={statusColor}
          barStyle={statusBar || 'dark-content'}
        />
        {safeArea ? (
          <SafeAreaView
            edges={['top']}
            style={[styles.flex0, { backgroundColor: backgroundTop }]}
          />
        ) : null}
        {renderComponent()}
        {safeArea ? (
          <SafeAreaView
            edges={['bottom']}
            style={[
              styles.flex0,
              { backgroundColor: backgroundBottom || backgroundColor },
            ]}
          />
        ) : null}
      </WrapperComponent>
    );
  }
);

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },
  flex0: { flex: 0 },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});

Page.displayName = 'Page';

export default Page;
