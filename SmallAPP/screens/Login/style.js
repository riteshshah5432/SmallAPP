import {
    StyleSheet,
} from 'react-native';
import { Constants } from '../../utils'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Constants.colors.white
    },
    scrollView: {
        width: '100%'
    },
    scrollViewContainer: {
        alignItems: 'center'
    },
    topImage: {
        marginTop: '10%',
        height: 150,
        width: 150,
        resizeMode: 'contain'
    },
    titleText: {
        marginTop: 20,
        fontWeight: '500'
    },
    subText: {
        marginTop: 10,
        marginBottom: 20,
    },
    marginTop10: {
        marginTop: 10,
    }
});