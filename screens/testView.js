import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Platform} from 'react-native';
import {SIZES, COLORS, icons} from '../constants';
import HeaderBar from '../components/HeaderBar';
import axios from 'axios';
import {setSelectedLog} from 'react-native/Libraries/LogBox/Data/LogBoxData';
import { SapreView, Loading } from '../screens';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const TestView = ({ navigation }) => {
    let _panel = React.useRef(null);

    const [ sensorData, setSensorData ] = React.useState([]);
    const [ isLoding, setIsLoging ] = React.useState(false);
    const [ sensorStat, setSensorStat ] = React.useState(true);
    const [ mainText, setMainText ] = React.useState("Please click the Here!");

    const sensorPubUrlPath = '/dev/cwit/sensor/led/sub';
    const shadowUpateUrlPath = '/dev/cwit/sensor/led/deviceShadowUpdate';

    const url = Platform.OS === 'android' ? 'http://127.0.0.1:8000' + shadowUpateUrlPath
        : 'http://localhost:8000' + shadowUpateUrlPath

    /**
     * @desc greengrassCore MQTT.
     */
    function send() {

        console.debug(`@@@ isLoding : ${isLoding}`);
        console.debug(`@@@ sensorStat : ${sensorStat}`);

        // if(sensorStat) {setSensorStat(false)} else if (!sensorStat) {setSensorStat(true)}
        setIsLoging(true);

        axios.post(url, {
            'ledon': !sensorStat
        })
            .then(function (res) {
                console.debug(res.data);
                console.debug(res.data.status.ledon);
                setSensorData(res.data);
                setSensorStat(res.data.status.ledon);
                setIsLoging(false);
                alert('정상적으로 데이터 요청이 완료 되었습니다.');
            })
            .catch(function (err) {
                setIsLoging(false);
                setSensorStat(sensorStat);
                alert('데이터 요청에 실패하였습니다.', err);
                return
            })
    }

    return(
        isLoding ? <Loading />
            :
            <View style={{
                flex:1, alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: sensorStat ? 'tomato' : '#1E3269'
            }}
            >
                <HeaderBar
                    titile={'dev-raspi-greengrassCore'}
                    letOnPressed={() => navigation.goBack()}
                    right={true}
                    containerStyle={{ position: 'absolute', top: SIZES.padding * 2 }}
                />
                <TouchableOpacity
                    onPress={send}
                >
                    <Text
                        style={{
                            fontSize: SIZES.h2,
                            color: sensorStat ? COLORS.black : COLORS.white
                        }}
                    >{mainText}
                    </Text>
                </TouchableOpacity>
            </View>
    )
}

export default TestView;
