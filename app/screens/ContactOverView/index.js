
import { SafeAreaView, Image, Text, Header, Icon, TextInput, Button } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo } from "react";
import { FlatList, View, TouchableOpacity, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useNavigation } from '@react-navigation/native';
import { Send } from "react-native-gifted-chat";


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
    const [isAgree, setIsAgree] = useState(false)
    const [property, setProperty] = useState({
        VORNAME: '',
        NACHNAME: '',
        FIRMA: '',
        MOBILNUMMER: '',
        ADRESSE: '',
        LAND: '',
        MEINANLIEGEN: ''
    })
    const [showTransportList, setShowTransportList] = useState(false)
    const [showAirPort, setShowAirPort] = useState(false)
    const transportArr = ["TRAILSTAR", "SATTELANHÄNGER", "SCHWERLASTMODULE", "SPEZIALANWENDUNGEN", "SOFORT VERFÜGBAR", "PARTNER",]
    const airportArr = ["FRACHT-/PUSHBACKSCHLEPPER", "KONVENTIONELLE SCHLEPPER", "STANGENLOSE SCHLEPPER", "FLUGZEUGBERGESYSTEME", "PARTNER",]
    const transportPress = () => {
        setShowTransportList(true)
        setShowAirPort(false)

    }

    const airPortPress = () => {
        setShowTransportList(false)
        setShowAirPort(true)
    }

    const anglePress = () => {
        setShowTransportList(false)
        setShowAirPort(false)
        setShowBtn(!showBtn)
    }

    const checkField = () => {
        if (!isAgree) {
            alert("Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen")
        }
        // VORNAME: '',
        // NACHNAME: '',
        // FIRMA: '',
        // MOBILNUMMER: '',
        // ADRESSE: '',
        // LAND: '',
        // MEINANLIEGEN: ''
        else if (property.VORNAME === "" || property.VORNAME.length < 3) {
            alert("Bitte geben Sie einen gültigen VORNAME ein")
            return false
        }
        else if (property.NACHNAME === "" || property.NACHNAME.length < 3) {
            alert("Bitte geben Sie einen gültigen NACHNAME ein")
            return false
        }
        else if (property.FIRMA === "" || property.FIRMA.length < 3) {
            alert("Bitte geben Sie einen gültigen FIRMA ein")
            return false
        }
        else if (property.MOBILNUMMER === "" || property.MOBILNUMMER.length < 3) {
            alert("Bitte geben Sie einen gültigen MOBILNUMMER ein")
            return false
        }
        else if (property.ADRESSE === "" || property.ADRESSE.length < 3) {
            alert("Bitte geben Sie einen gültigen ADRESSE ein")
            return false
        }
        else if (property.LAND === "" || property.LAND.length < 3) {
            alert("Bitte geben Sie einen gültigen LAND ein")
            return false
        }
        else if (property.MEINANLIEGEN === "" || property.MEINANLIEGEN.length < 3) {
            alert("Bitte geben Sie einen gültigen MEINANLIEGEN ein")
            return false
        }
        else{
            return true
        }
     
    }
    const sendmail = (Data) => {
        console.log('Mail Run');
        var data = {
            service_id: 'gmaildeliv',
            template_id: 'template_hVEuuFhZ',
            user_id: 'user_CEnkVvNSUvXDcA8X1NxA5',
            template_params: {
                // "message": 'Please Accept my order', "Client_name": name,
                "deliveryLocation": Data.deliveryLocation,
                "store": Data.store,
                "tip": Data.tip,
                "deliveryTime": Data.deliveryTime,
                "paymentMethod": Data.paymentMethod,
                "item": Data.item.map((data) =>  { return (`<div><p>Item: ${data.item} Qty:${data.qty}</p></div>`)}),
                "OrderDate": new Date().toDateString(),
                "OrderTime": new Date().toLocaleTimeString(),
                "OrderID": Data.OrderID,
    
    
            }
        };
    
    
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'post',
            body: JSON.stringify(data),
            headers: new Headers({ 'content-type': 'application/json' }),
    
        }).then(function (response) {
            console.log({ response })
        }).catch(function (data) {
            ChromeSamples.log('Created Gist:', data);
            console.log({ data })
        });
    }
    const send = () => {
        if (checkField()) {
            sendmail(property)
        }


    }
    const onPressRight =()=>{
        navigation.reset({
          index: 0,
          routes: [{ name: "Main" }]
      });
      }
    return (
        <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
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
                <TouchableOpacity onPress={() => anglePress()} style={{ flexDirection: "row", width: "95%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ width: "90%", justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: 'black', }}>
                        <Text headline bold whiteColor>
                            ICH INTERESSIERE MICH FÜR
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => anglePress()} style={{ width: "10%", alignItems: 'flex-end', justifyContent: 'flex-end' }}>

                        {showBtn ?
                            // <FontAwesome5 name="angle-double-down" color={"black"} size={25} /> 
                            <DownArrowPng />
                            :
                            <ArrowPng tintColor="black" />
                            // <FontAwesome5 name="angle-double-right" color={"black"} size={25} />


                        }

                    </TouchableOpacity>
                </TouchableOpacity>
                {showBtn && <View style={{ flexDirection: "row", width: "95%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <TouchableOpacity
                            onPress={transportPress}
                            style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: showTransportList === true ? "#E1E1E1" : 'black', padding: 10 }}
                        >
                            <Text headline bold whiteColor>
                                TRANSPORT
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "50%", justifyContent: 'center', alignItems: 'center', margin: 2 }}>
                        <TouchableOpacity
                            onPress={airPortPress}
                            style={{ width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: showAirPort === true ? "#E1E1E1" : 'black', padding: 10 }}
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
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5, marginTop: 10 }}
                    >
                        <TextInput onChangeText={(txt) => setProperty({ ...property, VORNAME: txt })} value={property.VORNAME} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="VORNAME" placeholderTextColor="white" />

                    </View>
                    <View
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                    >
                        <TextInput onChangeText={(txt) => setProperty({ ...property, NACHNAME: txt })} value={property.NACHNAME} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="NACHNAME" placeholderTextColor="white" />

                    </View>
                    <View
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                    >
                        <TextInput onChangeText={(txt) => setProperty({ ...property, FIRMA: txt })} value={property.FIRMA} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="FIRMA (OPTIONAL)" placeholderTextColor="white" />


                    </View>
                    <View
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                    >
                        <TextInput keyboardType={'phone-pad'} onChangeText={(txt) => setProperty({ ...property, MOBILNUMMER: txt })} value={property.MOBILNUMMER} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="MOBILNUMMER" placeholderTextColor="white" />


                    </View>
                    <View
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5, height: 80 }}
                    >
                        <TextInput onChangeText={(txt) => setProperty({ ...property, ADRESSE: txt })} value={property.ADRESSE} multiline={true} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="ADRESSE (OPTIONAL)" placeholderTextColor="white" />


                    </View>
                    <View
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5 }}
                    >
                        <TextInput onChangeText={(txt) => setProperty({ ...property, LAND: txt })} value={property.LAND} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="LAND" placeholderTextColor="white" />

                    </View>

                    <View
                        style={{ flexDirection: 'row', alignSelf: 'center', width: '85%', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#D2D9DE', padding: 0, margin: 5, height: 150 }}
                    >
                        <TextInput onChangeText={(txt) => setProperty({ ...property, MEINANLIEGEN: txt })} value={property.MEINANLIEGEN} style={{ backgroundColor: 'transparent', fontWeight: 'bold' }} placeholder="MEIN ANLIEGEN" placeholderTextColor="white" />

                    </View>

                    <TouchableOpacity onPress={() => setIsAgree(!isAgree)}
                        style={{ flexDirection: 'row', width: '100%', justifyContent: 'flex-start', alignItems: 'center', padding: 10, marginTop: 5 }}
                    >
                        <View style={{ width: 20, height: 20, borderRadius: 20, borderColor: 'white', borderWidth: 1, marginRight: 20, justifyContent: 'center', alignItems: 'center' }}  >
                            {isAgree && <View style={{ width: 11, height: 11, borderRadius: 11, backgroundColor: 'white' }} />}
                        </View>

                        <Text whiteColor>
                            Ich stimme den Datenschutzrichtlinien & den AGB’s zu
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => send()} style={{ flexDirection: 'row', width: "95%", alignSelf: 'center', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text style={{ marginRight: 10 }} headline bold whiteColor>
                            SENDEN
                        </Text>
                        {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                        <ArrowPng tintColor="white" />

                    </TouchableOpacity>
                    <View style={{ width: 20, height: 100, }} />
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}
