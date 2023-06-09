import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    input: {
        height: 50,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Constants.colors.textinput_background
    },
    errorText: {
        marginTop: 5
    }
});