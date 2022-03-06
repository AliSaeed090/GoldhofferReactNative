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
      image: Images.banner0, text: 'TRAILSTAR', data: [{
        image: Images.banner10, text: 'TRAILSTAR', listTransport: true,
        data: { image: Images.banner11, text: ['PRODUKT PROSPEKT »TRAILSTAR«'], videoId: "9RM0QLDti1A", }
      },
      ]
    },
    {
      image: Images.banner1, text: 'SATTELANHÄNGER',
      data: [
        {
          image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true,
          data: [
            { image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } },
            { image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'] } },
            { image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } }
          ]
        },
        {
          image: Images.banner18, text: 'SEMIAUFLIEGER',
          data: [
            { image: Images.banner27, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } },
            { image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'] } },
            { image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } },
            { image: Images.banner35, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'] } }

          ],
          listTransport: true,

        },
        {
          image: Images.banner10, text: 'TIEFBETTAUFLIEGER',
          data: [
            { image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } },
            { image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT »MPA« V'] } },
            { image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } },
            { image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } }

          ],
          listTransport: true,

        }



      ]
    },

    {
      image: Images.banner2, text: 'SCHWERLASTMODULE',
      data: [
        {
          image: Images.banner40, text: 'GEZOGEN', listTransport: true,
          data: [
            { image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } },
            { image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } },
            { image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } },
            { image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } },
            { image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } },
            { image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } }

          ]
        },
        {
          image: Images.banner41, text: 'ANGETRIEBEN',
          data: [
            { image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } },
            { image: Images.banner56, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } },
            { image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } },
            { image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } }

          ],
          listTransport: true,

        },



      ]
    },
    {
      image: Images.banner3, text: 'SPEZIALANWENDUNGEN',
      data: [

        {
          image: Images.banner61, text: 'FTV 550', listTransport: true,
          data: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550'], videoId: "9RM0QLDti1A", }
        },
        {
          image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', data: {
            image: Images.banner64,
            text: ['PRODUKT PROSPEKT »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0",
          },

        },
        {
          image: Images.banner65, text: 'RA 2', listTransport: true,
          data: { image: Images.banner66, text: ['PRODUKT PROSPEKT RA 2'], videoId: "9RM0QLDti1A", }
        },
        {
          image: Images.banner67, text: 'RA 3', data: { image: Images.banner68, text: ['PRODUKT PROSPEKT RA 3'], videoId: "eP_YC0cr0n0", },

        },
        {
          image: Images.banner69, text: 'RA 4', listTransport: true,
          data: { image: Images.banner70, text: ['PRODUKT PROSPEKT RA 4'], videoId: "9RM0QLDti1A", }
        },
        {
          image: Images.banner71, text: '»BLADEX«',
          data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", }, listTransport: true,

        },
        {
          image: Images.banner73, text: '»BLADES«', listTransport: true,
          data: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A", }
        },



      ]
    },
    {
      image: Images.banner4, text: 'SPEZIALANWENDUNGEN', data: [{ image: Images.banner10, text: 'TU I TU-L', listTransport: true, data: { image: Images.banner11, text: ['QUICKGUIDE ZUM TU I TU-L'], videoId: "9RM0QLDti1A", } }, {
        image: Images.banner10, text: 'TN-L', data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'], videoId: "eP_YC0cr0n0", }, listTransport: true, data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'], videoId: "eP_YC0cr0n0", }
      }]
    },
    {
      image: Images.banner5, text: 'PARTNER', data: [{ image: Images.banner10, text: 'TU I TU-L', listTransport: true, data: { image: Images.banner11, text: ['QUICKGUIDE ZUM TU I TU-L'], videoId: "9RM0QLDti1A", } }, {
        image: Images.banner10, text: 'TN-L', data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'], videoId: "eP_YC0cr0n0", }, listTransport: true, data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'], videoId: "eP_YC0cr0n0", }
      }]
    }


  ])

  const [listAirport, setListAirport] = useState([
    {
      image: Images.banner9, text: 'FRACHT-/PUSHBACKSCHLEPPER', data: [{
        image: Images.banner13, text: 'F59', listAirport: true,
        data: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
      },
      {
        image: Images.banner15, text: 'STT', listAirport: true,
        data: { image: Images.banner15, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', 'SERVICE-PROSPEKT'] }
      }]
    },

    {
      image: Images.banner8, text: 'KONVENTIONELLE SCHLEPPER',
      data: [{
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true,
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['»BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"] }
      },
      {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true,
        data: {
          image: Images.banner78, videoId: "eP_YC0cr0n0",
          text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',]
        }
      }]
    },

    {
      image: Images.banner7, text: 'STANGENLOSE SCHLEPPER', data: [
        {
          image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true,
          data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"] }
        },
        {
          image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true,
          data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',] }
        },
        {
          image: Images.banner83, text: 'AST-1X', listAirport: true,
          data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',] }
        }
      ]
    },
    
    {
      image: Images.banner6, text: 'FLUGZEUGBERGESYSTEME', data: [{
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true,
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"] }
      },
      {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true,
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', ] }
      }]
    },
  
    {
      image: Images.banner5, text: 'PARTNER', data: [{
        image: Images.banner13, text: 'F59', listAirport: true,
        data: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
      },
      {
        image: Images.banner15, text: 'STT', listAirport: true,
        data: { image: Images.banner15, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', 'SERVICE-PROSPEKT'] }
      }]
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
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsList", { list: listTransport })} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      PRODUKT DETAILS
                    </Text>
                  </View>

                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsList", { list: listTransport })} style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      SERVICE & SUPPORT
                    </Text>
                  </View>
                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>
              </View>

            }
          </TouchableOpacity>
          <TouchableOpacity disabled={isTransportActive === null ? false : !isTransportActive} onPress={() => setTransPortActive(false)}
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
                <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsList", { list: listAirport })} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      PRODUKT DETAILS
                    </Text>
                  </View>

                  <FontAwesome5 name="angle-double-right" color={"white"} size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ProductDetailsList", { list: listAirport })} style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ width: "60%", }}>
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
