import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.colors.white
    },
    centerView: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonStyle: {
        marginTop: 20,
        alignSelf: 'center'
    },
    marginTop10: {
        marginTop: 10,
    }
});