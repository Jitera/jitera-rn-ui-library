import React, { useEffect } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import jwtDecode from 'jwt-decode';

import type {
  AuthError,
  AuthSessionResult,
  TokenResponse,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';

import { Icon, IconType } from '../Icon';
import Text from '../Text';

export enum ThirdPartyAuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}

export type AuthSessionResultComplete = {
  type: 'error' | 'success';
  errorCode: string | null;
  error?: AuthError | null;
  params: {
    [key: string]: string;
  };
  authentication: TokenResponse | null;
  url: string;
};

export interface BaseAuthResult {
  authentication: AuthSessionResult | null;
}

export interface GoogleAuthResult extends BaseAuthResult {
  email: string | undefined;
  idToken: string | undefined;
}

export interface FacebookAuthResult extends BaseAuthResult {
  accessToken: string | undefined;
}

export interface ThirdPartyAuthButtonProps extends TouchableOpacityProps {
  type: ThirdPartyAuthProvider;
  config:
    | Partial<Google.GoogleAuthRequestConfig>
    | Partial<Facebook.FacebookAuthRequestConfig>;
  onChange?: (authResult: GoogleAuthResult | FacebookAuthResult) => void;
}

export interface GoogleAuthButtonProps
  extends Omit<ThirdPartyAuthButtonProps, 'type'> {}

export interface FacebookAuthButtonProps
  extends Omit<ThirdPartyAuthButtonProps, 'type'> {}

const baseAuthStylesheet = ScaledSheet.create({
  container: {
    padding: '8@s',
    borderRadius: '5@s',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: '1@s',
    },
    shadowOpacity: '0.2@s',
    shadowRadius: '1.5@s',
    elevation: '2@s',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginLeft: '8@s',
  },
});

const googleAuthStylesheet = ScaledSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

const facebookAuthStylesheet = ScaledSheet.create({
  container: {
    backgroundColor: '#4267B2',
  },
  text: {
    color: '#fff',
  },
});

const GoogleAuthButton = React.forwardRef<
  TouchableOpacity,
  GoogleAuthButtonProps
>(({ config, style, onChange }, ref) => {
  const [_, response, promptAsync] = Google.useIdTokenAuthRequest(config);

  useEffect(() => {
    const idToken = (response as AuthSessionResultComplete)?.authentication
      ?.idToken;
    const decodedJwt = idToken && jwtDecode(idToken);
    onChange &&
      onChange({
        email: (decodedJwt as Record<string, any>)?.email || undefined,
        idToken,
        authentication: response,
      });
  }, [response]);

  return (
    <TouchableOpacity
      ref={ref}
      style={
        StyleSheet.flatten([
          baseAuthStylesheet.container as StyleProp<ViewStyle>,
          googleAuthStylesheet.container as StyleProp<ViewStyle>,
          style,
        ]) as StyleProp<ViewStyle>
      }
      onPress={() => {
        promptAsync();
      }}
    >
      <Icon type={IconType.AntDesign} name="google" />
      <Text
        style={
          StyleSheet.flatten([baseAuthStylesheet.text]) as StyleProp<ViewStyle>
        }
      >
        Sign In with Google
      </Text>
    </TouchableOpacity>
  );
});

const FacebookAuthButton = React.forwardRef<
  TouchableOpacity,
  FacebookAuthButtonProps
>(({ config, style, onChange }, ref) => {
  const [_, response, promptAsync] = Facebook.useAuthRequest(config);

  useEffect(() => {
    onChange &&
      onChange({
        accessToken: (response as AuthSessionResultComplete)?.authentication
          ?.accessToken,
        authentication: response,
      });
  }, [response, _]);

  return (
    <TouchableOpacity
      ref={ref}
      style={
        StyleSheet.flatten([
          baseAuthStylesheet.container as StyleProp<ViewStyle>,
          facebookAuthStylesheet.container as StyleProp<ViewStyle>,
          style,
        ]) as StyleProp<ViewStyle>
      }
      onPress={() => {
        promptAsync();
      }}
    >
      <Icon type={IconType.AntDesign} name="facebook-square" color={'#fff'} />
      <Text
        style={
          StyleSheet.flatten([
            baseAuthStylesheet.text as StyleProp<ViewStyle>,
            facebookAuthStylesheet.text as StyleProp<ViewStyle>,
          ]) as StyleProp<ViewStyle>
        }
      >
        Sign In with Facebook
      </Text>
    </TouchableOpacity>
  );
});

const AuthButton = {
  [ThirdPartyAuthProvider.GOOGLE]: GoogleAuthButton,
  [ThirdPartyAuthProvider.FACEBOOK]: FacebookAuthButton,
};

const ThirdPartyAuthButton = React.forwardRef<
  TouchableOpacity,
  ThirdPartyAuthButtonProps
>(({ type, ...props }, ref) => {
  React.useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  const Component = AuthButton?.[type];

  return Component ? <Component {...props} ref={ref} /> : null;
});

ThirdPartyAuthButton.displayName = 'ThirdPartyAuthButton';

export default ThirdPartyAuthButton;
