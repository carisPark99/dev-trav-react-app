import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image, TextInput, Platform, ActivityIndicator} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {TextButton} from '../components';
import axios from 'axios';


/**
 * @desc 작성 예정 func.
 * @returns {JSX.Element}
 * @constructor
 */
const SapreView = () => {

    const [ data, setData ] = React.useState([]);
    const [ sensorStat, setSensotStat ] = React.useState(false);

    // const url = 'http://192.168.0.54:8080/test6/'; //http://127.0.0.1:8080/test6/
    // const url = 'http://127.0.0.1:8000/dev/cwit/sensor/sub'; // aws lambda Url.
    const url = Platform.OS === 'android' ? 'http://127.0.0.1:8000/dev/cwit/sensor/sub'
        : 'http://localhost:8000/dev/cwit/sensor/sub'

    React.useEffect(() => {
        userData();
    }, []);

    function userData(event) {
        console.debug('##### requst getData #####');
        // axios({
        //     method: 'get',
        //     url: url,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        //     // data: JSON.stringify(bodyData)
        // })
        axios.post(url, {
            'ledon': event
        })
            .then(function (res) {
                console.log(res.data)
                setData(res.data.message);
                setSensotStat(true);
                if (data.length > 0) {alert('정상적으로 호출이 완료 되었습니다.')}
            })
            .catch(function (err) {
                console.error(err);
                setSensotStat(false);
                alert('서버 요청에 실패하였습니다. ', e);
            })
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2F4F4F',
        }}>
            <View
                style={{ marginBottom: 100 }}
            >
                <Text style={{
                    ...FONTS.h3,
                    color: COLORS.black
                }}>User Data Call API.
                </Text>
                <TouchableOpacity
                    style={{
                        height: 58,
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.blue,
                        marginTop: 20,
                    }}
                    onPress={() => userData(true)}
                >
                    <Image
                        source={icons.api}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginLeft: 30
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 58,
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: 'red',
                        marginTop: 20,
                    }}
                    onPress={() => userData(false)}
                >
                    <Image
                        source={icons.api}
                        resizeMode="contain"
                        style={{
                            width: 100,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // marginLeft: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SapreView;
