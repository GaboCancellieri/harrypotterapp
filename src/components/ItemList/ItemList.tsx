import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { Separator } from '..';
import { colors } from '../../utils/theme';
import Item from './Item';
import styles from './styles';

interface Props {
    items: any[],
    getItemsData: () => void,
    loading: boolean,
    isHorizontal: boolean,
    itemDetailScreen: string,
    itemResizeMode: 'contain' | 'cover',
    itemSize: 'regular' | 'small',
    filter?: string,
}

const flatlistKeyExtractor = (item: any) => `${item.id}`;

const ItemList = ({
    items,
    getItemsData,
    isHorizontal,
    itemDetailScreen,
    itemResizeMode,
    itemSize,
    loading,
  }: Props) => {
    return (
        <View style={{ alignItems: 'center', backgroundColor: colors.almostWhite, borderRadius: 30, paddingTop: 20, flex: 1, width: '100%', }} >
        <FlatList
                horizontal={isHorizontal}
                ItemSeparatorComponent={Separator}
                contentContainerStyle={styles.flatlistContent}
                style={styles.flatList}
                keyExtractor={flatlistKeyExtractor}
                refreshing={loading}
                onRefresh={getItemsData}
                data={items}
                renderItem={({ item }) =>
                    <Item id={item.id} text={item.name || item.title} 
                    imageURL={(item.book_covers) ? item.book_covers[0].URL : 
                    'https://fortheloveofharry.com/wp-content/uploads/2019/08/Chocolate-Frog-Box-New-Release-1.png'}
                    itemDetailScreen={itemDetailScreen}
                    resizeMode={itemResizeMode} 
                    size={itemSize} />
                }
                numColumns={(isHorizontal) ? 1 : 2}
                key={(isHorizontal) ? 1 : 2}
                columnWrapperStyle={(isHorizontal) ? null : styles.column}
            />
        </View>
    )
};

export default ItemList;
