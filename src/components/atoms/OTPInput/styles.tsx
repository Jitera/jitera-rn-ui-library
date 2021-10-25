import { Dimensions } from 'react-native';
import { makeStyles, Theme } from '../../../theme';
import { scale } from 'react-native-size-matters';

const { width } = Dimensions.get('window');

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: scale(55),
  },
  container: {
    maxWidth: width - (theme?.spacing?.SPACING_30 || 0) * 2,
  },
  underlineStyleBase: {
    borderRadius: 8,
    color: theme.colors?.black,
    fontSize: theme.fontSizes?.FONT_20,
    backgroundColor: theme.colors?.white,
    width: scale(50),
    height: scale(50),
  },
  underlineStyleHighLighted: {
    color: theme.colors?.black,
    fontSize: theme.fontSizes?.FONT_24,
    backgroundColor: theme.colors?.white,
    borderColor: theme.colors?.secondary,
  },
}));

export default useStyles;
