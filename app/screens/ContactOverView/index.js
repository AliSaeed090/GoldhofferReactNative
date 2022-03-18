
import { SafeAreaView, Image, Text, Header, Icon, TextInput, Button } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo } from "react";
import { FlatList, View, TouchableOpacity, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';


const ArrowPng = (props) => {
    return (
      <Image source={Images.arrows} style={{ width: 20, height: 20 }} resizeMode="contain" tintColor={props.tintColor} />
    );
  }
  const BackArrowPng = () => {
    return (
      <Image source={Images.backArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
    );
  }
  const DownArrowPng = () => {
    return (
      <Image source={Images.downArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
    );
  }

  
export default function ContactOverView(props) {
    const navigation = useNavigation()
    const [showBtn, setShowBtn] = useState(false)
    const [showTransportList, setShowTransportList] = useState(false)
    const [showAirPort, setShowAirPort] = useState(false)
    const transportArr = ["ANHÄNGER", "SATTELAUFLIEGER", "SCHWERLASTMODULE", "SONDERLÖSUNGEN FÜR WINDANLAGEN", "SERVICES RUND UM SCHWER-& SPEZIALTRANSPORTE", "TECHNOLOGIEN RUND UM SCHWER- & SPEZIALTRANSPORTE", "SONSTIGES"]
    const airportArr = ["CARGOSCHLEPPER", "KONVENTIONELLE FLUGZEUGSCHLEPPER", "STANGENLOSE FLUGZEUGSCHLEPPER", "FLUGZEUGBERGESYSTEME", "SERVICES FÜR DEN AIRPORT", "TECHNOLOGIEN FÜR DEN AIRPORT", "SONSTIGES"]
 const transportPress =()=>{
    setShowTransportList(true)
    setShowAirPort(false)

 }

 const airPortPress =()=>{
    setShowTransportList(false)
    setShowAirPort(true)
}

const anglePress =()=>{
    setShowTransportList(false)
    setShowAirPort(false)
    setShowBtn(!showBtn)
}
    return (
        <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
            <Header
                style={{ backgroundColor: 'black' }}
                title=""
                renderLeft={() => {
                    return (
                        <View style={{ flexDirection: 'row', width: 100 , justifyContent:'center', alignItems:'center'}}>
                            {/* <FontAwesome5 name="angle-double-left" color={"white"} size={25} /> */}
                            <BackArrowPng/>
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
                <View style={{ flexDirection: "row", width: "95%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: "90%", justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'black', }}>
                        <Text headline bold whiteColor>
                            ICH INTERESSIERE MICH FÜR
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => anglePress()} style={{ width: "10%", alignItems: 'flex-end', justifyContent: 'flex-end' }}>

                        {showBtn ? 
                        // <FontAwesome5 name="angle-double-down" color={"black"} size={25} /> 
                        <DownArrowPng/>
                        : 
                        <ArrowPng tintColor="black"/>
                        // <FontAwesome5 name="angle-double-right" color={"black"} size={25} />
                        
                        
                        }

                    </TouchableOpacity>
                </View>
                {showBtn && <View style={{ flexDirection: "row", width: "95%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <TouchableOpacity
                        onPress={transportPress}
                            style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: showTransportList===true? "#E1E1E1" : 'black', padding: 10 }}
                        >
                            <Text headline bold whiteColor>
                                TRANSPORT
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <TouchableOpacity
                        onPress={airPortPress}
                            style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: showAirPort===true? "#E1E1E1" : 'black', padding: 10 }}
                        >
                            <Text headline bold whiteColor>
                                AIRPORT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>}

                {showTransportList && <View style={{ width: "95%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>


                    {transportArr.map((data, i) => {
                        return (
                            <View
                            key={i}
                                style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 10, marginTop: 5 }}
                            >
                                <View style={{ width: 10, height: 10, borderRadius: 10, borderColor: 'black', borderWidth: 1, margin: 5 }} />

                                <Text blackColor>
                                    {data}
                                </Text>
                            </View>
                        )
                    })}
                </View>}

                {showAirPort && <View style={{ width: "95%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>


                    {airportArr.map((data, i) => {
                        return (
                            <View
                            key={i}
                                style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 10, marginTop: 5 }}
                            >
                                <View style={{ width: 10, height: 10, borderRadius: 10, borderColor: 'black', borderWidth: 1, margin: 5 }} />

                                <Text blackColor>
                                    {data}
                                </Text>
                            </View>
                        )
                    })}
                </View>}
             
                    <View style={{ width: "100%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 50, backgroundColor: 'black' }}>

                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5, marginTop:10 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="VORNAME" placeholderTextColor="white" />

                        </View>
                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="NACHNAME" placeholderTextColor="white" />

                        </View>
                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="FIRMA (OPTIONAL)" placeholderTextColor="white" />


                        </View>
                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="MOBILNUMMER" placeholderTextColor="white" />


                        </View>
                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="ADRESSE (OPTIONAL)" placeholderTextColor="white" />


                        </View>
                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="LAND" placeholderTextColor="white" />

                        </View>

                        <View
                            style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5, height: 150 }}
                        >
                            <TextInput style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="MEIN ANLIEGEN" placeholderTextColor="white" />

                        </View>

                        <View
                            style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center', padding: 10, marginTop: 5 }}
                        >
                            <View style={{ width: 20, height: 20, borderRadius: 20, borderColor: 'white', borderWidth: 1, marginRight: 20 }} />

                            <Text whiteColor>
                                Ich stimme den Datenschutzrichtlinien & den AGB’s zu
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: "95%", alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Text style={{ marginRight: 10 }} headline bold whiteColor>
                                SENDEN
                            </Text>
                            {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                            <ArrowPng tintColor="white"/>

                        </View>
                        <View style={{ width: 20, height: 100, }} />
                    </View>
         


            </ScrollView>
        </SafeAreaView>
    )
}
