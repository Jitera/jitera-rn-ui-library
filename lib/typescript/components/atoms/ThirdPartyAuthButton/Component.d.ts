import React from "react";
import { TouchableOpacityProps } from "react-native";
import type { AuthError, AuthSessionResult, TokenResponse } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as AppleAuthentication from "expo-apple-authentication";
declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare enum ThirdPartyAuthProvider {
    GOOGLE = "Google",
    FACEBOOK = "Facebook",
    APPLE = "Apple"
}
export declare type AuthSessionResultComplete = {
    type: "error" | "success";
    errorCode: string | null;
    error?: AuthError | null;
    params: {
        [key: string]: string;
    };
    authentication: TokenResponse | null;
    url: string;
};
export interface BaseAuthResult {
    authentication: Partial<AuthSessionResult> | AppleAuthentication.AppleAuthenticationCredential | null;
}
export interface GoogleAuthResult extends BaseAuthResult {
    accessToken: string | undefined;
}
export interface FacebookAuthResult extends BaseAuthResult {
    accessToken: string | undefined;
}
export interface AppleAuthResult extends BaseAuthResult {
    idToken: string | null;
    uid: string | null;
}
interface BaseThirdPartyAuthButtonProps {
    errorMessage?: string;
    value?: GoogleAuthResult | FacebookAuthResult | AppleAuthResult;
    onChange?: (authResult: GoogleAuthResult | FacebookAuthResult | AppleAuthResult) => void;
}
export interface ThirdPartyAuthButtonProps extends Omit<TouchableOpacityProps, "onPress">, PartialBy<Omit<AppleAuthentication.AppleAuthenticationButtonProps, "onPress" | "style">, "buttonType" | "buttonStyle">, BaseThirdPartyAuthButtonProps {
    type: ThirdPartyAuthProvider;
    config?: Partial<Google.GoogleAuthRequestConfig> | Partial<Facebook.FacebookAuthRequestConfig>;
}
export interface GoogleAuthButtonProps extends Omit<ThirdPartyAuthButtonProps, "type"> {
}
export interface FacebookAuthButtonProps extends Omit<ThirdPartyAuthButtonProps, "type"> {
}
export interface AppleAuthButtonProps extends Omit<ThirdPartyAuthButtonProps, "type" | "config"> {
}
declare const ThirdPartyAuthButton: React.FC<ThirdPartyAuthButtonProps>;
export default ThirdPartyAuthButton;
