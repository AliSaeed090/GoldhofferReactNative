import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo, useEffect } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

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

    const { params } = props.route
    const { t } = useTranslation();
    const { colors } = useTheme();
    const [isTransportActive, setTransPortActive] = useState(null)
    const [list, setList] = useState({
        image: '',
        text: ''
    })


    const [searchArr, setsearchArr] = useState(["s", "2", "s", "2", "s", "2", "s", "2", "s", "2"])
    useEffect(() => {
        console.log({ params: params.item })
        setList(params.item)
    }, [params])

    const [search, setsearch] = useState("");
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

            <View style={{ width: '100%', height: 350 }}>
                <Image source={list.image} style={styles.banner} resizeMode="cover" />
                <TouchableOpacity  style={{ width: '100%', position: 'absolute', bottom: 0, backgroundColor: 'black', flexDirection: 'row', padding: 12 }}>
                    <View style={{ width: "90%", }}>
                        <Text headline bold whiteColor>
                            {list.text}
                        </Text>
                    </View>

                    <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>
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
            <View style={{ width: '100%', height: 200 }}>
            <Image source={Images.video1}  style={styles.banner} resizeMode="cover" />
</View>
            </View>
            {renderFooter()}
        </SafeAreaView>
    );
};


