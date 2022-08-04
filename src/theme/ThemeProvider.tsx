import React from 'react';
import deepmerge from 'deepmerge';
import spacing from './spacing';
import fontSizes from './fontSize';
import fonts from './fonts';
import {
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import type { SafeAreaSize } from './safeAreaSize';
import colors from './colors';
import darkColors from './colorsDark';
import type { FullTheme, Theme } from './theme';
import type { RneFunctionComponent } from './helpers';
import CommonLoading from '../components/widgets/CommonLoading';
import Modal from '../components/widgets/Modal';
import Toast from '../components/widgets/Toast';

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface ThemeProps<T> {
  theme: Theme<T>;
  updateTheme: (updates: RecursivePartial<FullTheme>) => void;
  replaceTheme: (updates: RecursivePartial<FullTheme>) => void;
}

export const ThemeContext: React.Context<ThemeProps<any>> = React.createContext(
  {
    theme: {
      colors,
      fontSizes,
      spacing,
      fonts,
    },
  } as ThemeProps<any>
);

export type ThemeInnerProps = {
  useDark?: boolean;
  safeArea?: boolean;
  insets?: SafeAreaSize;
};

type ThemeInnerState = {
  theme: Theme;
  useDark: boolean;
};

class ThemeInner extends React.Component<ThemeInnerProps, ThemeInnerState> {
  static defaultProps = {
    theme: {},
    insets: {},
    useDark: false,
  };
  defaultTheme: Partial<FullTheme>;
  Wrapper?: any;

  constructor(props: {
    theme: Theme;
    useDark?: boolean;
    insets?: SafeAreaSize;
  }) {
    super(props);
    const defaultColors = props.useDark ? darkColors : colors;
    this.defaultTheme = deepmerge(
      {
        colors: defaultColors,
        fontSizes,
        spacing,
        fonts,
        safeArea: props.insets,
      },
      props.theme
    );
    this.state = {
      theme: this.defaultTheme,
      useDark: Boolean(props.useDark),
    };
  }

  static getDerivedStateFromProps(
    props: {
      theme: Theme;
      useDark?: boolean;
    },
    state: ThemeInnerState
  ) {
    const { useDark } = props;
    const isTheme = (theme: Partial<FullTheme>) => {
      return !(Object.keys(theme).length === 0 && theme.constructor === Object);
    };
    //isTheme will check if the theme is provided by user and will update the theme only if its provided by user
    //Not checking if the theme exist or not will always result in if statement getting executed as props.theme !== state.theme if theme is not provided
    if (
      useDark !== state.useDark ||
      (isTheme(props.theme) && props.theme !== state.theme)
    ) {
      const defaultColors = useDark ? darkColors : colors;
      return {
        theme: deepmerge(
          state.theme,
          deepmerge(
            {
              colors: defaultColors,
            },
            props.theme
          )
        ),
        useDark,
      };
    }
    return null;
  }

  updateTheme = (updates: RecursivePartial<FullTheme>) => {
    this.setState(({ theme }) => ({
      theme: deepmerge(theme, updates),
    }));
  };

  replaceTheme = (theme: RecursivePartial<FullTheme>) => {
    this.setState(() => ({
      theme: deepmerge(this.defaultTheme, theme),
    }));
  };

  getTheme = () => this.state.theme;

  render() {
    const { theme } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          theme: theme,
          updateTheme: this.updateTheme,
          replaceTheme: this.replaceTheme,
        }}
      >
        <>
          {this.props.children}
          <Modal theme={theme} {...theme.Modal} />
          <Toast theme={theme} {...theme.Toast} />
          <CommonLoading theme={theme} {...theme.CommonLoading} />
        </>
      </ThemeContext.Provider>
    );
  }
}

type ThemeProviderProps = {
  useDark?: boolean;
  safeArea?: boolean;
  children?: React.ReactNode;
};

const ThemeProvider: RneFunctionComponent<ThemeProviderProps> = ({
  safeArea,
  ...props
}) => {
  if (safeArea) {
    return (
      <SafeAreaProvider>
        <SafeAreaInsetsContext.Consumer>
          {(insets: SafeAreaSize) => <ThemeInner insets={insets} {...props} />}
        </SafeAreaInsetsContext.Consumer>
      </SafeAreaProvider>
    );
  }
  return <ThemeProvider {...props} />;
};

export default ThemeProvider;
export const ThemeConsumer = ThemeContext.Consumer;
