import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
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
    column: {
        flexShrink: 1,
    },
});

export default styles;
