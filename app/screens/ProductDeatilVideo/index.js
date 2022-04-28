import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo, useEffect, useRef } from "react";
import { FlatList, View, TouchableOpacity, ScrollView, Dimensions, Linking, Platform, Alert } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
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
    const callNumber = phone => {
        console.log('callNumber ----> ', phone);
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
            phoneNumber = `telprompt:${phone}`;
        }
        else {
            phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
            .then(supported => {
                if (!supported) {
                    Alert.alert('Phone number is not available');
                } else {
                    return Linking.openURL(phoneNumber);
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <TouchableOpacity onPress={() => callNumber(contact.number)} style={{ width: "95%", flexDirection: 'row', height: 90, marginTop: 20, alignSelf: "center", borderTopEndRadius: 55, borderTopLeftRadius: 55, backgroundColor: "#E5EAED" }}>

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

export default function ProductDetailsList(props) {
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.application.contact);
    const { navigation } = props;
    const youTubeRef = useRef()
    const { params } = props.route
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [isRendered, setIsRendered] = useState(null)
    const [list, setList] = useState({
        image: '',
        text: [],
        videoId: null

    })
    const [linkList, setLinkList] = useState([])
    const [showLinkList, setShowLinkList] = useState(false)
    const [isServiceType, SetisServiceType] = useState(contact.type)
    const [playerHeight, setPlayerHeight] = useState(250)
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
        if (params) {
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

    const changeServiceType = () => {

        if (contact.name === "SALES TRANSPORT") {
            dispatch(ApplicationActions.onChangeContact({

                name: 'SERVICE TRANSPORT',
                number: '+49 8331 15-400',
                type: 'SERVICE TRANSPORT',

            }));
        }
        else if (contact.name === "SERVICE TRANSPORT") {
            dispatch(ApplicationActions.onChangeContact({
                name: 'SALES TRANSPORT',
                number: '+49 8331 15-341',
                type: 'SALES TRANSPORT',
            }));
        }
        else if (contact.name === "SALES AIRPORT") {
            dispatch(ApplicationActions.onChangeContact({
                name: 'SERVICE AIRPORT',
                number: '+49 8331 9629999',
                type: 'SERVICE AIRPORT',
            }));
        }
        else if (contact.name === "SERVICE AIRPORT") {
            dispatch(ApplicationActions.onChangeContact({
                name: 'SALES AIRPORT',
                number: '+49 8331 15-343',
                type: 'SALES AIRPORT',
            }));
        }
        setIsRendered(null)
        navigation.navigate("ProductDeatilVideoLink", { item: list.otherData, otherData: list })

    }

    useFocusEffect(() => {
        setTimeout(() => {
            setIsRendered(true)
        }, 100);
    }, [])
    const onPressRight = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Main" }]
        });
    }

    const getPdfLink = (txt) => {
        console.log({ txt })
        if (txt === 'PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H') {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/SPZ_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT SPZ-GP") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/SPZ_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »VENTUM«") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/SPZ_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/ARCUS-P-PK_DE-A4.pdf"
        }

        else if (txt == "PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-L_STZ-H_MPA_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-L_STZ-H_MPA_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT STZ-VL | STZ-VH") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-VL_STZ-VH_MPA-V_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »MPA« V") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-VL_STZ-VH_MPA-V_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT STZ-VP (245)") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-VP_245-285_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT STZ-VP (285)") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-VP_245-285_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT THP/ET") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT THP/UT") {
            return "http://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT THP/MT") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_DE-A4.pdf"
        }

        else if (txt == "PRODUKT PROSPEKT THP/SL-S") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/THP_SL-S_SL-L_SL_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT THP/SL-L") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/THP_SL-S_SL-L_SL_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT THP/SL") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/THP_SL-S_SL-L_SL_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT THP/SL") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/THP_SL-S_SL-L_SL_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »ADDRIVE«") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/ADDRIVE_PST-SL_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT PST/SL") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/ADDRIVE_PST-SL_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT PST/SL-E") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/PST-ES-E_PST-SL-E_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT PST/ES-E") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/PST-ES-E_PST-SL-E_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT FTV 550") {
            return "https://www.goldhofer.com/fileadmin/downloads/prospekte/FTV-550_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »FAKTOR« 5 | »FAKTOR« 5.5") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/Faktor5_Faktor5-5_DE-A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT RA 2") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/RA-2_RA-3_RA-4_DE.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT RA 3") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/RA-2_RA-3_RA-4_DE.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT RA 4") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/RA-2_RA-3_RA-4_DE.pdf"
        }
        // else if(txt=="QPRODUKT PROSPEKT »BLADEX«"){
        //     return "https://www.goldhofer.com/fileadmin//downloads/prospekte/RA-2_RA-3_RA-4_DE.pdf"
        // }
        else if (txt == "PRODUKT PROSPEKT »BLADES«") {
            return "https://www.goldhofer.com/fileadmin//downloads/prospekte/BladeS_DE-A4.pdf"
        }

        // else if(txt=="QUICKGUIDE ZUM STEPSTAR"){
        //     return "https://www.goldhofer.com/fileadmin//downloads/prospekte/BladeS_DE-A4.pdf"
        // }
        else if (txt == "PRODUKT PROSPEKT »SHERPA« D") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/SHERPA-FAMILY_DE-met_A4.pdf"
        }
        else if (txt == "DATENBLÄTTER »SHERPA« D") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_SHERPA-FAMILY_EN-met_A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »SHERPA« E") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/SHERPA-FAMILY_DE-met_A4.pdf"
        }
        else if (txt == "DATENBLÄTTER »SHERPA« E") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_SHERPA-E-FAMILY_EN-met_A4.pdf"
        }
        else if (txt == "E-MOBILITY PROSPEKT") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/E-MOBILITY_DE-met_A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »BISON« D FAMILIE") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/E-MOBILITY_DE-met_A4.pdf"
        }
        else if (txt == "DATENBLÄTTER »BISON« D FAMILIE") {
            setShowLinkList(!showLinkList)
            let arr = [
                "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D370_EN-met_A4.pdf",
                "http://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D620_EN-met_A4.pdf",
                "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D1000_EN-met_A4.pdf",
                "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D1500_EN-met_A4.pdf"
            ]
           
            setLinkList([...arr])
            return 'ss'
        }
        else if (txt == "PRODUKT PROSPEKT  »BISON« E FAMILIE") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/BISON-FAMILY_DE-met_A4.pdf"
        }
        else if (txt == "DATENBLÄTTER »BISON« E FAMILIE") {
            setShowLinkList(!showLinkList)
            let arr = [
                "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-E370_EN-met_A4.pdf",
                "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-E620_EN-met_A4.pdf",
                 
            ]
          
            setLinkList([...arr])
            return 'ss'
        }
        else if (txt == "PRODUKT PROSPEKT  »PHOENIX« AST-2P/X") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/PHOENIX-FAMILIE_DE-met_A4.pdf"
        }
        else if (txt == "DATENBLÄTTER »PHOENIX« AST-2P/X") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_PHOENIX_AST-2P-X_EN-met_A4.pdf"
        }
        else if (txt == "PRODUKT PROSPEKT »PHOENIX« AST-2E") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/AST-1X_DE-met_A4.pdf"
        }
        else if (txt == "DATENBLÄTTER »PHOENIX« AST-2E") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_PHOENIX_AST-2E_EN-met_A4.pdf"
        }

        else if (txt == "PRODUKT PROSPEKT AST-1X") {
            return " h>ps://www.goldhofer.com/fileadmin//downloads/airport_technology/AST-1X_DE-met_A4.pdf"
        }

        else if (txt == "DATENBLÄTTER AST-1X") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_AST-1X_EN-met_A4.pdf"
        }
        
        else if (txt == "PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/ARTS_DE-met_A4.pdf"
        }

        else if (txt == "PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/ARTS_DE-met_A4.pdf"
        }
    }
    const openPdf = (txt) => {
        let PDFLink = getPdfLink(txt)
        console.log({ PDFLink })
        if (PDFLink) {
            Linking.canOpenURL(PDFLink)
                .then(supported => {
                    if (!supported) {

                    } else {
                        return Linking.openURL(PDFLink);
                    }
                })
                .catch(err => console.log(err));
        }
        else {
            alert('PDF is not available');
        }


    }

    const openPdf2 = (link) => {
       
        
        if (link) {
            Linking.canOpenURL(link)
                .then(supported => {
                    if (!supported) {

                    } else {
                        return Linking.openURL(link);
                    }
                })
                .catch(err => console.log(err));
        }
        else {
            alert('PDF is not available');
        }


    }
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
                onPressRight={onPressRight}
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
                            <TouchableOpacity onPress={() => openPdf(txt)} key={i} style={{ width: '100%', flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                <View style={{ width: "90%", marginTop: 2 }}>
                                    <Text headline bold whiteColor>
                                        {txt}
                                    </Text>
                                </View>
                                <View style={{ width: "10%", }}>

                                    <ArrowPng />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                {showLinkList &&
                    <View style={{ width: '100%', marginTop: -2 }}>
                        {linkList.map((txt, i) => {
                            return (
                                <TouchableOpacity onPress={() => openPdf2(txt)} key={i} style={{ width: '100%', flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                    <Text headline bold whiteColor>
                                        Pdf Link {i + 1}
                                    </Text>


                                </TouchableOpacity>
                            )
                        })}
                    </View>}




                <View style={{ width: '95%', alignSelf: 'center', marginTop: 10 }}>
                    <Text headline bold blackColor>
                        {isServiceType === "SERVICE AIRPORT" ? "TRAININGSVIDEOS" : isServiceType === "SERVICE TRANSPORT" ? "TRAININGSVIDEOS" : "PRODUKTVIDEOS"}
                    </Text>
                    <Text blackColor>
                        VON A -Z
                    </Text>
                </View>



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
                        style={{ alignSelf: 'stretch', height: playerHeight, backgroundColor: 'black', marginVertical: 10 }}



                        onError={e => {

                            console.log({ onError: e.error })
                        }}
                        onReady={e => {
                            // setPlayerHeight(200)
                            console.log({ onReady: true })

                        }}
                        onChangeState={e => {

                            console.log({ onChangeState: e.state })

                        }}
                        onChangeQuality={e => {

                            console.log({ onChangeQuality: e.quality })

                        }}
                        onChangeFullscreen={e => {

                            console.log({ onChangeFullscreen: e.isFullscreen })

                        }}
                        onProgress={e => {
                            console.log({ onProgress: e.currentTime })

                        }}
                    />}





                <TouchableOpacity style={{ width: '95%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: "90%", marginTop: 2 }}>
                        <Text headline bold whiteColor>
                            {isServiceType === "SERVICE AIRPORT" ? "TECHNISCHE VIDEOS" : isServiceType === "SERVICE TRANSPORT" ? "TECHNISCHE VIDEOS" : "EINSATZ VIDEOS"}
                        </Text>
                    </View>
                    <View style={{ width: "10%", }}>

                        <ArrowPng />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => changeServiceType()} style={{ width: '100%', alignSelf: 'center', marginTop: 40, flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: "90%", marginTop: 2 }}>
                        <Text headline bold whiteColor>
                            {isServiceType === "SERVICE AIRPORT" ? "PRODUKTVIDEOS & MEHR" : isServiceType === "SERVICE TRANSPORT" ? "PRODUKTVIDEOS & MEHR" : " SERVICE VIDEOS & MEHR"}
                        </Text>
                    </View>
                    <View style={{ width: "10%", }}>

                        <ArrowPng />
                    </View>
                </TouchableOpacity>
                {renderFooter()}
            </ScrollView>
        </SafeAreaView >
    );
};


