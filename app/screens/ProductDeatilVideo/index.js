import {SafeAreaView, Image, Text, Header, Icon, TextInput} from '@components';
import {BaseStyle, useTheme, Images, BaseColor} from '@config';
// Load sample data
import styles from './styles';
import React, {useState, useMemo, useEffect, useRef} from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
  Platform,
  Alert,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import YouTube from 'react-native-youtube';
import {useDispatch} from 'react-redux';
import {ApplicationActions} from '@actions';
import YoutubePlayer from 'react-native-youtube-iframe';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const ArrowPng = () => {
  return (
    <Image
      source={Images.arrows}
      style={{width: 30, height: 30}}
      resizeMode="contain"
    />
  );
};
const BackArrowPng = () => {
  return (
    <Image
      source={Images.backArrow}
      style={{width: 20, height: 20}}
      resizeMode="contain"
    />
  );
};
function renderFooter() {
  const contact = useSelector(state => state.application.contact);
  const {colors} = useTheme();
  const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <TouchableOpacity
      onPress={() => callNumber(contact.number)}
      style={{
        width: '95%',
        flexDirection: 'row',
        maxHeight: 120,
        marginTop: 20,
        alignSelf: 'center',
        borderTopEndRadius: 55,
        borderTopLeftRadius: 55,
        backgroundColor: '#E5EAED',
      }}>
      <View
        style={{
          borderTopLeftRadius: 55,
          backgroundColor: 'black',
          width: 100,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={Images.G} style={styles.manImage} resizeMode="stretch" />
      </View>
      <View style={{width: '70%', alignItems: 'center', marginTop: 10}}>
        <View style={{width: '80%'}}>
          <Text style={{marginTop: 10}} headline bold blackColor>
            {contact.name}
          </Text>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 14}} blackColor>
              Tel.: {contact.number}
            </Text>
            {contact.email && (
              <Text style={{fontSize: 14}} blackColor>
                Email.: {contact.email}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function ProductDetailsList(props) {
  const dispatch = useDispatch();
  const languageSelectedBysUser = useSelector(
    state => state.application.language,
  );
  const contact = useSelector(state => state.application.contact);
  const {navigation} = props;
  const youTubeRef = useRef();
  const {params} = props.route;
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [isRendered, setIsRendered] = useState(null);
  const [videoId, setvideoId] = useState(null);
  const [playListArr, setPlayListArr] = useState([]);
  const [list, setList] = useState({
    image: '',
    text: [],
    videoId: null,
  });
  const [linkList, setLinkList] = useState([]);
  const [showLinkList, setShowLinkList] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isServiceType, SetisServiceType] = useState('');
  const [txt, setText] = useState(undefined);
  const [playerHeight, setPlayerHeight] = useState('100%');
  const [state, setState] = useState({
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: false,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
  });

  useEffect(() => {
    if (languageSelectedBysUser === 'en') {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
  }, [languageSelectedBysUser]);
  useEffect(() => {
    console.log({xxx: params.text, isServiceType: contact.name});

    if (params) {
      setText(params.text);
      setList(params.item);

      if (contact.name === 'SERVICE AIRPORT') {
        const playListId = getPlaylistServiceVideoId(params.text);
        if (playListId) {
          getVideo(playListId);
        }
      } else if (contact.name === 'SALES AIRPORT') {
        const playListId = getPlaylistProductVideoId(params.text);
        if (playListId) {
          getVideo(playListId);
        }
      } else if (contact.name === 'SALES TRANSPORT') {
        const playListId = getPlaylistProductVideoId(params.text);
        if (playListId) {
          getVideo(playListId);
        }
      } else if (contact.name === 'SERVICE TRANSPORT') {
        const playListId = getPlaylistServiceVideoId(params.text);
        if (playListId) {
          getVideo(playListId);
        }
      }
    }
    if (contact.type) {
      SetisServiceType(contact.type);
    }
  }, [params, contact]);

  const getVideo = id => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${id}&key=AIzaSyAfOlpt6icgYuSUVVu8yXR-TJVoQ16bC3A`;
    // console.log({ url })
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=${id}&key=AIzaSyAfOlpt6icgYuSUVVu8yXR-TJVoQ16bC3A&maxResults=50`,
    )
      .then(res => res.json())
      .then(json => {
        if (json.items && json.items.length > 0) {
          // console.log({ json: json.items[0].snippet.resourceId.videoId , jsons:json})
          setvideoId(json.items[0].snippet.resourceId.videoId);
          let arr = json.items.map(data => {
            data['play'] = false;

            return data;
          });
          setPlayListArr([...arr]);
        }
      });
  };

  const changeServiceType = () => {
    if (contact.name === 'SALES TRANSPORT') {
      dispatch(
        ApplicationActions.onChangeContact({
          name: 'SERVICE TRANSPORT',
          number: '+49 8331 15-400',
          type: 'SERVICE TRANSPORT',
        }),
      );
    } else if (contact.name === 'SERVICE TRANSPORT') {
      dispatch(
        ApplicationActions.onChangeContact({
          name: 'SALES TRANSPORT',
          number: '+49 8331 15-341',
          type: 'SALES TRANSPORT',
        }),
      );
    } else if (contact.name === 'SALES AIRPORT') {
      dispatch(
        ApplicationActions.onChangeContact({
          name: 'SERVICE AIRPORT',
          number: '+49 8331 9629999',
          type: 'SERVICE AIRPORT',
        }),
      );
    } else if (contact.name === 'SERVICE AIRPORT') {
      dispatch(
        ApplicationActions.onChangeContact({
          name: 'SALES AIRPORT',
          number: '+49 8331 15-343',
          type: 'SALES AIRPORT',
        }),
      );
    }
    setIsRendered(null);
    navigation.navigate('ProductDeatilVideoLink', {
      item: list.otherData,
      otherData: list,
      text: params.text,
    });
  };

  useEffect(() => {
    return () => {
      setvideoId(null);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        setIsRendered(true);
      }, 100);
    }, []),
  );

  const onPressRight = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Main'}],
    });
  };

  const getPdfLink = txt => {
    console.log({txt});
    txt = txt.trim();
    if (
      txt === 'PRODUKT PROSPEKT SPZ-L | SPZ-GL | SPZ-H' ||
      txt === 'PRODUCT BROCHURE SPZ-L | SPZ-GL | SPZ-H'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN//SPZ_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/SPZ_DE-A4.pdf';
      }
    } else if (txt == 'ACCESSORIES BROCHURE' || txt == 'ZUBEHÖR-BROSCHÜRE') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/Accessories-EU_EN_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/Accessories-EU_DE_A4.pdf';
      }
    } else if (
      txt == 'PRODUCT BROSCHÜRE TRAILSTAR' ||
      txt == 'PRODUCT BROCHURE TRAILSTAR'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=4002';
      } else {
        return 'https://www.goldhofer.com/?pdf=4002';
      }
    } else if (
      txt ==
        'PRODUCT BROCHURE SELF-TRACKING DOLLY COMBINATION FOR LONG LOADS' ||
      txt == 'PRODUKT BROSCHÜRE NACHLÄUFERKOMBINATION FÜR LANGMATERIAL'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/Self-tracking_Dolly_EN_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/Nachlaeufer_DE_A4.pdf';
      }
    } else if (
      txt == 'PRODUCT BROCHURE »FT SERIES«' ||
      txt == 'PRODUKT BROSCHÜRE »FT SERIES«'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/FT_SERIES_EN-A4_2022.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/FT_SERIES_DE-A4_2022.pdf';
      }
    } else if (txt == 'PRODUCT BROCHURE THP/DC') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Modules_US_EN_imp-USletter.pdf';
      }
    } else if (
      txt == 'PRODUCT BROCHURE THP/DR' ||
      txt == 'PRODUCT BROCHURE THP/CA' ||
      txt == 'PRODUCT BROCHURE THP/HL-L & THP/HL'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (txt == 'PRODUCT BROCHURE P12 PLUS') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (
      txt == 'SERVICE BROCHURE STZ-VL3' ||
      txt == 'SERVICE BROCHURE STZ-P 9' ||
      txt == 'SERVICE BROCHURE STZ-P 12 PLUS' ||
      txt == 'SERVICE BROCHURE THP/CA' ||
      txt == 'PRODUCT BROCHURE THP/DR' ||
      txt == 'SERVICE BROCHURE THP/DC' ||
      txt == 'SERVICE BROCHURE THP/HL-L & THP/HL'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Vehicle-Overhaul_EN_imp-USletter.pdf';
      }
    } else if (txt == 'PRODUCT BROCHURE P12 PLUS') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (txt == 'PRODUCT BROCHURE STZ-P 9') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (txt == 'PRODUCT BROCHURE »MPA« 6') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STZ-L | STZ-H' ||
      txt == 'PRODUCT BROCHURE STZ-L | STZ-H'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-L_STZ-H_MPA_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/prospekte/STZ-L_STZ-H_MPA_DE-A4.pdf';
      }
    } else if (txt === 'PRODUCT BROCHURE STZ-VL 3') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (txt === 'PRODUCT BROCHURE SPZ-L | SPZ-GL') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/NA_Semitrailer_EN_imp-USletter.pdf';
      }
    } else if (
      txt === 'PRODUKT PROSPEKT SPZ-GP' ||
      txt === 'PRODUCT BROCHURE SPZ-GP'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/SPZ_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/SPZ_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »VENTUM«' ||
      txt == 'PRODUCT BROCHURE »VENTUM«'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/SPZ_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/SPZ_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »ARCUS« P | »ARCUS« PK' ||
      txt == 'PRODUCT BROCHURE »ARCUS« P | »ARCUS« PK'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/ARCUS-P-PK_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/ARCUS-P-PK_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STZ-L | STZ-H | »MPA«' ||
      txt == 'PRODUCT BROCHURE STZ-L | STZ-H | »MPA«'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-L_STZ-H_MPA_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/STZ-L_STZ-H_MPA_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STZ-L | »MPA« MIT RADMULDE' ||
      txt == 'PRODUCT BROCHURE STZ-L | »MPA« WITH WHEEL RECESS'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-L_STZ-H_MPA_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/STZ-L_STZ-H_MPA_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STZ-VL | STZ-VH' ||
      txt == 'PRODUCT BROCHURE STZ-VL | STZ-VH'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-VL_STZ-VH_MPA-V_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/STZ-VL_STZ-VH_MPA-V_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »MPA« V' ||
      txt == 'PRODUCT BROCHURE »MPA« V'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-VL_STZ-VH_MPA-V_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/STZ-VL_STZ-VH_MPA-V_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STZ-VP (245)' ||
      txt == 'PRODUCT BROCHURE STZ-VP (245)'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-VP_245-285_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/STZ-VP_245-285_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STZ-VP (285)' ||
      txt == 'PRODUCT BROCHURE STZ-VP (285)'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/STZ-VP_245-285_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/STZ-VP_245-285_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT THP/ET' ||
      txt == 'PRODUCT BROCHURE THP/ET'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT THP/UT' ||
      txt == 'PRODUCT BROCHURE THP/UT'
    ) {
      if (isEnglish) {
        return 'http://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_EN-A4.pdf';
      } else {
        return 'http://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT THP/MT' ||
      txt == 'PRODUCT BROCHURE THP/MT'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/prospekte/THP-ET-UT-MT_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT THP/SL-S' ||
      txt == 'PRODUCT BROCHURE THP/SL-S'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/THP_SL-S_SL-L_SL_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/THP_SL-S_SL-L_SL_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT THP/SL-L' ||
      txt == 'PRODUCT BROCHURE THP/SL-L'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/THP_SL-S_SL-L_SL_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/THP_SL-S_SL-L_SL_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT THP/SL' ||
      txt == 'PRODUCT BROCHURE THP/SL'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/THP_SL-S_SL-L_SL_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/THP_SL-S_SL-L_SL_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »ADDRIVE«' ||
      txt == 'PRODUCT BROCHURE »ADDRIVE«'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/ADDRIVE_PST-SL_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/ADDRIVE_PST-SL_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT PST/SL' ||
      txt == 'PRODUCT BROCHURE PST/SL'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/ADDRIVE_PST-SL_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/ADDRIVE_PST-SL_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT PST/SL-E' ||
      txt == 'PRODUCT BROCHURE PST/SL-E'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/PST-ES-E_PST-SL-E_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/PST-ES-E_PST-SL-E_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT PST/ES-E' ||
      txt == 'PRODUCT BROCHURE PST/ES-E'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/PST-ES-E_PST-SL-E_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/PST-ES-E_PST-SL-E_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT FTV 850' ||
      txt == 'PRODUCT BROCHURE FTV 850'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/FTV-850_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/FTV-850_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT FTV 550' ||
      txt == 'PRODUCT BROCHURE FTV 550'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/FTV-550-850_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/FTV-550-850_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT BROSCHÜRE WINDKRAFT' ||
      txt == 'PRODUCT BROCHURE WIND POWER'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/Wind-Energy_Transport-Solutions-Goldhofer_EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/Wind-Energy_Transport-Solutions-Goldhofer_DE.pdf';
      }
    } else if (
      txt == 'DATENBLÄTTER »FAKTOR« 5 | »FAKTOR« 5.5' ||
      txt == 'TECHNICAL DATA »FAKTOR« 5 | »FAKTOR« 5.5'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/Faktor5_Faktor5-5_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/Faktor5_Faktor5-5_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT BROSCHÜRE »BLADES«' ||
      txt == 'PRODUCT BROCHURE »BLADES«'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/BladeS_EN-A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/BladeS_DE-A4.pdf';
      }
    } else if (
      txt == 'PRODUKT BROSCHÜRE RA 2' ||
      txt == 'PRODUCT BROCHURE RA 2'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/RA-2_RA-3_RA-4_EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/RA-2_RA-3_RA-4_DE.pdf';
      }
    } else if (
      txt == 'PRODUKT BROSCHÜRE RA 3' ||
      txt == 'PRODUCT BROCHURE RA 3'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/RA-2_RA-3_RA-4_EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/RA-2_RA-3_RA-4_DE.pdf';
      }
    } else if (
      txt == 'PRODUKT BROSCHÜRE RA 4' ||
      txt == 'PRODUCT BROCHURE RA 4'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/EN/RA-2_RA-3_RA-4_EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_TT/DE/RA-2_RA-3_RA-4_DE.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT STEPSTAR' ||
      txt == 'PRODUCT BROCHURE STEPSTAR'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/STAR/05_Broschuere/Quickguide_Stepstar_DE-EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin/STAR/05_Broschuere/Quickguide_Stepstar_DE-EN.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »SHERPA« D' ||
      txt == 'PRODUCT BROCHURE »SHERPA« D'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=1780';
      } else {
        return 'https://www.goldhofer.com/?pdf=2595';
      }
    } else if (
      txt == 'DATENBLÄTTER »SHERPA« D' ||
      txt == 'TECHNICAL DATA »SHERPA« D'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_SHERPA-FAMILY_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_SHERPA-FAMILY_EN-met_A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »SHERPA« E' ||
      txt == 'PRODUCT BROCHURE »SHERPA« E'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=1780';
      } else {
        return 'https://www.goldhofer.com/?pdf=2595';
      }
    } else if (
      txt == 'DATENBLÄTTER »SHERPA« E' ||
      txt == 'TECHNICAL DATA »SHERPA« E'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_SHERPA-E-FAMILY_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_SHERPA-E-FAMILY_EN-met_A4.pdf';
      }
    } else if (txt == 'E-MOBILITY PROSPEKT' || txt == 'E-MOBILITY BROCHURE') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=1767';
      } else {
        return 'https://www.goldhofer.com/?pdf=1766';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »BISON« D FAMILIE' ||
      txt == 'PRODUCT BROCHURE »BISON« D FAMILY'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=1792';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/DE/BISON-FAMILY_DE-met_A4.pdf';
      }
    } else if (
      txt == 'DATENBLÄTTER »BISON« D FAMILIE' ||
      txt == 'TECHNICAL DATA »BISON« D FAMILY'
    ) {
      setShowLinkList(!showLinkList);
      let arr = [
        {
          name: '»BISON« D 370',
          link: 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_BISON-D370_EN-met_A4.pdf',
        },
        {
          name: '»BISON« D 620',
          link: 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_BISON-D620_EN-met_A4.pdf',
        },
        {
          name: ' »BISON« D 1000',
          link: 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_BISON-D1000_EN-met_A4.pdf',
        },
        {
          name: '»BISON« D 1500',
          link: 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_BISON-D1500_EN-met_A4.pdf',
        },
      ];

      setLinkList([...arr]);
      return 'ss';
    } else if (
      txt == 'PRODUKT PROSPEKT  »BISON« E FAMILIE' ||
      txt == 'PRODUCT BROCHURE  »BISON« E FAMILY'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=1792';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/DE/BISON-FAMILY_DE-met_A4.pdf';
      }
    } else if (
      txt == 'DATENBLÄTTER »BISON« E FAMILIE' ||
      txt == 'TECHNICAL DATA »BISON« E FAMILY'
    ) {
      setShowLinkList(!showLinkList);
      let arr = [
        {
          link: 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_BISON-E370_EN-met_A4.pdf',
          name: '»BISON« E 370',
        },
        {
          link: 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_BISON-E620_EN-met_A4.pdf',
          name: '»BISON« E 620',
        },
      ];

      setLinkList([...arr]);
      return 'ss';
    } else if (
      txt == 'PRODUKT PROSPEKT  »PHOENIX« AST-2P/X' ||
      txt == 'PRODUCT BROCHURE  »PHOENIX« AST-2P/X'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=4318';
      } else {
        return 'https://www.goldhofer.com/?pdf=4317';
      }
    } else if (
      txt == 'DATENBLÄTTER »PHOENIX« AST-2P/X' ||
      txt == 'TECHNICAL DATA »PHOENIX« AST-2P/X'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_PHOENIX_AST-2P-X_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_PHOENIX_AST-2P-X_EN-met_A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT »PHOENIX« AST-2E' ||
      txt == 'PRODUCT BROCHURE »PHOENIX« AST-2E'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/?pdf=4318';
      } else {
        return 'https://www.goldhofer.com/?pdf=4317';
      }
    } else if (
      txt == 'DATENBLÄTTER »PHOENIX« AST-2E' ||
      txt == 'TECHNICAL DATA »PHOENIX« AST-2E'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_PHOENIX_AST-2E_EN-met_A4_01.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_PHOENIX_AST-2E_EN-met_A4_01.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT AST-1X' ||
      txt == 'PRODUCT BROCHURE AST-1X'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/EN/AST-1X_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/DE/AST-1X_DE-met_A4.pdf';
      }
    } else if (txt == 'DATENBLÄTTER AST-1X' || txt == 'TECHNICAL DATA AST-1X') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_AST-1X_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/Data_Sheets/DS_AST-1X_EN-met_A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT DOLLIES KLEINE SCHÄDEN' ||
      txt == 'PRODUCT BROCHURE DOLLIES - MINOR DAMAGE'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/EN/ARTS_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/DE/ARTS_DE-met_A4.pdf';
      }
    } else if (
      txt == 'PRODUKT PROSPEKT KOMBINATIONSSYSTEME GROSSE SCHÄDEN' ||
      txt == 'PRODUCT BROCHURE COMBINATION SYSTEMS - MAJOR DAMAGE'
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/EN/ARTS_EN-met_A4.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin//downloads/BRO_AT/DE/ARTS_DE-met_A4.pdf';
      }
    } else if (
      txt == "'QUICKGUIDE ZUM STEPSTAR" ||
      txt == "'QUICKGUIDE ZUM STEPSTAR"
    ) {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/Quickguide_Stepstar_DE-EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/Quickguide_Stepstar_DE-EN.pdf';
      }
    } else if (txt == 'QUICKGUIDE »TRAILSTAR«') {
      if (isEnglish) {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/Qucikguide_Trailstar_DE-EN.pdf';
      } else {
        return 'https://www.goldhofer.com/fileadmin/downloads/prospekte/Qucikguide_Trailstar_DE-EN.pdf';
      }
    }
  };

  const openPdf = txt => {
    let PDFLink = getPdfLink(txt);
    console.log({PDFLink});
    if (PDFLink) {
      Linking.canOpenURL(PDFLink)
        .then(supported => {
          if (!supported) {
          } else {
            return Linking.openURL(PDFLink);
          }
        })
        .catch(err => console.log(err));
    } else {
      return Linking.openURL(
        'https://www.goldhofer.com/fileadmin/downloads/prospekte/Quickguide_Stepstar_DE-EN.pdf',
      );
      // alert('PDF is not available');
    }
  };

  const openPdf2 = link => {
    if (link) {
      Linking.canOpenURL(link)
        .then(supported => {
          if (!supported) {
          } else {
            return Linking.openURL(link);
          }
        })
        .catch(err => console.log(err));
    } else {
      alert('PDF is not available');
    }
  };

  const getPlaylistProductVideoId = txt => {
    console.log({txt});
    if (txt === 'SPZ-L | SPZ-GL | SPZ-H') {
      return 'PLPP-gBF73hLPD9LtfobjLdAEcGJwIujnZ';
    } else if (txt == 'SPZ-GP') {
      return 'PLPP-gBF73hLPn2ihSCi09q9sirGB691Rn';
    } else if (txt == '»VENTUM«') {
      return 'PLPP-gBF73hLNEn5y12OByzw5P3Wv733Yi';
    } else if (txt == 'STEPSTAR') {
      return 'PLPP-gBF73hLM8ISAtWciP6QoWoKZRJIuU';
    } else if (txt == '»ARCUS« P | »ARCUS« PK') {
      return 'PLPP-gBF73hLMGGKk62KFWvTsPBzmIFn0T';
    } else if (txt == 'STZ-L | STZ-H | »MPA«') {
      return 'PLPP-gBF73hLOEIWZR1YGRwz4VKwUcRseY';
    } else if (
      txt == 'STZ-L | »MPA« MIT RADMULDE' ||
      txt == 'STZ-L | »MPA« WITH WHEEL RECESS'
    ) {
      return 'PLPP-gBF73hLOEIWZR1YGRwz4VKwUcRseY';
    } else if (txt == 'STZ-VL | STZ-VH') {
      return 'PLPP-gBF73hLP2aLrwMBqlSrrKY4sR0o0z';
    } else if (txt == '»MPA« V') {
      return 'PLPP-gBF73hLP__WTK2jepPZLIrnqSbdwu';
    } else if (txt == 'STZ-VP (245)') {
      return 'PLPP-gBF73hLPI2LlgZ6tAxF0Z1sHPC8nF';
    } else if (txt == 'STZ-VP (285)') {
      return 'PLPP-gBF73hLPisIH1-tmIsxF64kopMu-G';
    } else if (txt == 'THP/ET') {
      return 'PLPP-gBF73hLOl_FFEBn7FPVPZFgfN1JzI';
    } else if (txt == 'THP/UT') {
      return 'PLPP-gBF73hLO1Vh237ETwyIaggnnqvXaM';
    } else if (txt == 'THP/MT') {
      return 'PLPP-gBF73hLNeRbjqYK4sKojfkM1a0sZJ';
    } else if (txt == 'THP/SL-S') {
      return 'PLPP-gBF73hLOACHMH2JEKWtygDkVbu-gz';
    } else if (txt == 'THP/SL-L') {
      return 'PLPP-gBF73hLMbGWcfuPY45wlvshSr3y02';
    } else if (txt == 'THP/SL') {
      return 'PLPP-gBF73hLMEpbX8bbCZ-P7wMlB8S7af';
    } else if (txt == '»ADDRIVE«') {
      return 'PLPP-gBF73hLNYwwjcpe3KRTHqltrYIcos';
    } else if (txt == 'PST/SL') {
      return 'PLPP-gBF73hLMxhhcHDIfUoIcWRCNIA0t7';
    } else if (txt == 'PST/SL-E') {
      return 'PLPP-gBF73hLM8p6hxLqGXpZbHOc6vqTZU';
    } else if (txt == 'PST/ES-E') {
      return 'PLPP-gBF73hLOH4Y9FN78Cz7sG8J8zBk70';
    } else if (txt == 'FTV 550') {
      return 'PLPP-gBF73hLOJbyEwtCKwCly7dKAVDb5d';
    } else if (txt == '»FAKTOR« 5 | »FAKTOR« 5.5') {
      return 'PLPP-gBF73hLPUjUrZiQdEKEi8Sxnjt0io';
    } else if (txt == 'RA 2') {
      return 'PLPP-gBF73hLO4sltdttNDDuGxdgiUpYZR';
    } else if (txt == 'RA 3') {
      return 'PLPP-gBF73hLOz4M4poYfrWLMqHDK6PqDj';
    } else if (txt == 'RA 4') {
      return 'PLPP-gBF73hLNKegUCMeILLMk9FmUeG6zo';
    } else if (txt == '»BLADES«') {
      return 'PLPP-gBF73hLOnSblANOcUnSIYyys6k_T5';
    } else if (txt == '»BLADEX«') {
      return 'PLPP-gBF73hLN_h7mYbLc--B4wk0yoX0z6';
    } else if (txt == '»SHERPA« D') {
      return 'PLPB7BeGg23SqJOSe8-6sorJp3TjhHCmHK';
    } else if (txt == '»SHERPA« E') {
      return 'PLPB7BeGg23SrkB9R0A6-lAA0Hp83WpwIG';
    } else if (txt == '»BISON« D FAMILIE') {
      // return "PLPB7BeGg23SovWix2nfV01H_pWzftVBrs"
      return 'PLPB7BeGg23Sr4u8hHEmoBJBeTV-ImBEN-';
    } else if (txt == '»BISON« E FAMILIE') {
      return 'PLPB7BeGg23SoQqp0T3wgD1pOBRjfH-OP9';
    } else if (txt == '»PHOENIX« AST-2P/X') {
      return 'PLPB7BeGg23SpGnrDQfRPu-7EoH1__451w';
    } else if (txt == '»PHOENIX« AST-2E') {
      return 'PLPB7BeGg23Sr2Kv8bpN-zWRdvJqqIBoSI';
    } else if (txt == 'AST-1X') {
      return 'PLPB7BeGg23Sr4YjBaN5DDwFAco9B8gtFi';
    } else if (txt == 'DOLLIES KLEINE SCHÄDEN' || 'DOLLIES - MINOR DAMAGE') {
      return 'PLPB7BeGg23SqSx_012cu3CP_6y_ku32e4';
    } else if (
      txt == 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN' ||
      'COMBINATION SYSTEMS - MAJOR DAMAGE'
    ) {
      return 'PLPB7BeGg23SqIKYKL8qvj5IvsiWSXzrkf';
    }
  };
  const getPlaylistServiceVideoId = txt => {
    // console.log({ txt })
    if (txt === 'SPZ-L | SPZ-GL | SPZ-H') {
      return 'PLPP-gBF73hLMy-EbARpkRE6htTOYvpxCj';
    } else if (txt == 'SPZ-GP') {
      return 'PLPP-gBF73hLNevJnEECS7KL70mhl0-I7f';
    } else if (txt == '»VENTUM«') {
      return 'PLPP-gBF73hLNhPWANb0VK2PHGlQAScHPY';
    } else if (txt == 'STEPSTAR') {
      return 'PLPP-gBF73hLNGQ6CJCjOJQ2QNaw9g13fW';
    } else if (txt == '»ARCUS« P | »ARCUS« PK') {
      return 'PLPP-gBF73hLMMhPyKbKQ-EX9OreMor3FY';
    } else if (txt == 'STZ-L | STZ-H | »MPA«') {
      return 'PLPP-gBF73hLMY5mVFN7Xmbv-V5sFwDsDK';
    } else if (
      txt == 'STZ-L | »MPA« MIT RADMULDE' ||
      txt == 'STZ-L | »MPA« WITH WHEEL RECESS'
    ) {
      return 'PLPP-gBF73hLNkudzg1wSBxOeCCMK9Aj2n';
    } else if (txt == 'STZ-VL | STZ-VH') {
      return 'PLPP-gBF73hLNiZxE1m98oVApEccUnlJcw';
    } else if (txt == '»MPA« V') {
      ('PLPP-gBF73hLOGhiR5rg8hWUls9_UFtVjl');
    } else if (txt == 'STZ-VP (245)') {
      return 'PLPP-gBF73hLPy9y8D2KdQr7xoYiO3JlJJ';
    } else if (txt == 'STZ-VP (285)') {
      return 'PLPP-gBF73hLOm1GwRFuhTqFIoo1QH0eH_';
    } else if (txt == 'THP/ET') {
      return 'PLPP-gBF73hLNZK6-GPdyPZr-TmKL2YNvw';
    } else if (txt == 'THP/UT') {
      return 'PLPP-gBF73hLPIrKho3UMA7ayQxw_AluYP';
    } else if (txt == 'THP/MT') {
      return 'PLPP-gBF73hLO4Pi-7kRSLE4C9pxsg_edH';
    } else if (txt == 'THP/SL-S') {
      return 'PLPP-gBF73hLM4yY6IGQg5XcH0xCRRq5sP';
    } else if (txt == 'THP/SL-L') {
      return 'PLPP-gBF73hLNria-9eAVB9i9WrQwE9M6t';
    } else if (txt == 'THP/SL') {
      return 'PLPP-gBF73hLOi7M_n8QtmIYyfFj5LRztO';
    } else if (txt == '»ADDRIVE«') {
      return 'PLPP-gBF73hLOZdZ2S2RVUsyHhApi0VcfH';
    } else if (txt == 'PST/SL') {
      return 'PLPP-gBF73hLPJUYT1lXVDmlLOnuilUYVs';
    } else if (txt == 'PST/SL-E') {
      return 'PLPP-gBF73hLObmLPm4EBShLVwFE_ilYr9';
    } else if (txt == 'PST/ES-E') {
      return 'PLPP-gBF73hLNyfQ6GXYLVpWeC-oiD2fZL';
    } else if (txt == 'FTV 550') {
      return 'PLPP-gBF73hLMXROTaliN1-zA99Uds1rcn';
    } else if (txt == '»FAKTOR« 5 | »FAKTOR« 5.5') {
      return 'PLPP-gBF73hLOd00d2FGTocoe3XdkcA2bH';
    } else if (txt == 'RA 2') {
      return 'PLPP-gBF73hLOxkk77DOf_8v56S8Z1FsPQ';
    } else if (txt == 'RA 3') {
      return 'PLPP-gBF73hLNQllxr5uBZIZOs2xFOZyJa';
    } else if (txt == 'RA 4') {
      return 'PLPP-gBF73hLN31psDymSQn34wQmOXw7SV';
    } else if (txt == '»BLADES«') {
      return 'PLPP-gBF73hLOOWDAcUKXAypiwOf4jLrvB';
    } else if (txt == '»BLADEX«') {
      return 'PLPP-gBF73hLOQYe7hqocKCkYEx30LLfyG';
    } else if (txt == '»SHERPA« D') {
      return 'PLPB7BeGg23SoDGQoxghw20_cJErEHfMUe';
    } else if (txt == '»SHERPA« E') {
      return 'PLPB7BeGg23Sol5Ag5SD33Prhp46n05Viy';
    } else if (txt == '»BISON« D FAMILIE') {
      return 'PLPB7BeGg23SrUE6bhTfQUdz7tp1Rkt6DK';
    } else if (txt == '»BISON« E FAMILIE') {
      return 'PLPB7BeGg23Sp9FlO8YP8lToMIPhwgxnGJ';
    } else if (txt == '»PHOENIX« AST-2P/X') {
      return 'PLPB7BeGg23SpZSqoObs7zdM8s7Nu3cx2F';
    } else if (txt == '»PHOENIX« AST-2E') {
      return 'PLPB7BeGg23SqUj2ZArL-DHY8TAIDD4hE9';
    } else if (txt == 'AST-1X') {
      return 'PLPB7BeGg23SohP4JsrK3gwv9oNzbCp1AE';
    } else if (txt == 'DOLLIES KLEINE SCHÄDEN' || 'DOLLIES - MINOR DAMAGE') {
      return 'PLPB7BeGg23SrH2hMik_rCrS2zOehmPKqT';
    } else if (
      txt == 'KOMBINATIONSSYSTEME GROSSE SCHÄDEN' ||
      'COMBINATION SYSTEMS - MAJOR DAMAGE'
    ) {
      return 'PLPB7BeGg23SqX6i0DQhuCIUgD_kNnwYSa';
    }
  };
  return (
    <SafeAreaView
      style={{...BaseStyle.safeAreaView, backgroundColor: '#D2D9DE'}}
      edges={['right', 'top', 'left']}>
      <Header
        style={{backgroundColor: 'black'}}
        title=""
        renderLeft={() => {
          return (
            <View
              style={{
                flexDirection: 'row',
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <FontAwesome5 name="angle-double-left" color={"white"} size={25} /> */}
              <BackArrowPng />
              <Text style={{marginLeft: 10}} headline bold whiteColor>
                {t('BACK')}
              </Text>
            </View>
          );
        }}
        renderRight={() => {
          return (
            <Image
              source={Images.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          );
        }}
        onPressRight={onPressRight}
        onPressLeft={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 420,
            backgroundColor: 'black',
          }}>
          <Image
            source={list.image}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <View style={{width: '100%', marginTop: -2}}>
          {txt === '»BLADEX«' && list.text.length !== 0 && (
            <View
              onPress={() => openPdf(txt)}
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'black',
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <View style={{width: '100%', marginTop: 2}}>
                <Text headline bold whiteColor>
                  {txt}
                </Text>
              </View>
            </View>
          )}
        </View>
        <View style={{width: '100%', marginTop: -2}}>
          {list.text.map((txt, i) => {
            return (
              <TouchableOpacity
                onPress={() => openPdf(txt)}
                key={i}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  backgroundColor: 'black',
                  padding: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <View style={{width: '90%', marginTop: 2}}>
                  <Text headline bold whiteColor>
                    {txt}
                  </Text>
                </View>
                <View style={{width: '10%'}}>
                  <ArrowPng />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{width: '100%', marginTop: -2}}>
          {list.text.length === 0 && txt && (
            <View
              onPress={() => openPdf(txt)}
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'black',
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 5,
              }}>
              <View style={{width: '100%', marginTop: 2}}>
                <Text headline bold whiteColor>
                  {txt}
                </Text>
              </View>
            </View>
          )}
        </View>

        {showLinkList && (
          <View style={{width: '100%', marginTop: -2}}>
            {linkList.map((txt, i) => {
              return (
                <TouchableOpacity
                  onPress={() => openPdf2(txt.link)}
                  key={i}
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    backgroundColor: 'black',
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text headline bold whiteColor>
                    {txt.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
          <Text headline bold blackColor>
            {isServiceType === 'SERVICE AIRPORT'
              ? t('TRAINING_VIDEOS')
              : isServiceType === 'SERVICE TRANSPORT'
              ? t('TRAINING_VIDEOS')
              : t('PRODUCT_VIDEOS')}
          </Text>
          <Text blackColor>{t('FROM_A_Z')}</Text>
        </View>

        {isRendered && videoId && (
          <View
            style={{
              width: '100%',
              marginTop: 20,
              height: Platform.OS === 'android' ? 350 : 270,
              backgroundColor: 'black',
            }}>
            <YoutubePlayer
              height={Platform.OS === 'android' ? 350 : 270}
              videoId={videoId}
            />
          </View>
        )}

        {playListArr.length > 1 && (
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ScrollView horizontal>
              <Text style={{marginLeft: 10}}>Playlist</Text>
              {playListArr.map(data => {
                return (
                  <TouchableOpacity
                    onPress={() => setvideoId(data.snippet.resourceId.videoId)}
                    style={{margin: 5, width: 150, padding: 5}}>
                    <Image
                      source={{uri: data?.snippet?.thumbnails?.default?.url}}
                      style={{width: 150, height: 150, borderRadius: 20}}
                      resizeMode="contain"
                    />

                    <Text style={{textAlign: 'center'}}>
                      {data.snippet.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* <TouchableOpacity onPress={() => changeServiceType()} style={{ width: '95%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', backgroundColor: 'black', padding: 15, justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: "90%", marginTop: 2 }}>
                        <Text headline bold whiteColor>
                            {isServiceType === "SERVICE AIRPORT" ? "TECHNISCHE VIDEOS" : isServiceType === "SERVICE TRANSPORT" ? "TECHNISCHE VIDEOS" : "EINSATZ VIDEOS"}
                        </Text>
                    </View>
                    <View style={{ width: "10%", }}>

                        <ArrowPng />
                    </View>
                </TouchableOpacity> */}

        <TouchableOpacity
          onPress={() => changeServiceType()}
          style={{
            width: '100%',
            alignSelf: 'center',
            marginTop: 5,
            flexDirection: 'row',
            backgroundColor: 'black',
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: '90%', marginTop: 2}}>
            <Text headline bold whiteColor>
              {isServiceType === 'SERVICE AIRPORT'
                ? t('PRODUCT_VIDEOS_MORE')
                : isServiceType === 'SERVICE TRANSPORT'
                ? t('PRODUCT_VIDEOS_MORE')
                : t('SERVICE_VIDEOS_MORE')}
            </Text>
          </View>
          <View style={{width: '10%'}}>
            <ArrowPng />
          </View>
        </TouchableOpacity>
        {renderFooter()}
      </ScrollView>
    </SafeAreaView>
  );
}
