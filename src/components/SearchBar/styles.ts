import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 43,
    marginTop: 5,
    width: '80%',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.griffindorYellow,
    borderWidth: 2,
    borderColor: colors.griffindorYellow,
    borderRadius: 10,
  },
  searchIcon: {
      padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: colors.griffindorYellow,
    color: colors.griffindorRed,
  },
});

export default styles;
