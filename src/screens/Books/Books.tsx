import React from 'react';
import { Image, View } from 'react-native';

import { DefaultButton, Header, Separator, Typography } from '../../components';
import styles from './styles';

import { replaceRoute } from '../../navigation/controls';
import { colors } from '../../utils/theme';

// @ts-ignore
const BooksScreen = ({ navigation }) => {
  const title = 'Books';
  return (
    <>
    <Header title={title} />
    <View style={styles.mainContainer}>
      <Typography size={24} color={colors.griffindorYellow} variant='regular'>
        Books
      </Typography>
    </View>
    </>
  );
};

export default BooksScreen;
