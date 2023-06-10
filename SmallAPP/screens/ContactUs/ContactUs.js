/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import { Constants, Images } from '../../utils';
import Text from '../../component/Text'
import Style from './style'

const ContactUs = (props) => {

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {
                return (
                    <TouchableOpacity style={Style.navLeftButton} onPress={() => { props.navigation.openDrawer() }}>
                        <Image source={Images.sideMenu} style={Style.navLeftImage} />
                    </TouchableOpacity>
                )
            }
        })
    }, [])

    return (
        <View style={Style.container}>
            <Text
                title={"We're Here To Help 24/7 Support"}
                textStyle={Style.topText}
                textSize={Constants.textSize.xl}
            />
            <Text
                title={"Interested in outsourcing? Want to save on cost & resources? If yes, please fill in the form below and we will contact you within 24 hours. "}
                textStyle={Style.topText}
                textSize={Constants.textSize.lg}
            />
            <View style={Style.backView}>
                <Text
                    title={"Careers"}
                    textSize={Constants.textSize.xl}
                />
                <View style={Style.marginTop10} />
                <Text
                    title={"Recruiting"}
                    textSize={Constants.textSize.md}
                />
                <View style={Style.marginTop10} />
                <Text
                    title={"Email: test@mail.com"}
                    textSize={Constants.textSize.md}
                />
                <View style={Style.marginTop10} />
                <Text
                    title={"Phone: +91 1212121212"}
                    textSize={Constants.textSize.md}
                />
            </View>
            <View style={Style.backView}>
                <Text
                    title={"Sales"}
                    textSize={Constants.textSize.xl}
                />
                <View style={Style.marginTop10} />
                <Text
                    title={"Business Development"}
                    textSize={Constants.textSize.md}
                />
                <View style={Style.marginTop10} />
                <Text
                    title={"Email: test@mail.com"}
                    textSize={Constants.textSize.md}
                />
                <View style={Style.marginTop10} />
                <Text
                    title={"Phone: +91 1212121212"}
                    textSize={Constants.textSize.md}
                />
            </View>
        </View>
    );
}

export default ContactUs;
