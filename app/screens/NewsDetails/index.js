
import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo } from "react";
import { FlatList, View, TouchableOpacity, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';

export default function NewsDetails(props) {
    const navigation = useNavigation()
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
                    <Image source={Images.banner1} style={styles.banner} resizeMode="cover" />
                </View>
                <View style={{ width: "90%", alignSelf: 'center', margin: 20 }}>
                    <Text headline bold>
                        FLITE LINE AT THE INTERNATIONAL GSE EXPO IN LAS VEGAS
                    </Text>
                    <Text>
                        MATTHIAS RUPPEL NEUER VORSTANDSVORSITZENDER
                    </Text>
                </View>

                <View style={{ width: "90%", alignSelf: 'center', margin: 10 }}>

                    <Text>
                        Matthias Ruppel (43) übernimmt die Position des Vorstandsvorsitzenden. Im Oktober 2020 wurde der diplomierte Maschinenbauer in den Vorstand der Goldhofer AG berufen. Als Chief Operating Officer (COO) verantwortete er bisher das um den Einkauf erweiterte Ressort Technik mit Entwicklung und Produktion des weltweit tätigen Experten für Schwerlast- und Spezialtransportlösungen.
                    </Text>
                </View>

                <View style={{ width: "90%", alignSelf: 'center', margin: 10 }}>

                    <Text>
                        Matthias Ruppel (43) übernimmt die Position des Vorstandsvorsitzenden. Im Oktober 2020 wurde der diplomierte Maschinenbauer in den Vorstand der Goldhofer AG berufen. Als Chief Operating Officer (COO) verantwortete er bisher das um den Einkauf erweiterte Ressort Technik mit Entwicklung und Produktion des weltweit tätigen Experten für Schwerlast- und Spezialtransportlösungen.
                    </Text>
                </View>


                <View style={{ width: "90%", alignSelf: 'center', margin: 10 }}>

                    <Text>
                        Matthias Ruppel (43) übernimmt die Position des Vorstandsvorsitzenden. Im Oktober 2020 wurde der diplomierte Maschinenbauer in den Vorstand der Goldhofer AG berufen. Als Chief Operating Officer (COO) verantwortete er bisher das um den Einkauf erweiterte Ressort Technik mit Entwicklung und Produktion des weltweit tätigen Experten für Schwerlast- und Spezialtransportlösungen.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', width: "95%", alignSelf:'center', justifyContent:'flex-end', alignItems:'flex-end' }}>
                    <Text style={{ marginRight: 10 }} headline bold blackColor>
                    NÄCHSTE
                    </Text>
                    <FontAwesome5 name="angle-double-right" color={"black"} size={25} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
