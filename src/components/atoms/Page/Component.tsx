import React, { useMemo } from "react";
import {
  View,
  Platform,
  Keyboard,
  StyleSheet,
  StyleProp,
  ViewStyle,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  ViewProps,
  SafeAreaView as RNSafeAreaView,
} from "react-native";
import type { SafeAreaViewProps } from "react-native-safe-area-context";

export interface PageProps extends ViewProps, KeyboardAvoidingViewProps {
  children?: React.ReactNode;
  SafeAreaView?: React.ElementType<SafeAreaViewProps>;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  statusBar?: "light-content" | "dark-content";
  unsafe?: boolean;
  hidden?: boolean;
  statusColor?: string;
  safeArea?: boolean;
  keyboardVerticalOffset?: number;

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
   * Keyboard will hide when tap outside
   * @default 0
   */
  hideKeyboardHandled?: boolean;
}

const Page = React.forwardRef<View | KeyboardAvoidingView, PageProps>(
  (
    {
      style,
      children,
      statusBar,
      backgroundTop,
      backgroundColor,
      keyboardVerticalOffset = 0,
      SafeAreaView = RNSafeAreaView,
      hideKeyboardHandled = false,
      hidden = false,
      statusColor = undefined,
      safeArea = false,
      insetBottom = false,
      insetTop = false,
      backgroundBottom = undefined,
    },
    ref
  ) => {
    const containerStyles = useMemo(() => {
      return [styles.container, { backgroundColor }, style]
    }, [backgroundColor, style])
    const innerComponent = useMemo(() => {
      if (hideKeyboardHandled && Platform.OS !== "web") {
        return (
          <TouchableOpacity
            activeOpacity={1}
            accessible={false}
            onPress={Keyboard.dismiss}
            style={containerStyles}
          >
            {children}
          </TouchableOpacity>
        );
      }
      return <View style={containerStyles}>{children}</View>;
    }, [containerStyles, children]);
    const topSafeArea = useMemo(() => {
      if (safeArea || insetTop) {
        return (
          <SafeAreaView
            edges={["top"]}
            style={[styles.flex0, { backgroundColor: backgroundTop }]}
          />
        );
      }
      return undefined;
    }, [insetTop, safeArea, backgroundTop]);
    const bottomSafeArea = useMemo(() => {
      if (safeArea || insetBottom) {
        return (
          <SafeAreaView
            edges={["bottom"]}
            style={[styles.flex0, { backgroundColor: backgroundBottom || backgroundColor }]}
          />
        );
      }
      return undefined;
    }, [insetBottom, safeArea, backgroundTop, backgroundColor]);

    const { WrapperComponent, wraperProps } = useMemo(() => {
      return {
        WrapperComponent: Platform.OS === 'web' ?  View : KeyboardAvoidingView,
        wraperProps: Platform.select({
          ios: {
            behavior: "padding" as KeyboardAvoidingViewProps['behavior'],
          },
          default: {},
        }),
      }
    }, []);
    return (
      <WrapperComponent
        ref={ref}
        style={styles.container}
        {...wraperProps}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <StatusBar
          hidden={hidden}
          backgroundColor={statusColor}
          barStyle={statusBar || "dark-content"}
        />
        {topSafeArea}
        {innerComponent}
        {bottomSafeArea}
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
    overflow: "hidden",
  },
});

Page.displayName = "Page";

export default Page;
