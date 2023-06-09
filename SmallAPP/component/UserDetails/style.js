import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: Constants.colors.textinput_background,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
        flexDirection: 'row'
    },
    avatarImage: {
        height: 100,
        width: 100,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    infoView: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    statusView: {
        alignSelf: 'flex-start',
        padding: 6,
        borderRadius: 5,
        backgroundColor: 'red'
    }
});