import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/theme';

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    marginHorizontal: 10,
    maxWidth: 164,
    borderRadius: 30,
    
},
listItemContainerShadow: {
    elevation: 11,
},
  image: {
    width: 164,
    height: 164,
    borderRadius: 30,
   },
   imageSmall: {
    borderRadius: 30,
    height: 91,
    width: 91
  },
   column: {
    flexShrink: 1,
  },
  listItemContainerSmall: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    marginHorizontal: 10,
    maxWidth: 95,
    borderRadius: 30,
    
  },
});

export default styles;
