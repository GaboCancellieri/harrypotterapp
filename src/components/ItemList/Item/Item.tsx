import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Separator, Typography } from '../..';
import { goToScreen } from '../../../navigation/controls';
import styles from './styles';

interface Props {
    id: number,
    text: string,
    imageURL: string,
    size: 'regular' | 'small',
    itemDetailScreen: string,
    resizeMode: 'contain' | 'cover',
  }

const Item = ({
    id,
    text,
    imageURL,
    size,
    itemDetailScreen,
    resizeMode,
  }: Props) => {
    let imageStyle = styles.image;
    let textSize = 14;
    let listItemContainerStyle = styles.listItemContainer;
    if (size === 'small') {
        imageStyle = styles.imageSmall;
        textSize = 8;
        listItemContainerStyle = styles.listItemContainerSmall;
    }
    return (
        <>
            <TouchableOpacity 
            onPress={() => goToScreen(itemDetailScreen, { id, title: text })}
            style={styles.listItemContainerShadow}>
            <View style={listItemContainerStyle}>
                <Image resizeMode={resizeMode}
                    style={imageStyle} 
                    source={{uri: imageURL}}
                />
                <Separator size={10} />
                <Typography numberOfLines={2} size={textSize} align='center'>{text}</Typography>
                <Separator size={10} />
            </View>
            </TouchableOpacity>
        </>
    )
};

export default Item;
