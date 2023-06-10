import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Constants.colors.white
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
    topText: {
        marginTop: 20,
        marginLeft: 20
    },
    backView: {
        padding: 10,
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: Constants.colors.textinput_background,
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
    },
    marginTop10: {
        marginTop: 10
    }
});