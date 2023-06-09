import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.colors.white
    },
    flatlist: {
        width: '100%',
    },
    separator: {
        height: 20,
        width: '100%'
    },
    cell: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center'
    },
    navLeftButton: {
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
    }
});