import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';

const HeaderBar = ({titile, letOnPressed, right, containerStyle}) => {
    return(
        <View
            style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                ...containerStyle
            }}
        >
            {/* 뒤로가기 버튼 이벤트.*/}
            <View style={{ alignItems: 'flex-start' }}>
                <TouchableOpacity
                    style={{
                        alignItems: 'center', justifyContent: 'center',
                        width: 50, height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.transparentBlack
                    }}
                    onPress={letOnPressed}
                >
                    <Image
                        source={icons.left_arrow}
                        resizeMode='contain'
                        style={{
                            width: 20, height: 20,
                            tintColor: COLORS.white
                        }}
                    />
                </TouchableOpacity>
            </View>

            {/* 타이틀 */}
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{titile}</Text>
            </View>

            {/* 셋팅 */}
            <TouchableOpacity
                style={{
                    width: 50, height: 50,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: right ? COLORS.transparentBlack : null
                }}
            >
                {right &&
                    <Image
                        source={icons.settings}
                        style={{
                            width: 20, height: 20,
                            tintColor: COLORS.white
                        }}
                    />
                }
            </TouchableOpacity>

        </View>
    )
}

export default HeaderBar;
