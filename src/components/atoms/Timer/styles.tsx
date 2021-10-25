import { makeStyles, Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  description: {
    paddingRight: theme.spacing?.SPACING_5,
    fontSize: theme.fontSizes?.FONT_14,
    color: theme.colors?.grey2,
  },
  timer: {
    fontSize: theme.fontSizes?.FONT_14,
    color: theme.colors?.grey2,
  },
}));

export default useStyles;
