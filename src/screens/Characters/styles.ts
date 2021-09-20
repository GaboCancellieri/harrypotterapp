import { StyleSheet } from 'react-native';
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
  flatList: {
    flex: 1,
    width: '100%'
  },
  flatlistContent: {
      alignItems: 'center',
      paddingHorizontal: 20 
  },
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
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: 164,
    height: 164,
    borderRadius: 30,
   },
   column: {
    flexShrink: 1,
  },
});

export default styles;
