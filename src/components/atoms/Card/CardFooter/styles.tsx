import { makeStyles, Theme } from '../../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingHorizontal: theme.spacing?.SPACING_20,
    paddingVertical: theme.spacing?.SPACING_15,
    borderColor: theme.colors?.grey5,
    borderTopWidth: theme.spacing?.SPACING_1,
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes?.FONT_14,
    color: theme.colors?.grey3,
  },
}));

export default useStyles;
