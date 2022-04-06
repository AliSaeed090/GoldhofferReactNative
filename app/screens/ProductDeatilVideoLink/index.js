import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo, useEffect, useRef } from "react";
import { FlatList, View, TouchableOpacity, ScrollView, Dimensions, Linking } from "react-native";
import { useTranslation } from "react-i18next";
 
import YouTube from 'react-native-youtube';
import { useDispatch } from "react-redux";
import { ApplicationActions } from "@actions";

import { useFocusEffect } from '@react-navigation/native';

import { useSelector } from "react-redux";
const ArrowPng = () => {
    return (
        <Image source={Images.arrows} style={{ width: 30, height: 30 }} resizeMode="contain" />
    );
}
const BackArrowPng = () => {
    return (
        <Image source={Images.backArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
    );
}
function renderFooter() {
    const contact = useSelector((state) => state.application.contact);
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={() => Linking.openURL("https://www.goldhofer.com/en/contact")} style={{ width: "95%", flexDirection: 'row', height: 90, marginTop: 20, alignSelf: "center", borderTopEndRadius: 55, borderTopLeftRadius: 55, backgroundColor: "#E5EAED" }}>

            <View style={{ borderTopLeftRadius: 55, backgroundColor: 'black', width: 100, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Images.G} style={styles.manImage} resizeMode="contain" />

            </View>
            <View style={{ width: '50%', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ marginTop: 10 }} headline bold blackColor>
                    {contact.name}
                </Text>
                <View style={{ width: "95%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>

                    <Text style={{ marginLeft: 10, fontSize: 18 }} blackColor>
                        {contact.number}
                    </Text>
                </View>
            </View>

        </TouchableOpacity>

         
    )
}

export default function ProductDeatilVideoLink(props) {
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.application.contact);
    const [isRendered, setIsRendered] = useState(null)

    const { navigation } = props;
    const youTubeRef = useRef()
    const { params } = props.route
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [isTransportActive, setTransPortActive] = useState(null)
    const [list, setList] = useState({
        image: '',
        text: [],

    })
    const [isServiceType, SetisServiceType] = useState(contact.type)

    const [state, setState] = useState({
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: false,
        isLooping: true,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        playerWidth: Dimensions.get('window').width,
    })
    useEffect(() => {
        console.log({ xxx: params.item })

        if(params){
            setList(params.item)
        }
    


    }, [params])

    useEffect(() => {

        fetch(
            "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLfvaFAgzJJDi_Ou0GOaiLftS7MK-hvMDv&key=AIzaSyCCuJKVuq5JX7bAzLERMJ0ctHRM_iuqFJA")
            .then((res) => res.json())
            .then((json) => {
                console.log({ json })
                setVideosList(json.items)
            })
    }, [])
    const [VideosList, setVideosList] = useState([]);

 const changeServiceType=()=>{
    if (contact.name === "SALES TRANSPORT") {
        dispatch(ApplicationActions.onChangeContact({

            name: 'SERVICE TRANSPORT',
            number: '+49 8331 15-400',
            type: 'SERVICE'

        }));
    }
    else if (contact.name === "SERVICE TRANSPORT") {
        dispatch(ApplicationActions.onChangeContact({
            name: 'SALES TRANSPORT',
            number: '+49 8331 15-341',
            type: 'SALES'
        }));
    }
    else if (contact.name === "SALES AIRPORT") {
        dispatch(ApplicationActions.onChangeContact({
            name: 'SERVICE AIRPORT',
            number: '+49 8331 9629999',
            type: 'SERVICE'
        }));
    }
    else if (contact.name === "SERVICE AIRPORT") {
        dispatch(ApplicationActions.onChangeContact({
            name: 'SALES AIRPORT',
            number: '+49 8331 15-343',
            type: 'SALES'
        }));
    }

    navigation.goBack();
 }
 useFocusEffect(() => {
    setTimeout(() => {
        setIsRendered(true)
    }, 100);
}, [])
    return (
        <SafeAreaView style={{ ...BaseStyle.safeAreaView, backgroundColor: '#D2D9DE' }} edges={['right', 'top', 'left']}>
            <Header
                style={{ backgroundColor: 'black' }}
                title=""
                renderLeft={() => {
                    return (
                        <View style={{ flexDirection: 'row', width: 100, justifyContent: 'center', alignItems: 'center' }}>
                            {/* <FontAwesome5 name="angle-double-left" color={"white"} size={25} /> */}
                            <BackArrowPng />
                            <Text style={{ marginLeft: 10 }} headline bold whiteColor>
                                ZURÜCK
                            </Text>
                        </View>

                    );
                }}

                renderRight={() => {
                    return (
                        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
                    );
                }}

                onPressLeft={() => {
                    navigation.goBack();
                }}

            />
            <ScrollView>

                <View style={{ width: '100%', height: 350, backgroundColor: '#D2D9DE' }}>
                    <Image source={list.image} style={styles.banner} resizeMode="cover" />

                </View>
                <View style={{ width: '100%', marginTop: -2 }}>
                    {list.text.map((txt, i) => {
                        return (
                            <View key={i} style={{ width: '100%', flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                <View style={{ width: "90%", marginTop: 2 }}>
                                    <Text headline bold whiteColor>
                                        {txt}
                                    </Text>
                                </View>
                                <View style={{ width: "10%", }}>

                                    <ArrowPng />
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                    <Text headline bold blackColor>
                        
                        { isServiceType ==="SERVICE"?  "TRAININGSVIDEOS" :  "PRODUKTVIDEOS"}
                    </Text>
                    <Text blackColor>
                        VON A -Z
                    </Text>
                </View>
                <View style={{ width: '95%', alignSelf: 'center', marginTop: 10, height: 200 }}>
                    <View style={{ width: '100%', backgroundColor: 'black', height: 200 }}>

                    {isRendered &&
                        
                        <YouTube
                            // AIzaSyADirxd-_5JqMTKVqA-2ECnq1TfcxksH7I

                            // ref={youTubeRef}
                            // You must have an API Key for the player to load in Android
                            apiKey="AIzaSyCCuJKVuq5JX7bAzLERMJ0ctHRM_iuqFJA"
                            // Un-comment one of videoId / videoIds / playlist.
                            // You can also edit these props while Hot-Loading in development mode to see how
                            // it affects the loaded native module
                            videoId={list.videoId}
                            // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
                            // playlistId="PLfvaFAgzJJDgBIpMqcqolowsZf9y5hmId"
                            play={state.isPlaying}
                            loop={state.isLooping}
                            fullscreen={state.fullscreen}
                            controls={1}
                            style={[
                                { height: 200 },
                                styles.player,
                            ]}
                        // onError={e => {
                        //     setState(prvState=>({...prvState, error: e.error}));
                        // }}
                        // onReady={e => {
                        //     setState(prvState=>({...prvState, isReady: true}));

                        // }}
                        // onChangeState={e => {
                        //     setState(prvState=>({...prvState,status: e.state}));

                        // }}
                        // onChangeQuality={e => {
                        //     setState(prvState=>({...prvState,quality: e.quality }));

                        // }}
                        // onChangeFullscreen={e => {
                        //     setState(prvState=>({...prvState,fullscreen: e.isFullscreen }));

                        // }}
                        // onProgress={e => {
                        //     setState(prvState=>({...prvState,currentTime: e.currentTime }));

                        // }}
                        />}


                    </View>

                </View>
                <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: "90%", marginTop: 2 }}>
                        <Text headline bold whiteColor>
                        { isServiceType ==="SERVICE"?    "TECHNISCHE VIDEOS" :   "EINSATZ VIDEOS"}
                        </Text>
                    </View>
                    <View style={{ width: "10%", }}>

                        <ArrowPng />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>changeServiceType()} style={{ width: '100%', alignSelf: 'center', marginTop: 40, flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: "90%", marginTop: 2 }}>
                        <Text headline bold whiteColor>
                        { isServiceType ==="SERVICE"?  "PRODUKTVIDEOS & MEHR" :  " SERVICE VIDEOS & MEHR"}
                        </Text>
                    </View>
                    <View style={{ width: "10%", }}>

                        <ArrowPng />
                    </View>
                </TouchableOpacity>
                {renderFooter()}
            </ScrollView>
        </SafeAreaView>
    );
};


