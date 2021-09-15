import React from 'react';
import Separator from '../Separator';
import Typography from '../Typography';
import styles from './styles';
import { colors } from '../../utils/theme';

import { goBack } from '../../navigation/controls';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from '@material/react-material-icon';

interface Props {
    onPressBackButton?: () => void;
    onPressRightButton?: () => void;
    RightSideComponent?: React.FC;
    showBackButton?: boolean;
    title: string;
}

const Header = ({
    onPressBackButton,
    onPressRightButton,
    RightSideComponent,
    showBackButton,
    title,
}: Props) => {
    return (
        <>
        <SafeAreaView edges={['top']}>
            <View style={styles.mainContainer}>
                {
                    showBackButton ? (
                        <TouchableOpacity onPress={onPressBackButton} style={styles.sideButtonContainer}>
                            <MaterialIcon name="navigate-before" size={35} color={colors.black}/>
                        </TouchableOpacity>
                    ) : (
                        <Separator isHorizontal size={40}/>
                    )
                }
                <View style={styles.titleContainer}>
                    <Typography variant='bold' size={17} numberOfLines={2}>
                        {title}
                    </Typography>
                </View>
                {
                    RightSideComponent ? (
                        <TouchableOpacity onPress={onPressRightButton} style={styles.sideButtonContainer}>
                            <RightSideComponent/>
                        </TouchableOpacity>
                    ) : (
                        <Separator isHorizontal size={40}/>
                    )
                }
            </View>
        </SafeAreaView>
        </>
    )
}

Header.defaultProps = {
    onPressBackButton: goBack,
    onPressRightButton: () => {},
    showBackButton: true,
}

export default Header;