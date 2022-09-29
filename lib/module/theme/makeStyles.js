import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeProvider';
export const useTheme = () => {
  return useContext(ThemeContext);
};
export const makeStyles = styles => function () {
  let props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const {
    theme
  } = useTheme();
  const css = typeof styles === 'function' ? styles(theme, props) : styles;
  return StyleSheet.create(css);
};
//# sourceMappingURL=makeStyles.js.map