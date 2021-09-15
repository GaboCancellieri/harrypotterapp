import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  subContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 13,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingVertical: 10,
    width: '65%'
  },
  image: {
    minHeight: 60,
    width: DEVICE_WIDTH * 0.2,
  },
});

export default styles;
