import { StyleSheet } from "react-native";
import { IS_ANDROID } from "../../utils/constants";

const styles = StyleSheet.create({
    image: {
        minHeight: 70,
        width: '100%',
    },
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        height: IS_ANDROID ? 60 : 50,
    },
    sideButtonContainer: {
        height: 40,
        width: 40,
    },
    titleContainer: {
        alignItems: 'center',
        flex: 1,
    }
});

export default styles;