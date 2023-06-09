import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.colors.white,
    },
    navLeftButton: {
        marginLeft: 20,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navLeftImage: {
        height: '80%',
        width: '80%',
        resizeMode: 'contain',
        tintColor: Constants.colors.themeColor
    },
    topView: {
        width: '100%',
        backgroundColor: Constants.colors.black_text,
        padding: 10
    },
    marginTop15: {
        marginTop: 15
    }
});