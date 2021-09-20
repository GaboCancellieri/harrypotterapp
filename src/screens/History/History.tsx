import React from 'react';
import { View } from 'react-native';

import { Header, Separator, Typography } from '../../components';
import styles from './styles';
import { colors } from '../../utils/theme';

// @ts-ignore
const HistoryScreen = ({ navigation }) => {
    return (
      <>
      <Header title='Characters' isImageHeader={true} />
      <Separator size={15} />
      <View style={styles.mainContainer}>
        <Separator size={15} />
        <Typography size={25} color={colors.griffindorRed} variant='bold' weight='700'>
          HISTORY
        </Typography>
        <Separator size={15} />
      </View>
      </>
    );
};

export default HistoryScreen;
