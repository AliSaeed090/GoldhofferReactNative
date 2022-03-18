
import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';

const ArrowPng = () => {
    return (
      <Image source={Images.arrows} style={{ width: 20, height: 20 }} resizeMode="contain" />
    );
  }
  
export default function RenderList(props) {
    const Navigation = useNavigation()
    return (
        <View style={{ width: '100%', height: 350 }}>
            <Image source={Images.banner1} style={styles.banner} resizeMode="cover" />
            <View style={{ width: '100%', position: 'absolute', left: 0, bottom: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: '85%', backgroundColor: 'black', height: 120, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: "90%", }}>
                        <Text headline bold whiteColor>
                            FLITE LINE AT THE INTERNATIONAL GSE EXPO IN LAS VEGAS
                        </Text>
                        <Text whiteColor>
                            OCTOBER 5-7, 2021
                        </Text>
                    </View>


                </View>
                <TouchableOpacity style={{ width: '15%', padding: 12 }}>
                    <ArrowPng/>
                    {/* <FontAwesome5 onPress={() => Navigation.navigate("NewsDetails")} name="angle-double-right" color={"black"} size={45} /> */}
                </TouchableOpacity>
            </View>

        </View>
    )
}
