function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider';
import DefaultTheme from './theme';

const isClassComponent = Component => Boolean(Component.prototype && Component.prototype.isReactComponent);

const ThemedComponent = (WrappedComponent, themeKey, displayName) => {
  return Object.assign((props, forwardedRef) => {
    const {
      children,
      ...rest
    } = props;
    return /*#__PURE__*/React.createElement(ThemeConsumer, null, context => {
      // If user isn't using ThemeProvider
      if (!context) {
        const newProps = { ...rest,
          theme: DefaultTheme,
          children
        };
        return isClassComponent(WrappedComponent) ? /*#__PURE__*/React.createElement(WrappedComponent, _extends({
          ref: forwardedRef
        }, newProps)) : /*#__PURE__*/React.createElement(WrappedComponent, newProps);
      }

      const {
        theme,
        updateTheme,
        replaceTheme
      } = context;
      const newProps = {
        theme,
        updateTheme,
        replaceTheme,
        ...deepmerge(themeKey && theme[themeKey] || {}, rest, {
          clone: false
        }),
        children
      };

      if (isClassComponent(WrappedComponent)) {
        return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
          ref: forwardedRef
        }, newProps));
      }

      return /*#__PURE__*/React.createElement(WrappedComponent, newProps);
    });
  }, {
    displayName: displayName
  });
};

function withTheme(WrappedComponent, themeKey) {
  const name = themeKey ? `Themed.${themeKey}` : `Themed.${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
  const Component = ThemedComponent(WrappedComponent, themeKey, name);

  if (isClassComponent(WrappedComponent)) {
    return hoistNonReactStatics( /*#__PURE__*/React.forwardRef(Component), WrappedComponent);
  }

  return Component;
}

export default withTheme;
//# sourceMappingURL=withTheme.js.map