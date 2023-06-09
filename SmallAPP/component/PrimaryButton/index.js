import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Constants } from '../../utils'
import Text from '../Text'
import Style from './style'

const PrimaryButton = (props) => {
    const {
        buttonStyle,
        buttonTitle,
        onPress,
        buttonTextColor = Constants.colors.white
    } = props;

    return (
        <TouchableOpacity style={[Style.container, buttonStyle]} onPress={onPress} {...props}>
            <Text
                title={buttonTitle}
                textColor={buttonTextColor}
                textStyle={Style.buttonText} />
        </TouchableOpacity>
    );
};

export default PrimaryButton;