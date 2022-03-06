
import { Image, Text, } from "@components";
// Load sample data
import styles from './styles'
import React from "react";
import { View, TouchableOpacity, } from "react-native";
// import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';

export default function RenderList2({item}) {

    
    const navigation = useNavigation()
    return (
        <View style={{ width: '100%',  backgroundColor:'#D2D9DE' }}>
            <View style={{height:200}}>
            <Image source={item.image} style={styles.banner} resizeMode="contain" />

            </View>
            <TouchableOpacity onPress={ () => navigation.navigate( "ProductDeatilInfo", { item: item.data})}
             style={{ width: '100%',height: 50,   backgroundColor: 'black', flexDirection: 'row', padding: 12 }}>
                <View style={{ width: "90%", }}>
                    <Text headline bold whiteColor>
                        {item.text}
                    </Text>
                </View>

                <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
            </TouchableOpacity>

        </View>
    )
}