import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        height: 50,
        width: '90%',
        borderRadius: 10,
        backgroundColor: Constants.colors.themeColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontWeight: 'bold'
    }
});