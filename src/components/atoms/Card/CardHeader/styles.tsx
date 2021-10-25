import { makeStyles, Theme } from '../../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingHorizontal: theme.spacing?.SPACING_20,
    paddingVertical: theme.spacing?.SPACING_15,
    borderBottomWidth: 1,
    borderColor: theme.colors?.grey5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes?.FONT_20,
    color: theme.colors?.grey1,
  },
}));

export default useStyles;
