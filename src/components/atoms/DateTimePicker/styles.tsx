import { makeStyles, Theme } from '../../../theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
  },
  iconStyle: {
    color: theme?.colors?.grey5,
  },
  iconContainer: {
    position: 'absolute',
    right: theme?.spacing?.SPACING_10,
  },
  dateInput: {
    borderRadius: theme?.spacing?.SPACING_5,
    fontSize: theme?.fontSizes?.FONT_18,
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: theme?.colors?.grey5,
    minHeight: theme?.spacing?.SPACING_50,
    paddingHorizontal: theme?.spacing?.SPACING_10,
    paddingRight: theme?.spacing?.SPACING_30,
  },
  placeholderText: {
    fontSize: theme?.fontSizes?.FONT_16,
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: undefined,
    bottom: 0,
    backgroundColor: theme?.colors?.white,
    borderTopLeftRadius: theme?.spacing?.SPACING_8,
    borderTopRightRadius: theme?.spacing?.SPACING_8,
  },
  modalActionContainer: {
    paddingVertical: theme?.spacing?.SPACING_15,
    paddingHorizontal: theme?.spacing?.SPACING_15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    fontSize: theme?.fontSizes?.FONT_15,
  },
  confirmButton: {
    fontSize: theme?.fontSizes?.FONT_15,
    color: theme?.colors?.success,
  },
}));

export default useStyles;
