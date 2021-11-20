import React, { useMemo, FunctionComponent } from 'react';
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
} from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

export type PageProps = {
  /**
   * Scroll enable
   * @default true
   */
  scrollEnabled?: boolean;
  /**
   * Children of Screen
   */
  children?: React.ReactNode;

  SafeAreaView: any;

  /**
   * Overwrite style of screen
   * @default undefined
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Color of Screen
   * @default transparent
   */
  backgroundColor?: string;

  /**
   * Status bar style
   * @default dark-content
   */
  statusBar?: 'light-content' | 'dark-content';

  /**
   * Using safe area on ios
   * @default false
   */
  unsafe?: boolean;

  /**
   * Visibility status bar
   * @default true
   */
  hidden?: boolean;

  /**
   * Color of status bar for both Android/IOS
   */
  statusColor?: string;

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

  /**
   * Show vertical indicator or not (using when scroll equal true)
   * @default false
   */
  showsVerticalScrollIndicator?: boolean;

  /**
   * Show horizontal indicator or not (using when scroll equal true)
   * @default false
   */
  showsHorizontalScrollIndicator?: boolean;

  /**
   * Using scroll content
   * @default false
   */
  scroll?: boolean;

  /**
   * Inset for safe area view
   * @default undefined
   */
  forceInset?: Edge[];

  /**
   * Keyboard offset value
   * @default 0
   */
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
};

const Page: FunctionComponent<PageProps> = ({
  scrollEnabled = false,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  hidden = false,
  statusColor = undefined,
  insetTop = false,
  insetBottom = true,
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
}) => {
  const InnerComponent = useMemo(() => {
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
  }, [
    scrollEnabled,
    hideKeyboardHandled,
    backgroundColor,
    style,
    children,
    showsVerticalScrollIndicator,
    showsHorizontalScrollIndicator,
    keyboardShouldPersistTaps,
  ]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({
        ios: 'padding',
      })}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <StatusBar
        hidden={hidden}
        backgroundColor={statusColor}
        barStyle={statusBar || 'dark-content'}
      />
      {insetTop ? (
        <SafeAreaView
          edges={['top']}
          style={[styles.flex0, { backgroundColor: backgroundTop }]}
        />
      ) : null}
      {InnerComponent}
      {insetBottom ? (
        <SafeAreaView
          edges={['bottom']}
          style={[
            styles.flex0,
            { backgroundColor: backgroundBottom || backgroundColor },
          ]}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
};

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
  },
});

Page.displayName = 'Page';

export default Page;
