import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const LedSensor = () => {
    function ledSensorPub() {
        alert('ok');
    }

    return(
        <View
            style={{
                flex:1, alignItems: 'center', justifyContent: 'center',
                backgroundColor: '#1E3269'
            }}
        >
            <TouchableOpacity onPress={ledSensorPub}>
                <Text style={{ color: COLORS.white, fontSize: SIZES.h2 }}>
                    LedSensor Component.
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LedSensor;
