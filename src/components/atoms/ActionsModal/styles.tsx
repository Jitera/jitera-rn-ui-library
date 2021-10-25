import { Dimensions } from 'react-native';
import { makeStyles } from '../../../theme';
import { scale } from 'react-native-size-matters';

const useStyles = makeStyles(() => ({
  actionModalContainer: {
    width: Dimensions.get('screen').width,
    height: '100%',
    justifyContent: 'flex-end',
  },
  actionItem: {
    height: scale(57),
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 14,
    marginBottom: 10,
  },
  actionItemTop: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 0,
  },
  actionItemBottom: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  actionModalItemText: {
    color: '#EB5858',
    fontSize: 20,
  },
  divider: {
    marginHorizontal: 10,
    backgroundColor: '#C0C0C0',
    height: 1,
  },
  actionModalCancelText: {
    fontWeight: 'bold',
    color: '#007AFF',
    fontSize: 20,
  },
  modalWrapper: {
    width: Dimensions.get('screen').width - 48,
    marginHorizontal: 24,
    padding: 24,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    fontSize: 15,
    lineHeight: 22,
    marginVertical: 16,
  },
  cancel: {
    marginTop: 10,
    marginBottom: 32,
  },
}));

export default useStyles;
