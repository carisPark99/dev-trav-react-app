import React from 'react';
import {
    View, Image, TouchableOpacity, Text, StyleSheet
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import {Dashboard, Place, SapreView, TestView, Chart, LedSensor} from '../screens';
import { COLORS, FONTS, icons } from '../constants';

const Tab = createBottomTabNavigator();

/**
 * @desc app 하단 tab bar 정의 func.
 * @returns {*}
 * @constructor
 */
const Tabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0, elevation: 0,
                    backgroundColor: COLORS.black,
                    borderTopColor: 'transparent',
                    height: 80
                }
            }}
        >
            <Tab.Screen
                name='Dashboard'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Image
                                source={icons.maps}
                                resizeMode='contain'
                                style={{
                                    width: 22, height: 22,
                                    tintColor: focused ? COLORS.blue : COLORS.gray
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={TestView}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.api}
                                resizeMode="contain"
                                style={{
                                    width: 22, height: 22,
                                    tintColor: focused ? COLORS.blue : COLORS.gray
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name='Calendar'
                component={Chart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Image
                                source={icons.calendar}
                                resizeMode='contain'
                                style={{
                                    width: 22, height: 22,
                                    tintColor: focused ? COLORS.blue : COLORS.gray
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Plane"
                component={LedSensor}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.plane}
                                resizeMode="contain"
                                style={{
                                    width: 22, height: 22,
                                    tintColor: focused ? COLORS.blue : COLORS.gray
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
