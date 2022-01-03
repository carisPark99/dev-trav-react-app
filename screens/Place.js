import React, {useState, useRef, useEffect} from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Animated, Platform,
} from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { HeaderBar, TextIconButton, Rating, TextButton } from '../components';
import SlidingUpPanel from 'rn-sliding-up-panel';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { MapStyle } from '../styles';

/**
 * @desc 상세 페이지 화면 정의 func.
 * @param navigation
 * @param route
 * @returns {JSX.Element}
 * @constructor
 */
const Place = ({navigation, route}) => {
    console.disableYellowBox = true;

    const [selectedPlace, setSelectedPlace] = React.useState(null);
    const [ selectedHotel, setSelectedHotel ] = React.useState(null);
    // const [ allowDragging, setAllowDragging ] = React.useState(true);

    // const _draggedValue = React.useRef(new Animated.Value(0)).current;
    let _panel = React.useRef(null);

    React.useEffect(() => {
        let {selectedPlace} = route.params;
        setSelectedPlace(selectedPlace);

        // _draggedValue.addListener((val) => {
        //     if (val.value > SIZES.height) {
        //         setAllowDragging(false);
        //     }
        // })
        // return () => {
        //     _draggedValue.removeAllListeners();
        // }
    }, []);

    function renderPlace() {
        return(
            <ImageBackground
                source={selectedPlace?.image}
                style={{ width: '100%', height: '100%' }}
                >
                <HeaderBar
                    titile=''
                    letOnPressed={()=> navigation.goBack()}
                    right={false}
                    containerStyle={{
                        marginTop: SIZES.padding * 2
                    }}
                />
                <View
                    style={{
                        flex:1,
                        paddingHorizontal: SIZES.padding,
                        justifyContent: 'flex-end',
                        marginBottom: 100
                    }}
                >
                    {/* 도시명 */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>{selectedPlace?.name}</Text>
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{selectedPlace?.rate}</Text>
                            <Image source={icons.star} style={{ width:15, height: 15, marginLeft: 5}} />
                        </View>
                    </View>

                    {/* 설명 */}
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.body3 }}>{selectedPlace?.description}</Text>

                    {/* 지역보기 버튼 */}
                    <TextIconButton
                        label='Book a flight'
                        icon={icons.aeroplane}
                        customContainerStyle={{
                            marginTop: SIZES.padding *2
                        }}
                        onPress={()=> alert('ok')}
                    />
                </View>

            </ImageBackground>
        )
    }

    function renderMap() {
        console.log('selectedHotel >>> ', selectedHotel);
        return(
            <SlidingUpPanel
                ref={ c => (_panel = c) }
                // allowDragging={allowDragging}
                draggableRange={{ top: SIZES.height+120, bottom: 120 }}
                // animatedValue={_draggedValue}
                showBackdrop={false}
                snappingPoints={SIZES.height+120}
                height={SIZES.height+120}
                friction={0.7}
                // onBackButtonPress={()=> {
                //     setAllowDragging(true)
                // }}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent'
                    }}
                >
                    {/* Panel Header */}
                    <View
                        style={{
                            height: 120,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={icons.up_arrow}
                            style={{
                                width: 20, height: 20,
                                tintColor: COLORS.white
                            }}
                        />
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>SWIPE FOR DETAILES</Text>
                    </View>

                    {/* Panel Detail */}
                    <View
                        style={{
                            flex:1,
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                         {/*google map */}
                        <MapView
                            style={{
                                width: '100%', height: '100%'
                            }}
                            customMapStyle={MapStyle}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={{ ...selectedPlace?.mapInitialRegion }}
                        >
                            {selectedPlace?.hotels.map((hotel, index) => (
                                <Marker
                                    key={index}
                                    coordinate={hotel.latlng}
                                    identifier={hotel.id}
                                    onPress={() => { setSelectedHotel(hotel) }}
                                >
                                    <Image
                                        source={selectedHotel?.id == hotel.id ? icons.bed_on : icons.bed_off}
                                        resizeMode='contain'
                                        style={{
                                            width: 50, height: 50
                                        }}
                                    />
                                </Marker>
                            ))}
                        </MapView>

                        {/* header */}
                        <HeaderBar
                            titile={selectedPlace?.name}
                            letOnPressed={() => _panel.hide()}
                            right={true}
                            containerStyle={{ position: 'absolute', top: SIZES.padding * 2 }}
                        />

                        {/* hotel details*/}
                        {selectedHotel &&
                        <View
                            style={{
                                position: 'absolute', bottom: 30,
                                left: 0, right: 0, padding: SIZES.radius
                            }}
                        >
                            <Text style={{color: COLORS.white, ...FONTS.h1}}>{selectedPlace?.name}</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginTop: SIZES.radius,
                                    padding: SIZES.radius,
                                    borderRadius: 15,
                                    backgroundColor: COLORS.transparentBlack1
                                }}
                            >
                                <Image
                                    source={selectedHotel?.image}
                                    resizeMode='cover'
                                    style={{width: 90, height: 120, borderRadius: 15}}
                                />
                                <View style={{flex: 1, marginLeft: SIZES.radius, justifyContent: 'center'}}>
                                    <Text
                                        style={{color: COLORS.white, ...FONTS.h3}}
                                    >{selectedHotel?.name}</Text>
                                    <Rating
                                        containerStyle={{marginTop: SIZES.base}}
                                        rate={selectedHotel?.rate}
                                    />
                                    <View
                                        style={{
                                            flexDirection: 'row', marginTop: SIZES.base
                                        }}
                                    >
                                        <TextButton
                                            label='Details'
                                            customContainerStyle={{
                                                marginTop: SIZES.base,
                                                width: 100, height: 45
                                            }}
                                            customLabelStyle={{...FONTS.h3}}
                                            onPress={() => console.log('text button click ok!')}
                                        />
                                        <View
                                            style={{
                                                flex: 1, alignItems: 'flex-end', justifyContent: 'center'
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: COLORS.lightGray,
                                                    ...FONTS.body5,
                                                    fontSize: Platform.OS === 'ios' ? SIZES.body4 : SIZES.body5
                                                }}
                                            >from ${selectedHotel?.price} / night</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        }
                    </View>
                </View>
            </SlidingUpPanel>
        )
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            {renderPlace()}
            {renderMap()}
        </View>
    )
}

export default Place;
