import { SafeAreaView, Image, Text } from "@components";
import { BaseStyle, useTheme, Images } from "@config";
// Load sample data
import styles from './styles'
import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
const Home = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [isTransportActive, setTransPortActive] = useState(null)
  const [listTransport, setListTransport] = useState([
    {
      image: Images.banner1, text: 'TRAILSTAR'
    },

    {
      image: Images.banner2, text: 'SATTELANHÄNGER'
    },
    {
      image: Images.banner3, text: 'SCHWERLASTMODULE'
    },
    {
      image: Images.banner4, text: 'SPEZIALANWENDUNGEN'
    },
    {
      image: Images.banner5, text: 'SOFORT VERFÜGBAR'
    }
    ,
    {
      image: Images.banner1, text: 'PARTNER'
    }


  ])

  const [listAirport, setListAirport] = useState([
    {
      image: Images.banner9, text: 'FRACHT-/PUSHBACKSCHLEPPER'
    },

    {
      image: Images.banner8, text: 'KONVENTIONELLE SCHLEPPER'
    },
    {
      image: Images.banner7, text: 'STANGENLOSE SCHLEPPER'
    },
    {
      image: Images.banner4, text: 'FLUGZEUGBERGESYSTEME'
    },
    {
      image: Images.banner6, text: 'SOFORT VERFÜGBAR'
    }
    ,
    {
      image: Images.banner1, text: 'PARTNER'
    }


  ])
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      <ImageBackground

        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 0 }}
        source={Images.homeBackGround}>

        <View style={styles.ViewFirst} >
          <TouchableOpacity disabled={isTransportActive} onPress={() => setTransPortActive(true)}
            style={{
              ...styles.ViewSecond,
              backgroundColor: isTransportActive === false ? 'rgba(255,255,255, 0.8)' : null,
              alignItems: isTransportActive === true ? 'flex-start' : "center",
              paddingLeft: isTransportActive === true ? 20 : null,

            }} >
            <Image resizeMode='contain'
              source={Images.transport}
              tintColor={"white"}
              style={{ height: 50, width: 100, }} />
            <Text headline bold whiteColor>
              TRANSPORT
            </Text>

            {isTransportActive === true &&
              <View style={{ width: '100%', height: 100, justifyContent: 'flex-end', }}>
                <TouchableOpacity onPress={()=>navigation.navigate("ProductDetailsList", {list:listTransport})} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                <View style={{ width: "60%",  }}>
                    <Text headline bold whiteColor>
                      PRODUKT DETAILS
                    </Text>
                  </View>
                
                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                <View style={{ width: "60%",  }}>
                  <Text headline bold whiteColor>
                    SERVICE & SUPPORT
                  </Text>
                  </View>
                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>
              </View>

            }
          </TouchableOpacity>
          <TouchableOpacity disabled={!isTransportActive} onPress={() => setTransPortActive(false)}
            style={{
              ...styles.ViewSecond,
              backgroundColor: isTransportActive === true ? 'rgba(255,255,255, 0.8)' : null,
              alignItems: isTransportActive === false ? 'flex-start' : "center",
              paddingLeft: isTransportActive === false ? 20 : null

            }} >
            <Image resizeMode='contain'
              source={Images.airport}
              tintColor={"white"}
              style={{ height: 50, width: 100, }} />
            <Text headline bold whiteColor>
              AIRPORT
            </Text>
            {isTransportActive === false &&
              <View style={{ width: '100%', height: 100, justifyContent: 'flex-end', }}>
              <TouchableOpacity  onPress={()=>navigation.navigate("ProductDetailsList", {list:listAirport})}  style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                <View style={{ width: "60%",  }}>
                    <Text headline bold whiteColor>
                      PRODUKT DETAILS
                    </Text>
                  </View>
                
                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                <View style={{ width: "60%",  }}>
                  <Text headline bold whiteColor>
                    SERVICE & SUPPORT
                  </Text>
                  </View>
                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>
              </View>

            }
          </TouchableOpacity>


        </View>

      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
