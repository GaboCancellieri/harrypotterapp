import React from 'react';
import { Image, View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { replaceRoute } from '../../navigation/controls';
import { colors } from '../../utils/theme';

// @ts-ignore
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={24} color={colors.griffindorYellow} variant='regular'>
        Harry Potter Wiki
      </Typography>
      <Separator size={15} />
      <View style={styles.horizontalContainer}>
        <Image
        resizeMode="contain"
        source={{ uri: 'https://1000marcas.net/wp-content/uploads/2020/02/Logo-Hogwarts.png' }}
        style={styles.image}
        />
      </View>
      <Separator size={15} />
      <DefaultButton text="Continue"
        textSize={16} 
        onPress={() => replaceRoute('TabNavigator')}
      />
    </View>
  );
};

export default WelcomeScreen;
