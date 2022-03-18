
import { Image, Text, } from "@components";
// Load sample data
import styles from './styles'
import React from "react";
import { View, TouchableOpacity, } from "react-native";
// import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { BaseStyle, useTheme, Images, BaseColor } from "@config";

import { useNavigation } from '@react-navigation/native';
const ArrowPng = () => {
    return (
        <Image source={Images.arrows} style={{ width: 20, height: 20 }} resizeMode="contain" />
    );
}
export default function RenderList2({ item }) {


    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDeatilInfo", { item: item.data })} style={{ width: '100%', backgroundColor: '#D2D9DE', height: 200 }}>
            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.image} style={styles.banner} resizeMode="cover" />

            </View>
            <TouchableOpacity onPress={() => navigation.navigate("ProductDeatilInfo", { item: item.data })}
                style={{ width: '100%', height: 50, position: 'absolute', bottom: 0, backgroundColor: 'black', flexDirection: 'row', padding: 12, justifyContent:'center', alignItems:'center' }}>
                <View style={{ width: "90%",justifyContent:'center', alignItems:'flex-start' }}>
                    <Text headline bold whiteColor>
                        {item.text}
                    </Text>
                </View>
                <View style={{ width: "10%",justifyContent:'center', alignItems:'center' }}>
                <ArrowPng />
                </View>
               
            </TouchableOpacity>

        </TouchableOpacity>
    )
}  