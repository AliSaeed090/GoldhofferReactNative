
import { Image, Text, } from "@components";
// Load sample data
import styles from './styles'
import React from "react";
import { View, TouchableOpacity, Linking} from "react-native";
// import { useTranslation } from "react-i18next";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';
const ArrowPng = () => {
    return (
        <Image source={Images.arrows} style={{ width: 20, height: 20 }} resizeMode="contain" />
    );
}
export default function RenderList2({ item }) {
    const onPressFunc = (item) => {

        if (item.linking) {
            Linking.openURL(item.linking)
        }
        else if (item.data.length > 0) {
            navigation.navigate("ProductDeatilMoreInfo", { item: item.data })
        }
        else {
            navigation.navigate("ProductDeatilVideo", { item: item.data })
        }


    }
    const navigation = useNavigation()
    //  /

    return (
        <TouchableOpacity onPress={() => onPressFunc(item)} style={{ width: '100%', height: 250, backgroundColor: '#D2D9DE' }}>
            <Image source={item.image} style={styles.banner} resizeMode="contain" />
            <View 
                style={{ width: '100%', position: 'absolute', bottom: 0, backgroundColor: 'black', flexDirection: 'row', padding: 12, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: "90%", justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text headline bold whiteColor>
                        {item.text}
                    </Text>
                </View>

                <View style={{ width: "10%", justifyContent: 'center', alignItems: 'center' }}>
                    <ArrowPng />
                </View>
            </View>

        </TouchableOpacity>
    )
}
