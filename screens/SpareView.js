import React from 'react';
import { View, Text } from 'react-native';
import {COLORS, FONTS} from '../constants';


/**
 * @desc 작성 예정 func.
 * @returns {JSX.Element}
 * @constructor
 */
const SapreView = () => {
    return(
        <View style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.black
        }}>
            <Text style={{
                ...FONTS.h3,
                color: COLORS.white
            }}>Spare Page View Component.</Text>
        </View>
    )
}

export default SapreView;
