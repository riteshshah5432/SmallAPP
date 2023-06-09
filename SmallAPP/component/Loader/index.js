import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Constants } from '../../utils';
import Style from './style'

const Loader = (props) => {
    return (
        <View style={Style.container}>
            <ActivityIndicator size="large" color={Constants.colors.themeColor} />
        </View>
    );
};

export default Loader;