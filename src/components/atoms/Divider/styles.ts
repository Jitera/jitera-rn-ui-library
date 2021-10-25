import { makeStyles, Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    marginVertical: theme.spacing?.SPACING_10,
  },
  lineContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  contentWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentContainer: {
    paddingHorizontal: theme.spacing?.SPACING_4,
    backgroundColor: theme.colors?.white,
  },
  text: {
    paddingHorizontal: theme.spacing?.SPACING_4,
    backgroundColor: theme.colors?.white,
    color: theme.colors?.greyOutline,
  },
  line: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: theme.colors?.greyOutline,
  },
}));

export default useStyles;
