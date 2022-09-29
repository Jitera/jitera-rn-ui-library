import React from "react";
import { View as RNView, ViewStyle, StyleProp, TextStyle } from "react-native";
import { CodeFieldProps } from "react-native-confirmation-code-field";
import type { PreviewProps } from "../../../type";
export declare enum OTPInputType {
    Box = "box",
    Underline = "underline"
}
export interface OTPInputProps extends PreviewProps, Omit<CodeFieldProps, "renderCell" | "onChange"> {
    style?: StyleProp<ViewStyle>;
    value?: string;
    pinCount?: number;
    autoFocus?: boolean;
    cellStyle?: ViewStyle;
    focusCellStyle?: ViewStyle;
    cellTextStyle?: TextStyle;
    focusCellTextStyle?: TextStyle;
    otpInputType?: OTPInputType;
    isSecure?: boolean;
    onChange?: (code?: string) => void;
    onCodeChanged?: (code?: string) => void;
    onBlur?: (e: any) => void;
    renderCell?: any;
    errorMessage?: string;
    errorProps?: any;
    renderErrorMessage?: boolean;
    errorStyle?: StyleProp<TextStyle>;
}
declare const OTPInput: React.ForwardRefExoticComponent<Pick<OTPInputProps, "style" | "children" | "allowFontScaling" | "numberOfLines" | "onLayout" | "onPressIn" | "onPressOut" | "testID" | "nativeID" | "maxFontSizeMultiplier" | "selectionColor" | "textBreakStrategy" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "textAlign" | "hitSlop" | "pointerEvents" | "removeClippedSubviews" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "focusable" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onStartShouldSetResponder" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "key" | "onBlur" | "onFocus" | "value" | "defaultValue" | "autoFocus" | "autoComplete" | "maxLength" | "onChangeText" | "onChange" | "multiline" | "autoCapitalize" | "autoCorrect" | "blurOnSubmit" | "caretHidden" | "contextMenuHidden" | "editable" | "keyboardType" | "onContentSizeChange" | "onEndEditing" | "onSelectionChange" | "onSubmitEditing" | "onTextInput" | "onScroll" | "onKeyPress" | "placeholder" | "placeholderTextColor" | "returnKeyType" | "secureTextEntry" | "selectTextOnFocus" | "selection" | "inputAccessoryViewID" | "clearButtonMode" | "clearTextOnFocus" | "dataDetectorTypes" | "enablesReturnKeyAutomatically" | "keyboardAppearance" | "passwordRules" | "rejectResponderTermination" | "selectionState" | "spellCheck" | "textContentType" | "scrollEnabled" | "importantForAutofill" | "disableFullscreenUI" | "inlineImageLeft" | "inlineImagePadding" | "returnKeyLabel" | "underlineColorAndroid" | "textAlignVertical" | "showSoftInputOnFocus" | "errorMessage" | "isPreview" | "renderCell" | "RootProps" | "RootComponent" | "rootStyle" | "textInputStyle" | "cellCount" | "pinCount" | "cellStyle" | "focusCellStyle" | "cellTextStyle" | "focusCellTextStyle" | "otpInputType" | "isSecure" | "onCodeChanged" | "errorProps" | "renderErrorMessage" | "errorStyle"> & React.RefAttributes<RNView>>;
export default OTPInput;
