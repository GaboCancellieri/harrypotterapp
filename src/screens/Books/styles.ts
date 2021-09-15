import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../../utils/dimensions';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    flex: 1,
    fontFamily: 'harrypotter',
    justifyContent: 'center',
    width: '100%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    minHeight: 160,
    width: DEVICE_WIDTH * 0.6,
   },
});

export default styles;
