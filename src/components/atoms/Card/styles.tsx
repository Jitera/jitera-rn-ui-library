import { makeStyles, Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderColor: theme.colors?.grey5,
    backgroundColor: theme.colors?.white,
    borderTopWidth: theme.spacing?.SPACING_1,
    borderBottomWidth: theme.spacing?.SPACING_1,
  },
  content: {
    padding: theme.spacing?.SPACING_20,
  },
}));

export default useStyles;
