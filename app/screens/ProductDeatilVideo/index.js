import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo, useEffect, useRef } from "react";
import { FlatList, View, TouchableOpacity, ScrollView, Dimensions, PixelRatio } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import YouTube from 'react-native-youtube';
import Svg, { Rect } from 'react-native-svg';


function renderFooter() {
    const { colors } = useTheme();
    return (
        <View style={{ width: "95%", flexDirection: 'row', height: 100, marginTop: 20, alignSelf: "center", borderTopEndRadius: 55, borderTopLeftRadius: 55, backgroundColor: "#E5EAED" }}>
            <Image source={Images.man} style={styles.manImage} resizeMode="contain" />
            <View style={{ width: '50%', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ marginTop: 10 }} headline bold blackColor>
                    SALES TRANSPORT
                </Text>
                <View style={{ width: "95%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                    <FontAwesome5 name="mobile-alt" color="black" size={25} />
                    <Text style={{ marginLeft: 10, fontSize: 18 }} blackColor>
                        +49 8331 15-341
                    </Text>
                </View>
            </View>

        </View>

        // <View style={{
        //   width: 300,
        //   height: 50,
        //   backgroundColor: "transparent",
        //   borderStyle: "solid",
        //   borderLeftWidth: 0,
        //   borderRightWidth: 100,
        //   borderBottomWidth: 50,
        //   borderLeftColor: "transparent",
        //   borderRightColor: "transparent",
        //   borderBottomColor: "red",
        // }}>


        // </View>
    )
}

export default function ProductDetailsList(props) {
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


    const [state, setState] = useState({
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: true,
        isLooping: true,
        duration: 0,
        currentTime: 0,
        fullscreen: false,
        playerWidth: Dimensions.get('window').width,
    })
    useEffect(() => {
        console.log({ xxx: params.item })
        setList(params.item)
      

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

    const filter = (text) => {
        setsearch(text);
        if (text) {

        } else {

        }
    };

    return (
        <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
            <Header
                style={{ backgroundColor: 'black' }}
                title=""
                renderLeft={() => {
                    return (
                        <View style={{ flexDirection: 'row', width: 100 }}>
                            <FontAwesome5 name="angle-double-left" color={"white"} size={25} />
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

                <View style={{ width: '100%', height: 350 }}>
                    <Image source={list.image} style={styles.banner} resizeMode="cover" />

                </View>
                <View style={{ width: '100%', marginTop: -2 }}>
                    {list.text.map((txt) => {
                        return (
                            <View style={{ width: '100%', flexDirection: 'row' }}>
                                <View style={{ width: "80%", backgroundColor: 'black', padding: 12, marginTop: 2 }}>
                                    <Text headline bold whiteColor>
                                        {txt}
                                    </Text>
                                </View>
                                <View style={{ width: "20%", backgroundColor: 'white', padding: 12, marginTop: 2, justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome5 name="angle-double-right" color={"black"} size={25} />
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                    <Text headline bold blackColor>
                        PRODUKTVIDEOS
                    </Text>
                    <Text blackColor>
                        VON A -Z
                    </Text>
                </View>
                <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                    <View style={{ width: '100%', backgroundColor:'black',height: 200 }}>

                      {list.videoId &&  <YouTube
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
                            onError={e => {
                                setState({ error: e.error });
                            }}
                            onReady={e => {
                                setState({ isReady: true });
                            }}
                            onChangeState={e => {
                                setState({ status: e.state });
                            }}
                            onChangeQuality={e => {
                                setState({ quality: e.quality });
                            }}
                            onChangeFullscreen={e => {
                                setState({ fullscreen: e.isFullscreen });
                            }}
                            onProgress={e => {
                                setState({ currentTime: e.currentTime });
                            }}
                        />}


                    </View>
                </View>
                {renderFooter()}
            </ScrollView>
        </SafeAreaView>
    );
};


