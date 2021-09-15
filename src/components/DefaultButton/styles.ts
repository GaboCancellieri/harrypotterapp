import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.griffindorYellow,
    justifyContent: 'center',
    height: 50,
    marginTop: 5,
    width: '80%',
  },
  primary: {
    backgroundColor: colors.griffindorYellow,
    borderColor: colors.griffindorYellow,
    borderRadius: 8,
    borderWidth: 1,
  },
  secondary: {
    backgroundColor: colors.griffindorRed,
    borderColor: colors.griffindorYellow,
    borderRadius: 8,
    borderWidth: 1,
  }
});

export default styles;
