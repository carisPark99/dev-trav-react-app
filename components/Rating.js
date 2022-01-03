import React from 'react';
import { View, Image } from 'react-native';
import { icons } from '../constants';


/**
 * @desc 지도 하단 세부 항목 별점 표기 func.
 * @param containerStyle
 * @param rate
 * @returns {JSX.Element}
 * @constructor
 */
const Rating = ({ containerStyle, rate }) => {

    const starComponents = [];
    for (var i=0; i < rate; i++) {
        starComponents.push(
            <Image
                source={icons.star}
                key={`full-${i}`}
                resizeMode='cover'
                style={{
                    marginLeft: i == 0 ? 0 : 5,
                    width: 15, height: 15
                }}
            />
        )
    }

    return(
        <View style={{ flexDirection: 'row', ...containerStyle }}>
            {starComponents}
        </View>
    )
}

export default Rating;
