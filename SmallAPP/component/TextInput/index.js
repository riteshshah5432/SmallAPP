import React from 'react';
import { TextInput, View } from 'react-native';
import { Constants } from '../../utils'
import Style from './style'
import Text from '../Text'

const CustomTextInput = (props) => {
    const {
        value,
        onChangeText,
        errorText
    } = props;

    return (
        <View style={Style.container}>
            <TextInput
                style={Style.input}
                onChangeText={onChangeText}
                value={value}
                {...props}
            />
            {errorText && (
                <Text
                    title={errorText}
                    textSize={Constants.textSize.sm}
                    textStyle={Style.errorText}
                    textColor={Constants.colors.error_text}
                />
            )}
        </View>
    );
};

export default CustomTextInput;