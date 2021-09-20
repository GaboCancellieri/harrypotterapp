import { StyleSheet } from 'react-native';
import { colors } from '../../utils/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    flex: 1,
    fontFamily: 'harrypotter',
    width: '100%',
  },
  titleContent: {
    alignItems: 'center',
    backgroundColor: colors.griffindorYellow,
    borderRadius: 30,
    height: 109,
    justifyContent: 'center',
    padding: 20,
    top: 10,
    width: '90%',
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxHeight: 400,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  bookCover: {
    alignItems: 'center',
    width: '50%',
  },
  bookDetail: {
    paddingTop: 10,
    width: '50%',
  },
  image: {
    borderRadius: 30,
    height: 278,
    width: 178
  },
  imageBooks: {
    borderRadius: 30,
    height: 91,
    width: 91
  },
  sinopsisContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    marginHorizontal: 20,
    padding: 20,
  },
  otherBooksContainer: {
    marginHorizontal: 20,
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
    maxWidth: 95,
    borderRadius: 30,
    
  },
  listItemContainerShadow: {
    elevation: 11,
  },
});

export default styles;
