
import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function RenderList2(props) {
    return (
        <View style={{ width: '100%', height: 200, }}>
            <Image source={Images.banner1} style={styles.banner} resizeMode="contain" />
            <TouchableOpacity style={{ width: '100%', position:'absolute', bottom:0,  backgroundColor: 'black', flexDirection: 'row', padding:12 }}>
                <View style={{ width: "90%", }}>
                    <Text headline bold whiteColor>
                    SATTELANHÄNGER
                                        </Text>
                </View>

                <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
            </TouchableOpacity>

        </View>
    )
}
