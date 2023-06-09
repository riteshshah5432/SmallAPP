import React from 'react';
import { Text } from 'react-native';
import { Constants } from '../../utils'

const CustomText = (props) => {
    const {
        title,
        textSize = Constants.textSize.lg,
        textColor = Constants.colors.black_text,
        textStyle,
    } = props;

    return (
        <Text
            style={[
                {
                    fontSize: textSize,
                    color: textColor,
                },
                textStyle,
            ]}
            {...props}
        >
            {title}
        </Text>
    );
};

export default CustomText;