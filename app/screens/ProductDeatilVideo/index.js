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
    const [videoId, setvideoId] = useState(null)
    const [playListArr, setPlayListArr] = useState([])
    const [list, setList] = useState({
        image: '',
        text: [],
        videoId: null

    })
    const [linkList, setLinkList] = useState([])
    const [showLinkList, setShowLinkList] = useState(false)
    const [isServiceType, SetisServiceType] = useState("")
    const [txt, setText] = useState(undefined)
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
        console.log({ xxx: params.text, isServiceType: contact.name })

        if (params) {
            setText(params.text)
            setList(params.item)

            if (contact.name === "SERVICE AIRPORT") {
                const playListId = getPlaylistServiceVideoId(params.text)
                if (playListId) {
                    getVideo(playListId)
                }

            }
            else if (contact.name === "SALES AIRPORT") {
                const playListId = getPlaylistProductVideoId(params.text)
                if (playListId) {
                    getVideo(playListId)
                }
            }
            else if (contact.name === "SALES TRANSPORT") {
                const playListId = getPlaylistProductVideoId(params.text)
                if (playListId) {
                    getVideo(playListId)
                }
            }
            else if (contact.name === "SERVICE TRANSPORT") {
                const playListId = getPlaylistServiceVideoId(params.text)
                if (playListId) {
                    getVideo(playListId)
                }
            }




        }
        if (contact.type) {
            SetisServiceType(contact.type)
        }

    }, [params, contact])


    const getVideo = (id) => {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${id}&key=AIzaSyAfOlpt6icgYuSUVVu8yXR-TJVoQ16bC3A`
        // console.log({ url })
        fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${id}&key=AIzaSyAfOlpt6icgYuSUVVu8yXR-TJVoQ16bC3A`)
            .then((res) => res.json())
            .then((json) => {
                if (json.items && json.items.length > 0) {
                    // console.log({ json: json.items[0].snippet.resourceId.videoId , jsons:json})
                    setvideoId(json.items[0].snippet.resourceId.videoId)
                    let arr = json.items.map((data) => {
                        data["play"] = false

                        return data
                    })
                    setPlayListArr([...arr])

                }


            })
    }



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
        navigation.navigate("ProductDeatilVideoLink", { item: list.otherData, otherData: list, text: params.text })

    }

    useEffect(() => {

        return () => {
            setvideoId(null)
        }
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            setTimeout(() => {
                setIsRendered(true)
            }, 100);
        }, [])
    );

    const onPressRight = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Main" }]
        });
    }

    const getPdfLink = (txt) => {
        // console.log({ txt })
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

        else if (txt == "PRODUKT PROSPEKT STEPSTAR") {

            return "https://stepstar.goldhofer.com/fileadmin/STEPSTAR/05_Broschuere/STEPSTAR_NL_DE-A4_Paket2.pdf"
        }
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
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/BISON-FAMILY_DE-met_A4.pdf"

        }
        else if (txt == "DATENBLÄTTER »BISON« D FAMILIE") {
            setShowLinkList(!showLinkList)
            let arr = [
                { name: '»BISON« D 370', link: 'https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D370_EN-met_A4.pdf' },
                { name: '»BISON« D 620', link: 'https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D620_EN-met_A4.pdf' },
                { name: ' »BISON« D 1000', link: 'https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D1000_EN-met_A4.pdf' },
                { name: '»BISON« D 1500', link: 'https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-D1500_EN-met_A4.pdf' },
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
                { link: "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-E370_EN-met_A4.pdf", name: ': »BISON« E 370' },
                { link: "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_BISON-E620_EN-met_A4.pdf", name: '»BISON« E 620' }

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
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/PHOENIX-FAMILIE_DE-met_A4.pdf"

        }
        else if (txt == "DATENBLÄTTER »PHOENIX« AST-2E") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/DS_PHOENIX_AST-2E_EN-met_A4.pdf"
        }

        else if (txt == "PRODUKT PROSPEKT AST-1X") {
            return "https://www.goldhofer.com/fileadmin//downloads/airport_technology/AST-1X_DE-met_A4.pdf"

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
        else if (txt == "'QUICKGUIDE ZUM STEPSTAR") {

            return "https://www.goldhofer.com/fileadmin/downloads/prospekte/Quickguide_Stepstar_DE-EN.pdf"
        }

    }

    const openPdf = (txt) => {
        let PDFLink = getPdfLink(txt)
        // console.log({ PDFLink })
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


    const getPlaylistProductVideoId = (txt) => {
        // console.log({ txt })
        if (txt === 'SPZ-L | SPZ-GL | SPZ-H') {
            return "PLPP-gBF73hLPD9LtfobjLdAEcGJwIujnZ"
        }
        else if (txt == "SPZ-GP") {
            return "PLPP-gBF73hLPn2ihSCi09q9sirGB691Rn"


        }
        else if (txt == "»VENTUM«") {
            return "PLPP-gBF73hLNEn5y12OByzw5P3Wv733Yi"

        }
        else if (txt == "STEPSTAR") {

            return "PLPP-gBF73hLM8ISAtWciP6QoWoKZRJIuU"

        }

        else if (txt == "»ARCUS« P | »ARCUS« PK") {
            return "PLPP-gBF73hLMGGKk62KFWvTsPBzmIFn0T"

        }

        else if (txt == "STZ-L | STZ-H | »MPA«") {
            return "PLPP-gBF73hLOEIWZR1YGRwz4VKwUcRseY"

        }
        else if (txt == "STZ-L | »MPA« MIT RADMULDE") {
            return "PLPP-gBF73hLOEIWZR1YGRwz4VKwUcRseY"


        }
        else if (txt == "STZ-VL | STZ-VH") {
            return "PLPP-gBF73hLP2aLrwMBqlSrrKY4sR0o0z"

        }
        else if (txt == "»MPA« V") {
            return null
        }
        else if (txt == "STZ-VP (245)") {
            return null
        }
        else if (txt == "STZ-VP (285)") {
            return null
        }
        else if (txt == "THP/ET") {

            return "PLPP-gBF73hLOl_FFEBn7FPVPZFgfN1JzI"
        }
        else if (txt == "THP/UT") {
            return "PLPP-gBF73hLO1Vh237ETwyIaggnnqvXaM"
        }
        else if (txt == "THP/MT") {
            return "PLPP-gBF73hLNeRbjqYK4sKojfkM1a0sZJ"
        }

        else if (txt == "THP/SL-S") {

            return "PLPP-gBF73hLOACHMH2JEKWtygDkVbu-gz"
        }
        else if (txt == "THP/SL-L") {
            return "PLPP-gBF73hLMbGWcfuPY45wlvshSr3y02"
        }

        else if (txt == "THP/SL") {
            return "PLPP-gBF73hLMEpbX8bbCZ-P7wMlB8S7af"

        }
        else if (txt == "»ADDRIVE«") {

            return "PLPP-gBF73hLNYwwjcpe3KRTHqltrYIcos"
        }
        else if (txt == "PST/SL") {
            return "PLPP-gBF73hLMxhhcHDIfUoIcWRCNIA0t7"
        }
        else if (txt == "PST/SL-E") {
            return "PLPP-gBF73hLM8p6hxLqGXpZbHOc6vqTZU"
        }
        else if (txt == "PST/ES-E") {
            return "PLPP-gBF73hLOH4Y9FN78Cz7sG8J8zBk70"
        }
        else if (txt == "FTV 550") {
            return "PLPP-gBF73hLOJbyEwtCKwCly7dKAVDb5d"
        }
        else if (txt == "»FAKTOR« 5 | »FAKTOR« 5.5") {
            return "PLPP-gBF73hLPUjUrZiQdEKEi8Sxnjt0io"

        }
        else if (txt == "RA 2") {
            return "PLPP-gBF73hLO4sltdttNDDuGxdgiUpYZR"
        }
        else if (txt == "RA 3") {
            return "PLPP-gBF73hLOz4M4poYfrWLMqHDK6PqDj"
        }
        else if (txt == "RA 4") {
            return "PLPP-gBF73hLNKegUCMeILLMk9FmUeG6zo"
        }
        else if (txt == "»BLADES«") {
            return "PLPP-gBF73hLOnSblANOcUnSIYyys6k_T5"
        }
        else if (txt == "»BLADEX«") {
            return "PLPP-gBF73hLN_h7mYbLc--B4wk0yoX0z6"
        }
        else if (txt == "»SHERPA« D") {
            return "PLPB7BeGg23Sod6ZCymIRXbPbQ7dhQ1XvI"
        }

        else if (txt == "»SHERPA« E") {
            return "PLPB7BeGg23Sod6ZCymIRXbPbQ7dhQ1XvI"
        }

        else if (txt == "»BISON« D FAMILIE") {
            return "PLPB7BeGg23SovWix2nfV01H_pWzftVBrs"
        }

        else if (txt == "»BISON« E FAMILIE") {
            return "PLPB7BeGg23SovWix2nfV01H_pWzftVBrs"
        }

        else if (txt == "»PHOENIX« AST-2P/X") {
            return "PLPB7BeGg23SpGnrDQfRPu-7EoH1__451w"
        }

        else if (txt == "»PHOENIX« AST-2E") {
            return "PLPB7BeGg23Sr2Kv8bpN-zWRdvJqqIBoSI"

        }

        else if (txt == "AST-1X") {
            return "PLPB7BeGg23Sr4YjBaN5DDwFAco9B8gtFi"
        }

        else if (txt == "DOLLIES KLEINE SCHÄDEN") {
            return null
        }
        else if (txt == "KOMBINATIONSSYSTEME GROSSE SCHÄDEN") {
            return null
        }


    }
    const getPlaylistServiceVideoId = (txt) => {
        // console.log({ txt })
        if (txt === 'SPZ-L | SPZ-GL | SPZ-H') {
            return "PLPP-gBF73hLMy-EbARpkRE6htTOYvpxCj"

        }
        else if (txt == "SPZ-GP") {
            return "PLPP-gBF73hLNevJnEECS7KL70mhl0-I7f"

        }
        else if (txt == "»VENTUM«") {
            return "PLPP-gBF73hLNhPWANb0VK2PHGlQAScHPY"
        }
        else if (txt == "STEPSTAR") {
            return "PLPP-gBF73hLNGQ6CJCjOJQ2QNaw9g13fW"

        }

        else if (txt == "»ARCUS« P | »ARCUS« PK") {
            return "PLPP-gBF73hLMMhPyKbKQ-EX9OreMor3FY"

        }

        else if (txt == "STZ-L | STZ-H | »MPA«") {
            return "PLPP-gBF73hLMY5mVFN7Xmbv-V5sFwDsDK"

        }
        else if (txt == "STZ-L | »MPA« MIT RADMULDE") {
            return "PLPP-gBF73hLNkudzg1wSBxOeCCMK9Aj2n"
        }
        else if (txt == "STZ-VL | STZ-VH") {
            return "PLPP-gBF73hLNiZxE1m98oVApEccUnlJcw"


        }
        else if (txt == "»MPA« V") {
            return null
        }
        else if (txt == "STZ-VP (245)") {
            return null
        }
        else if (txt == "STZ-VP (285)") {
            return null
        }
        else if (txt == "THP/ET") {
            return "PLPP-gBF73hLNZK6-GPdyPZr-TmKL2YNvw"

        }
        else if (txt == "THP/UT") {
            return "PLPP-gBF73hLPIrKho3UMA7ayQxw_AluYP"

        }
        else if (txt == "THP/MT") {
            return "PLPP-gBF73hLO4Pi-7kRSLE4C9pxsg_edH"
        }

        else if (txt == "THP/SL-S") {
            return "PLPP-gBF73hLM4yY6IGQg5XcH0xCRRq5sP"
        }
        else if (txt == "THP/SL-L") {
            return "PLPP-gBF73hLNria-9eAVB9i9WrQwE9M6t"
        }

        else if (txt == "THP/SL") {
            return "PLPP-gBF73hLOi7M_n8QtmIYyfFj5LRztO"

        }
        else if (txt == "»ADDRIVE«") {

            return "PLPP-gBF73hLOZdZ2S2RVUsyHhApi0VcfH"
        }
        else if (txt == "PST/SL") {
            return "PLPP-gBF73hLPJUYT1lXVDmlLOnuilUYVs"

        }
        else if (txt == "PST/SL-E") {
            return "PLPP-gBF73hLObmLPm4EBShLVwFE_ilYr9"
        }
        else if (txt == "PST/ES-E") {
            return "PLPP-gBF73hLNyfQ6GXYLVpWeC-oiD2fZL"

        }
        else if (txt == "FTV 550") {
            return "PLPP-gBF73hLMXROTaliN1-zA99Uds1rcn"

        }
        else if (txt == "»FAKTOR« 5 | »FAKTOR« 5.5") {
            return "PLPP-gBF73hLOd00d2FGTocoe3XdkcA2bH"

        }
        else if (txt == "RA 2") {
            return "PLPP-gBF73hLOxkk77DOf_8v56S8Z1FsPQ"
        }
        else if (txt == "RA 3") {
            return "PLPP-gBF73hLNQllxr5uBZIZOs2xFOZyJa"
        }
        else if (txt == "RA 4") {
            return "PLPP-gBF73hLN31psDymSQn34wQmOXw7SV"
        }
        else if (txt == "»BLADES«") {
            return "PLPP-gBF73hLOOWDAcUKXAypiwOf4jLrvB"
        }
        else if (txt == "»BLADEX«") {
            return "PLPP-gBF73hLOQYe7hqocKCkYEx30LLfyG"
        }
        else if (txt == "»SHERPA« D") {
            return "PLPB7BeGg23Sod6ZCymIRXbPbQ7dhQ1XvI"
        }

        else if (txt == "»SHERPA« E") {
            return "PLPB7BeGg23Sod6ZCymIRXbPbQ7dhQ1XvI"
        }

        else if (txt == "»BISON« D FAMILIE") {
            return "PLPB7BeGg23SovWix2nfV01H_pWzftVBrs"
        }

        else if (txt == "»BISON« E FAMILIE") {
            return "PLPB7BeGg23SovWix2nfV01H_pWzftVBrs"
        }

        else if (txt == "»PHOENIX« AST-2P/X") {
            return "PLPB7BeGg23SpZSqoObs7zdM8s7Nu3cx2F"
        }

        else if (txt == "»PHOENIX« AST-2E") {
            return "PLPB7BeGg23SqUj2ZArL-DHY8TAIDD4hE9"

        }

        else if (txt == "AST-1X") {
            return "PLPB7BeGg23SohP4JsrK3gwv9oNzbCp1AE"
        }

        else if (txt == "DOLLIES KLEINE SCHÄDEN") {
            return null
        }
        else if (txt == "KOMBINATIONSSYSTEME GROSSE SCHÄDEN") {
            return null
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

                <View style={{ width: '100%', marginTop: -2 }}>
                    {list.text.length === 0 && txt &&

                        <View onPress={() => openPdf(txt)}  style={{ width: '100%', flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                            <View style={{ width: "100%", marginTop: 2 }}>
                                <Text headline bold whiteColor>
                                    {txt}
                                </Text>
                            </View>
                        
                        </View>

                    }
                </View>


                {showLinkList &&
                    <View style={{ width: '100%', marginTop: -2 }}>
                        {linkList.map((txt, i) => {
                            return (
                                <TouchableOpacity onPress={() => openPdf2(txt.link)} key={i} style={{ width: '100%', flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                                    <Text headline bold whiteColor>
                                        {txt.name}
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



                {isRendered && videoId &&

                    <YouTube
                        // AIzaSyADirxd-_5JqMTKVqA-2ECnq1TfcxksH7I

                        // ref={youTubeRef}
                        // You must have an API Key for the player to load in Android
                        apiKey="AIzaSyAfOlpt6icgYuSUVVu8yXR-TJVoQ16bC3A"
                        // Un-comment one of videoId / videoIds / playlist.
                        // You can also edit these props while Hot-Loading in development mode to see how
                        // it affects the loaded native module
                        videoId={videoId}
                        // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
                        // playlistId="PLfvaFAgzJJDgBIpMqcqolowsZf9y5hmId"
                        play={state.isPlaying}
                        loop={state.isLooping}
                        fullscreen={state.fullscreen}
                        controls={1}
                        style={{ alignSelf: 'stretch', height: playerHeight, backgroundColor: 'black', marginVertical: 10 }}



                        onError={e => {

                            // console.log({ onError: e.error })
                        }}
                        onReady={e => {
                            // setPlayerHeight(200)
                            // console.log({ onReady: true })

                        }}
                        onChangeState={e => {

                            // console.log({ onChangeState: e.state })

                        }}
                        onChangeQuality={e => {

                            // console.log({ onChangeQuality: e.quality })

                        }}
                        onChangeFullscreen={e => {

                            // console.log({ onChangeFullscreen: e.isFullscreen })

                        }}
                        onProgress={e => {
                            // console.log({ onProgress: e.currentTime })

                        }}
                    />}


                {playListArr.length > 1 && <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <ScrollView horizontal>
                        <Text style={{ marginLeft: 10 }}>Playlist</Text>
                        {
                            playListArr.map((data) => {
                               
                                return (
                                    <TouchableOpacity onPress={() => setvideoId(data.snippet.resourceId.videoId)} style={{ margin: 5, width: 150, padding: 5 }} >
                                        <Image source={{ uri: data.snippet.thumbnails.default.url }} style={{ width: 150, height: 150, borderRadius: 20 }} resizeMode="contain" />

                                        <Text style={{ textAlign: 'center' }}>{data.snippet.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>

                </View>}

                <TouchableOpacity onPress={() => changeServiceType()} style={{ width: '95%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
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


