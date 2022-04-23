import { SafeAreaView, Image, Text } from "@components";
import { BaseStyle, useTheme, Images } from "@config";
// Load sample data
import styles from './styles'
import React, { useState } from "react";
import { ImageBackground, View, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useDispatch } from "react-redux";
import { ApplicationActions } from "@actions";

const ArrowPng = () => {
  return (
    <Image source={Images.arrows} style={{ width: 20, height: 20 }} resizeMode="contain" />
  );
}


const Home = (props) => {
  const dispatch = useDispatch();

  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [isTransportActive, setTransPortActive] = useState(null)
  const [listTransport, setListTransport] = useState([
    // {
    //   image: undefined, text: 'TRAILSTAR', searchText:'PRODUKT PROSPEKT »TRAILSTAR«',   data: [{
    //     image: undefined, text: 'TRAILSTAR', listTransport: true,
    //     data: { image: undefined, text: ['PRODUKT PROSPEKT »TRAILSTAR«'],videoId: "9RM0QLDti1A",otherData:{  image: undefined, text: ['QUICKGUIDE ZUM »TRAILSTAR«'], videoId: "9RM0QLDti1A", }}
    //   },
    //   ]
    // },
    {
      image: Images.banner1, text: 'SATTELANHÄNGER', searchText: 'PRITSCHENAUFLIEGER SATTELANHÄNGER SPZ-L | SPZ-GL | SPZ-H SPZ-GP »VENTUM« SEMIAUFLIEGER STEPSTAR »ARCUS« P | »ARCUS« PK STZ-L | STZ-H | »MPA« STZ-L | »MPA« MIT RADMULDE TIEFBETTAUFLIEGER STZ-VL | STZ-VH »MPA« V STZ-VP (245) STZ-VP (285)',
      data: [
        {
          image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true,
          data: [
            { image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'] } } },
            { image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], } } },
            { image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'] } } }
          ]
        },
        {
          image: Images.banner18, text: 'SEMIAUFLIEGER',
          data: [
            { image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'] } } },
            { image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'] } } },
            { image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'] } } },
            { image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'] } } }

          ],
          listTransport: true,

        },
        {
          image: Images.banner10, text: 'TIEFBETTAUFLIEGER',
          data: [
            { image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'] } } },
            { image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'] } } },
            { image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'] } } },
            { image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'] } } }

          ],
          listTransport: true,

        }



      ]
    },

    {
      image: Images.banner2, text: 'SCHWERLASTMODULE', searchText: 'SCHWERLASTMODULE  GEZOGEN THP/ET THP/MT THP/SL-L THP/SL-S THP/SL THP/UT ANGETRIEBEN »ADDRIVE« PST/SL PST/SL-E PST/ES-E',
      data: [
        {
          image: Images.banner40, text: 'GEZOGEN', listTransport: true,
          data: [
            { image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'] } } },
            { image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'] } } },
            { image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'] } } },
            { image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'] } } },
            { image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'] } } },
            { image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'] } } }

          ]
        },
        {
          image: Images.banner41, text: 'ANGETRIEBEN',
          data: [
            { image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'] } } },
            { image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'] } } },
            { image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'] } } },
            { image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'] } } }

          ],
          listTransport: true,

        },



      ]
    },
    {
      image: Images.banner3, text: 'SPEZIALANWENDUNGEN',
      searchText: "SPEZIALANWENDUNGEN  FTV 550 PRODUKT PROSPEKT FTV 550 »FAKTOR« 5 | »FAKTOR« 5.5 PRODUKT PROSPEKT »FAKTOR« 5 | »FAKTOR« 5.5 RA 2 RA 3 RA 4 »BLADEX« »BLADES«",
      data: [

        {
          image: Images.banner61, text: 'FTV 550', listTransport: true,
          data: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550'], otherData: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'] }, videoId: "9RM0QLDti1A", }
        },
        {
          image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', data: {
            image: Images.banner64, text: ['PRODUKT PROSPEKT »FAKTOR« 5 | »FAKTOR« 5.5'], otherData: { image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0" }, videoId: "eP_YC0cr0n0",
          },

        },
        {
          image: Images.banner65, text: 'RA 2', listTransport: true,
          data: { image: Images.banner66, text: ['PRODUKT PROSPEKT RA 2'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", } }
        },
        {
          image: Images.banner67, text: 'RA 3', data: { image: Images.banner68, text: ['PRODUKT PROSPEKT RA 3'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", } },

        },
        {
          image: Images.banner69, text: 'RA 4', listTransport: true,
          data: { image: Images.banner70, text: ['PRODUKT PROSPEKT RA 4'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", } }
        },
        {
          image: Images.banner71, text: '»BLADEX«',
          data: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner72, text: ['QQUICKGUIDE ZUM »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

        },
        {
          image: Images.banner73, text: '»BLADES«', listTransport: true,
          data: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A" } }
        },



      ]
    },
    {
      image: Images.banner4, text: 'SOFORT VERFÜGBAR',
      searchText: "SOFORT VERFÜGBAR TU I TU-L QUICKGUIDE ZUM TU I TU-L TN-L QUICKGUIDE ZUM TN-L'",
      data: [
        {
          image: Images.banner1, text: 'LAGERFAHRZEUGE', listTransport: true,
          data: [], listTransport: true,
          linking: 'https://www.goldhofer.com/lagerfahrzeuge'

        },
        {
          image: Images.banner94, text: 'GEBRAUCHTFAHRZEUGE',
          data: [], listTransport: true,
          linking: 'https://www.goldhofer.com/gebrauchtfahrzeuge'

        }]
    },
    // {
    //   image: Images.banner5, text: 'PARTNER', disabled:true,
    //   searchText:"PARTNER TU I TU-L QUICKGUIDE ZUM TU I TU-L QUICKGUIDE ZUM TN-L",
    //   data: [{ image: Images.banner10, text: 'TU I TU-L', listTransport: true, data: { image: Images.banner11, text: ['QUICKGUIDE ZUM TU I TU-L'],otherData:{}, videoId: "9RM0QLDti1A", } },
    //    {
    //     image: Images.banner10, text: 'TN-L', data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'],otherData:{}, videoId: "eP_YC0cr0n0", },
    //      listTransport: true, data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'],otherData:{}, videoId: "eP_YC0cr0n0", }
    //   }]
    // }


  ])

  const [listTransportSerVice, setListTransportService] = useState([
    // {
    //   image: undefined, text: 'TRAILSTAR', searchText:'PRODUKT PROSPEKT »TRAILSTAR«', data: [{
    //     image: undefined, text: 'TRAILSTAR', listTransport: true,
    //     data: { image: undefined, text: ['QUICKGUIDE ZUM »TRAILSTAR«'], videoId: "9RM0QLDti1A",  otherData:{ image: undefined, text: ['PRODUKT PROSPEKT »TRAILSTAR«'],videoId: "9RM0QLDti1A",},}
    //   },
    //   ]
    // },
    {
      image: Images.banner1, text: 'SATTELANHÄNGER', searchText: 'PRITSCHENAUFLIEGER SATTELANHÄNGER SPZ-L | SPZ-GL | SPZ-H SPZ-GP »VENTUM« SEMIAUFLIEGER STEPSTAR »ARCUS« P | »ARCUS« PK STZ-L | STZ-H | »MPA« STZ-L | »MPA« MIT RADMULDE TIEFBETTAUFLIEGER STZ-VL | STZ-VH »MPA« V STZ-VP (245) STZ-VP (285)',
      data: [
        {
          image: Images.banner16, text: 'PRITSCHENAUFLIEGER', listTransport: true,
          data: [
            { image: Images.banner19, text: 'SPZ-L | SPZ-GL | SPZ-H', data: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['QUICKGUIDE ZUM SPZ-L | SPZ-GL | SPZ-H'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner22, text: ['PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H'] } } },
            { image: Images.banner20, text: 'SPZ-GP', data: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['QUICKGUIDE ZUM SPZ-GP'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner23, text: ['PRODUKT PROSPEKT SPZ-GP'] } } },
            { image: Images.banner21, text: '»VENTUM«', data: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['QUICKGUIDE ZUM »VENTUM«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner24, text: ['PRODUKT PROSPEKT »VENTUM«'] } } }
          ]
        },
        {
          image: Images.banner18, text: 'SEMIAUFLIEGER',
          data: [
            { image: Images.banner35, text: 'STEPSTAR', data: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['QUICKGUIDE ZUM STEPSTAR'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner36, text: ['PRODUKT PROSPEKT STEPSTAR'] } } },
            { image: Images.banner25, text: '»ARCUS« P | »ARCUS« PK', data: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['QUICKGUIDE ZUM»ARCUS« P | »ARCUS« PK'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner37, text: ['PRODUKT PROSPEKT»ARCUS« P | »ARCUS« PK'] } } },
            { image: Images.banner28, text: 'STZ-L | STZ-H | »MPA«', data: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['QUICKGUIDE ZUM STZ-L | STZ-H | »MPA«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner38, text: ['PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«'] } } },
            { image: Images.banner27, text: 'STZ-L | »MPA« MIT RADMULDE', data: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['QUICKGUIDE ZUM STZ-L | »MPA« MIT RADMULDE'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner39, text: ['PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE'] } } }

          ],
          listTransport: true,

        },
        {
          image: Images.banner10, text: 'TIEFBETTAUFLIEGER',
          data: [
            { image: Images.banner31, text: 'STZ-VL | STZ-VH', data: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['QUICKGUIDE ZUM STZ-VL | STZ-VH'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner89, text: ['PRODUKT PROSPEKT STZ-VL | STZ-VH'] } } },
            { image: Images.banner32, text: '»MPA« V', data: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['QUICKGUIDE ZUM »MPA« V'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner90, text: ['PRODUKT PROSPEKT »MPA« V'] } } },
            { image: Images.banner33, text: 'STZ-VP (245)', data: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['QUICKGUIDE ZUM STZ-VP (245)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner91, text: ['PRODUKT PROSPEKT STZ-VP (245)'] } } },
            { image: Images.banner34, text: 'STZ-VP (285)', data: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['QUICKGUIDE ZUM STZ-VP (285)'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner92, text: ['PRODUKT PROSPEKT STZ-VP (285)'] } } }

          ],
          listTransport: true,

        }



      ]
    },

    {
      image: Images.banner2, text: 'SCHWERLASTMODULE', searchText: 'SCHWERLASTMODULE  GEZOGEN THP/ET THP/MT THP/SL-L THP/SL-S THP/SL THP/UT ANGETRIEBEN »ADDRIVE« PST/SL PST/SL-E PST/ES-E',
      data: [
        {
          image: Images.banner40, text: 'GEZOGEN', listTransport: true,
          data: [
            { image: Images.banner40, text: 'THP/ET', data: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['QUICKGUIDE ZUM THP/ET'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner42, text: ['PRODUKT PROSPEKT THP/ET'] } } },
            { image: Images.banner43, text: 'THP/MT', data: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['QUICKGUIDE ZUM THP/MT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner44, text: ['PRODUKT PROSPEKT THP/MT'] } } },
            { image: Images.banner45, text: 'THP/SL-L', data: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['QUICKGUIDE ZUM THP/SL-L'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner46, text: ['PRODUKT PROSPEKT THP/SL-L'] } } },
            { image: Images.banner47, text: 'THP/SL-S', data: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['QUICKGUIDE ZUM THP/SL-S'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner48, text: ['PRODUKT PROSPEKT THP/SL-S'] } } },
            { image: Images.banner49, text: 'THP/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['QUICKGUIDE ZUM THP/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner50, text: ['PRODUKT PROSPEKT THP/SL'] } } },
            { image: Images.banner51, text: 'THP/UT', data: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['QUICKGUIDE ZUM THP/UT'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner52, text: ['PRODUKT PROSPEKT THP/UT'] } } }

          ]
        },
        {
          image: Images.banner41, text: 'ANGETRIEBEN',
          data: [
            { image: Images.banner53, text: '»ADDRIVE«', data: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['QUICKGUIDE ZUM »ADDRIVE«'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner54, text: ['PRODUKT PROSPEKT »ADDRIVE«'] } } },
            { image: Images.banner56, text: 'PST/SL', data: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['QUICKGUIDE ZUM PST/SL'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner55, text: ['PRODUKT PROSPEKT PST/SL'] } } },
            { image: Images.banner57, text: 'PST/SL-E', data: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['QUICKGUIDE ZUM PST/SL-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner58, text: ['PRODUKT PROSPEKT PST/SL-E'] } } },
            { image: Images.banner59, text: 'PST/ES-E', data: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['QUICKGUIDE ZUM PST/ES-E'], otherData: { videoId: "9RM0QLDti1A", image: Images.banner60, text: ['PRODUKT PROSPEKT PST/ES-E'] } } }

          ],
          listTransport: true,

        },



      ]
    },
    {
      image: Images.banner3, text: 'SPEZIALANWENDUNGEN',
      searchText: "SPEZIALANWENDUNGEN  FTV 550 PRODUKT PROSPEKT FTV 550 »FAKTOR« 5 | »FAKTOR« 5.5 PRODUKT PROSPEKT »FAKTOR« 5 | »FAKTOR« 5.5 RA 2 RA 3 RA 4 »BLADEX« »BLADES«",
      data: [

        {
          image: Images.banner61, text: 'FTV 550', listTransport: true,
          data: { image: Images.banner62, text: ['QUICKGUIDE ZUM FTV 550'], otherData: { image: Images.banner62, text: ['PRODUKT PROSPEKT FTV 550'] }, videoId: "9RM0QLDti1A", }
        },
        {
          image: Images.banner63, text: '»FAKTOR« 5 | »FAKTOR« 5.5', data: {
            image: Images.banner64, text: ['QUICKGUIDE ZUM »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner64, text: ['PRODUKT PROSPEKT »FAKTOR« 5 | »FAKTOR« 5.5'], videoId: "eP_YC0cr0n0", }
          },

        },
        {
          image: Images.banner65, text: 'RA 2', listTransport: true,
          data: { image: Images.banner66, text: ['QUICKGUIDE ZUM RA 2'], videoId: "9RM0QLDti1A", otherData: { mage: Images.banner66, text: ['PRODUKT PROSPEKT RA 2'], videoId: "9RM0QLDti1A", }, }
        },
        {
          image: Images.banner67, text: 'RA 3', data: { image: Images.banner68, text: ['QUICKGUIDE ZUM RA 3'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner68, text: ['PRODUKT PROSPEKT RA 3'], videoId: "eP_YC0cr0n0", } },

        },
        {
          image: Images.banner69, text: 'RA 4', listTransport: true,
          data: { image: Images.banner70, text: ['QUICKGUIDE ZUM RA 4'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner70, text: ['PRODUKT PROSPEKT RA 4'], videoId: "9RM0QLDti1A" } }
        },
        {
          image: Images.banner71, text: '»BLADEX«',
          data: { image: Images.banner72, text: ['QQUICKGUIDE ZUM »BLADEX«'], videoId: "eP_YC0cr0n0", otherData: { image: Images.banner72, text: ['QPRODUKT PROSPEKT »BLADEX«'], videoId: "eP_YC0cr0n0" } }, listTransport: true,

        },
        {
          image: Images.banner73, text: '»BLADES«', listTransport: true,
          data: { image: Images.banner74, text: ['QUICKGUIDE ZUM »BLADES«'], videoId: "9RM0QLDti1A", otherData: { image: Images.banner74, text: ['PRODUKT PROSPEKT »BLADES«'], videoId: "9RM0QLDti1A" } }
        },



      ]
    },
    {
      image: Images.banner4, text: 'SOFORT VERFÜGBAR',
      searchText: "SOFORT VERFÜGBAR TU I TU-L QUICKGUIDE ZUM TU I TU-L TN-L QUICKGUIDE ZUM TN-L'",
      data: [
        {
          image: Images.banner1, text: 'LAGERFAHRZEUGE', listTransport: true,
          data: [], listTransport: true,
          linking: 'https://www.goldhofer.com/lagerfahrzeuge'

        },
        {
          image: Images.banner94, text: 'GEBRAUCHTFAHRZEUGE',
          data: [], listTransport: true,
          linking: 'https://www.goldhofer.com/gebrauchtfahrzeuge'

        }]
    },
    {
      image: Images.banner5, text: 'PARTNER', disabled: true, data: [{ image: Images.banner10, text: 'TU I TU-L', listTransport: true, data: { image: Images.banner11, text: ['QUICKGUIDE ZUM TU I TU-L'], otherData: {}, videoId: "9RM0QLDti1A", } }, {
        image: Images.banner10, text: 'TN-L', data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'], otherData: {}, videoId: "eP_YC0cr0n0", }, listTransport: true, data: { image: Images.banner12, text: ['QUICKGUIDE ZUM TN-L'], otherData: {}, videoId: "eP_YC0cr0n0", }
      }]
    }


  ])


  const [listAirport, setListAirport] = useState([
    {
      image: Images.banner13, text: 'FRACHT-/PUSHBACKSCHLEPPER',
      searchText: 'FRACHT-/PUSHBACKSCHLEPPER »SHERPA« D  DATENBLÄTTER E-MOBILITY',
      data: [{
        image: Images.banner9, text: '»SHERPA« D', listAirport: true,
        data: {
          image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D",]
          , otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"] }
        }
      },
      {
        image: Images.banner15, text: '»SHERPA« E', listAirport: true,
        data: {
          image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',]
          , otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', 'SERVICE-PROSPEKT'] }

        }
      }]
    },

    {
      image: Images.banner8, text: 'KONVENTIONELLE SCHLEPPER',
      searchText: 'KONVENTIONELLE SCHLEPPER »BISON« D FAMILIE DATENBLÄTTER »BISON« E  ',
      data: [{
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true,
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"], otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"] } }
      },
      {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true,
        data: {
          image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',], otherData: {
            image: Images.banner78, videoId: "eP_YC0cr0n0",
            text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"],
          }
        }
      }]
    },

    {
      image: Images.banner7, text: 'STANGENLOSE SCHLEPPER',
      searchText: 'STANGENLOSE SCHLEPPER  »PHOENIX« AST-2P/X DATENBLÄTTER AST-2E AST-1X ',
      data: [
        {
          image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true,
          data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"], otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"] } }
        },
        {
          image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true,
          data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',], otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", "SERVICE PROSPEKT"] } }
        },
        {
          image: Images.banner83, text: 'AST-1X', listAirport: true,
          data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',], otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"] } }
        }
      ]
    },

    {
      image: Images.banner6, text: 'FLUGZEUGBERGESYSTEME',
      searchText: 'FLUGZEUGBERGESYSTEME DOLLIES KLEINE SCHÄDEN DATENBLÄTTER KOMBINATIONSSYSTEME GROSSE',
      data: [{
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true,
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"], otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"] } }
      },
      {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true,
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',], otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT"] } }
      }]
    },

    {
      image: Images.banner5, text: 'PARTNER', disabled: true,
      searchText: 'PARTNER',
      data: [{
        image: Images.banner13, text: 'F59', listAirport: true,
        data: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"], otherData: {} }
      },
      {
        image: Images.banner15, text: 'STT', listAirport: true,
        data: { image: Images.banner15, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', 'SERVICE-PROSPEKT'], otherData: {} }
      }]
    }


  ])

  const [listAirportService, setListAirportService] = useState([
    {
      image: Images.banner13, text: 'FRACHT-/PUSHBACKSCHLEPPER',
      searchText: 'FRACHT-/PUSHBACKSCHLEPPER »SHERPA« D  DATENBLÄTTER E-MOBILITY',
      data: [{
        image: Images.banner9, text: '»SHERPA« D', listAirport: true,
        data: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"], otherData: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D",] } }
      },
      {
        image: Images.banner15, text: '»SHERPA« E', listAirport: true,
        data: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', 'SERVICE-PROSPEKT'], otherData: { image: Images.banner93, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT',] } }
      }]
    },

    {
      image: Images.banner8, text: 'KONVENTIONELLE SCHLEPPER',
      searchText: 'KONVENTIONELLE SCHLEPPER »BISON« D FAMILIE DATENBLÄTTER »BISON« E  ',
      data: [{
        image: Images.banner75, text: '»BISON« D FAMILIE', listAirport: true,
        data: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE", "SERVICE PROSPEKT"], otherData: { image: Images.banner76, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »BISON« D FAMILIE', "DATENBLÄTTER »BISON« D FAMILIE"] } }
      },
      {
        image: Images.banner77, text: '»BISON« E FAMILIE', listAirport: true,
        data: {
          image: Images.banner78, videoId: "eP_YC0cr0n0",
          text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE', "SERVICE PROSPEKT"], otherData: { image: Images.banner78, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT  »BISON« E FAMILIE', 'DATENBLÄTTER »BISON« E FAMILIE',] }
        }
      }]
    },

    {
      image: Images.banner7, text: 'STANGENLOSE SCHLEPPER',
      searchText: 'STANGENLOSE SCHLEPPER  »PHOENIX« AST-2P/X DATENBLÄTTER AST-2E AST-1X ',
      data: [
        {
          image: Images.banner79, text: '»PHOENIX« AST-2P/X', listAirport: true,
          data: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X", "SERVICE PROSPEKT"], otherData: { image: Images.banner80, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT  »PHOENIX« AST-2P/X', "DATENBLÄTTER »PHOENIX« AST-2P/X"] } }
        },
        {
          image: Images.banner81, text: '»PHOENIX« AST-2E', listAirport: true,
          data: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E', "E-MOBILITY PROSPEKT", "SERVICE PROSPEKT"], otherData: { image: Images.banner82, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »PHOENIX« AST-2E', 'DATENBLÄTTER »PHOENIX« AST-2E',] } }
        },
        {
          image: Images.banner83, text: 'AST-1X', listAirport: true,
          data: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X', "SERVICE PROSPEKT"], otherData: { image: Images.banner84, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT AST-1X', 'DATENBLÄTTER AST-1X',] } }
        }
      ]
    },

    {
      image: Images.banner6, text: 'FLUGZEUGBERGESYSTEME',
      searchText: 'FLUGZEUGBERGESYSTEME DOLLIES KLEINE SCHÄDEN DATENBLÄTTER KOMBINATIONSSYSTEME GROSSE',
      data: [{
        image: Images.banner85, text: 'DOLLIES KLEINE SCHÄDEN', listAirport: true,
        data: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN", "SERVICE PROSPEKT"], otherData: { image: Images.banner86, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN', "DATENBLÄTTER DOLLIES KLEINE SCHÄDEN"] } }
      },
      {
        image: Images.banner87, text: 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN', listAirport: true,
        data: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', "SERVICE PROSPEKT"], otherData: { image: Images.banner88, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN', 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN',] } }
      }]
    },

    // {
    //   image: Images.banner5, text: 'PARTNER',disabled:true, 
    //   searchText:'PARTNER',

    //   data: [{
    //     image: Images.banner13, text: 'F59', listAirport: true,
    //     data: { image: Images.banner14, videoId: "9RM0QLDti1A", text: ['PRODUKT PROSPEKT »SHERPA« D', "DATENBLÄTTER »SHERPA« D", "SERVICE PROSPEKT"],otherData:{} }
    //   },
    //   {
    //     image: Images.banner15, text: 'STT', listAirport: true,
    //     data: { image: Images.banner15, videoId: "eP_YC0cr0n0", text: ['PRODUKT PROSPEKT »SHERPA« E', 'DATENBLÄTTER »SHERPA« E', 'E-MOBILITY PROSPEKT', 'SERVICE-PROSPEKT'] ,otherData:{}}
    //   }]
    // }


  ])
  const navigateToTransportProducts = () => {
    navigation.navigate("ProductDetailsList", { list: listTransport })
    dispatch(ApplicationActions.onChangeContact({
      name: 'SALES TRANSPORT',
      number: '+49 8331 15-341',
      type: 'SALES TRANSPORT',
    }));

  }
  const navigateToTransportService = () => {

    navigation.navigate("ProductDetailsList", { list: listTransportSerVice })
    dispatch(ApplicationActions.onChangeContact({
      name: 'SERVICE TRANSPORT',
      number: '+49 8331 15-400',
      type: 'SERVICE TRANSPORT',
    }));

  }

  const navigateToAirPortProducts = () => {

    navigation.navigate("ProductDetailsList", { list: listAirport, })
    dispatch(ApplicationActions.onChangeContact({
      name: 'SALES AIRPORT',
      number: '+49 8331 15-343',
      type: 'SALES AIRPORT',
    }));

  }


  const navigateToAirPortService = () => {

    navigation.navigate("ProductDetailsList", { list: listAirportService, })
    dispatch(ApplicationActions.onChangeContact({
      name: 'SERVICE AIRPORT',
      number: '+49 8331 9629999',
      type: 'SERVICE AIRPORT',
    }));

  }
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
                <TouchableOpacity onPress={() => navigateToTransportProducts()} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      PRODUKT DETAILS
                    </Text>
                  </View>
                  <ArrowPng />
                  {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToTransportService()} style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      SERVICE & SUPPORT
                    </Text>
                  </View>
                  {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                  <ArrowPng />
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
                <TouchableOpacity onPress={() => navigateToAirPortProducts()} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      PRODUKT DETAILS
                    </Text>
                  </View>
                  <ArrowPng />
                  {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToAirPortService()} style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      SERVICE & SUPPORT
                    </Text>
                  </View>
                  <ArrowPng />
                  {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
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
