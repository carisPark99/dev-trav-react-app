import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';

/**
 *
 * @returns {*}
 * @constructor
 */
const TextIconButton = ({label, icon, customContainerStyle, customLabelStyle, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...customContainerStyle
            }}
            onPress={onPress}
        >
            <Text style={{ marginRight: SIZES.base, ...FONTS.h2, ...customLabelStyle }}>{label}</Text>
            <Image source={icon} style={{ width: 20, height: 20 }}/>
        </TouchableOpacity>
    )
}

export default TextIconButton;
