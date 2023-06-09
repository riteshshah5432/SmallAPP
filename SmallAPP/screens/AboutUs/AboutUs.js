/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import { Constants, Images } from '../../utils';
import Text from '../../component/Text'
import Style from './style'

const AboutUs = (props) => {
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
            <View style={Style.topView}>
                <Text
                    title='5+ Years Experience'
                    textColor={Constants.colors.white}
                    textSize={Constants.textSize.xl}
                />
                <View style={Style.marginTop15} />
                <Text
                    title={'Vision\nTo become a world-class technology company that innovates to inspire creative and intelligent people'}
                    textColor={Constants.colors.white}
                    textSize={Constants.textSize.lg}
                />
                <View style={Style.marginTop15} />
                <Text
                    title={'Mission\nTo give the best products and services by providing innovative solutions'}
                    textColor={Constants.colors.white}
                    textSize={Constants.textSize.lg}
                />
            </View>
            <Text
                title={'Who We Are?'}
                textSize={Constants.textSize.xl}
                textStyle={{ marginLeft: 10, marginTop: 10 }}
            />
            <Text
                title={'To each client whom we pledge our services, we introduce and acquaint them with the new dimension of the digital lifestyle. Curating the ideal blend of design and strategy is our core strength.\n\nOur 5+ years of experience in the industry and our results-oriented approach has never failed us in delivering pure satisfaction to our clients.\n\nAnd depending on the requirements, we change our gears and fill up various places and positions.Be it a small startup or a giant conglomerate, we take equal pride in providing lasting digital experiences to all through our diligent web development services.'}
                textSize={Constants.textSize.lg}
                textStyle={{ marginLeft: 10, marginTop: 10 }}
            />
        </View>
    );
}

export default AboutUs;
