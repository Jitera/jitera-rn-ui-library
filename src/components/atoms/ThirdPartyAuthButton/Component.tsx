import React, { useEffect } from 'react'

import {
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Svg, G, Path } from 'react-native-svg';

import type {
  AuthError,
  AuthSessionResult,
  TokenResponse,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as AppleAuthentication from 'expo-apple-authentication'

import { Icon, IconType } from '../Icon';
import Text from '../Text';
import View from '../View';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export enum ThirdPartyAuthProvider {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
  APPLE = 'Apple'
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
  uid: string | null
}

interface BaseThirdPartyAuthButtonProps {
  errorMessage?: string;
  value?: GoogleAuthResult | FacebookAuthResult | AppleAuthResult;
  onChange?: (authResult: GoogleAuthResult | FacebookAuthResult | AppleAuthResult) => void;
}

export interface ThirdPartyAuthButtonProps extends Omit<TouchableOpacityProps, 'onPress'>, PartialBy<Omit<AppleAuthentication.AppleAuthenticationButtonProps, 'onPress' | 'style'>, 'buttonType' | 'buttonStyle'>, BaseThirdPartyAuthButtonProps {
  type: ThirdPartyAuthProvider;
  config?:
    | Partial<Google.GoogleAuthRequestConfig>
    | Partial<Facebook.FacebookAuthRequestConfig>;
}

export interface GoogleAuthButtonProps
  extends Omit<ThirdPartyAuthButtonProps, 'type'> {}

export interface FacebookAuthButtonProps
  extends Omit<ThirdPartyAuthButtonProps, 'type'> {}

export interface AppleAuthButtonProps extends Omit<ThirdPartyAuthButtonProps, 'type' | 'config'> {}

interface ErrorMessageProps {
  errorMessage?: string;
}

const ERROR_COLOR = '#dc2626';

const baseAuthStylesheet = ScaledSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  text: {
    textAlign: 'center',
    marginLeft: '8@s',
    fontSize: '14@s'
  },
  errorMessage: {
    color: ERROR_COLOR,
    marginTop: '5@s',
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

const GoogleIcon: React.FC = () => (
  <Svg viewBox="0 0 24 24" width="24" height="24">
    <G transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
      <Path
        fill="#4285F4"
        d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
      />
      <Path
        fill="#34A853"
        d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
      />
      <Path
        fill="#FBBC05"
        d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
      />
      <Path
        fill="#EA4335"
        d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
      />
    </G>
  </Svg>
);

const useLoginText = () => {
  const getLoginText = (
    authProvider: ThirdPartyAuthProvider,
    authResult?: AuthSessionResult | null
  ) => {
    if (authResult?.type === 'success') {
      return 'Signed In';
    }
    return `Sign in with ${authProvider}`;
  };
  return {
    getLoginText,
  };
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <Text style={baseAuthStylesheet.errorMessage}>{errorMessage}</Text>
);

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ config, style, errorMessage, value, onChange }) => {
  const [_, response, promptAsync] = Google.useIdTokenAuthRequest(config!);
  const { getLoginText } = useLoginText();

  useEffect(() => {
    onChange &&
      onChange({
        accessToken: (response as AuthSessionResultComplete)?.authentication
          ?.accessToken,
        authentication: response,
      });
  }, [response]);

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        style
      ])}
      onPress={() => {
        promptAsync();
      }}
    >
      <View
        style={StyleSheet.flatten([
          baseAuthStylesheet.container as StyleProp<ViewStyle>,
          googleAuthStylesheet.container as StyleProp<ViewStyle>
        ])}
      >
        <GoogleIcon />
        <Text
          style={
            StyleSheet.flatten([
              baseAuthStylesheet.text,
            ]) as StyleProp<ViewStyle>
          }
        >
          {getLoginText(ThirdPartyAuthProvider.GOOGLE, (value?.authentication as AuthSessionResult))}
        </Text>
      </View>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </TouchableOpacity>
  );
}

const FacebookAuthButton: React.FC<FacebookAuthButtonProps> = ({ config, style, errorMessage, value, onChange }) => {
  const [_, response, promptAsync] = Facebook.useAuthRequest(config!);
  const { getLoginText } = useLoginText();

  useEffect(() => {
    onChange &&
      onChange({
        accessToken: (response as AuthSessionResultComplete)?.authentication
          ?.accessToken,
        authentication: response,
      });
  }, [response]);

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([
        style
      ])}
      onPress={() => {
        promptAsync();
      }}
    >
      <View
        style={StyleSheet.flatten([
          baseAuthStylesheet.container as StyleProp<ViewStyle>,
          facebookAuthStylesheet.container as StyleProp<ViewStyle>
        ])}
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
          {getLoginText(ThirdPartyAuthProvider.FACEBOOK, (value?.authentication as AuthSessionResult))}
        </Text>
      </View>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </TouchableOpacity>
  );
}

const AppleAuthButton: React.FC<AppleAuthButtonProps> = ({
  errorMessage,
  value,
  onChange,
  style,
  buttonType = AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN,
  buttonStyle = AppleAuthentication.AppleAuthenticationButtonStyle.BLACK,
  cornerRadius = 5,
  ...props
}) => {

  const handleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      onChange && onChange({
        idToken: credential.identityToken,
        uid: credential.user,
        authentication: credential
      })
      // signed in
    } catch (e) {
      if (e.code === 'ERR_CANCELED') {
        onChange && onChange({
          idToken: '',
          uid: '',
          authentication: { type: 'cancel' }
        })
      } else {
        onChange && onChange({
          idToken: '',
          uid: '',
          authentication: { type: 'error' }
        })
      }
    }
  }

  return (
    <TouchableOpacity>
      <AppleAuthentication.AppleAuthenticationButton
        {...props}
        buttonType={buttonType}
        buttonStyle={buttonStyle}
        cornerRadius={cornerRadius}
        style={StyleSheet.flatten([{ height: 44 }, style])}
        onPress={handleLogin}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </TouchableOpacity>
  )
}

const AuthButton = {
  [ThirdPartyAuthProvider.GOOGLE]: GoogleAuthButton,
  [ThirdPartyAuthProvider.FACEBOOK]: FacebookAuthButton,
  [ThirdPartyAuthProvider.APPLE]: AppleAuthButton
};

const ThirdPartyAuthButton: React.FC<ThirdPartyAuthButtonProps> = ({ type, errorMessage, ...props }) => {
  useEffect(() => {
    WebBrowser.warmUpAsync();

    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  const Component = AuthButton?.[type];

  return Component ? (
    <Component {...props} errorMessage={errorMessage} />
  ) : null;
};

export default ThirdPartyAuthButton;
