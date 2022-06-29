import { SafeAreaView, Image, Text } from "@components";
import { BaseStyle, useTheme, Images, BaseSetting } from "@config";
// Load sample data
import styles from './styles'
import React, { useEffect, useState } from "react";
import { ImageBackground, View, TouchableOpacity, ActionSheetIOS, Platform, Button } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { useDispatch, useSelector } from "react-redux";
import { ApplicationActions } from "@actions";
import { Picker } from '@react-native-picker/picker';
import * as Utils from "@utils";
import {
  listTransportServicesEnglish,
  listTransportProductEnglish,
  listTransportProductGerman,
  listTransportServicesGerman,
  listAirportProductEnglish,
  listAirportProductGerman,
  listAirportServicesEnglish,
  listAirportServicesGerman
} from './data'
const ArrowPng = () => {
  return (
    <Image source={Images.arrows} style={{ width: 20, height: 20 }} resizeMode="contain" />
  );
}


const Home = (props) => {

  const languageSelectedBysUser = useSelector((state) => state.application.language);
  const dispatch = useDispatch();
  const [result, setResult] = useState("🔮");
  const { navigation } = props;
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  const [isTransportActive, setTransPortActive] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(languageSelectedBysUser);
  const [language, setLanguage] = useState(BaseSetting.languageSupport);
  const [languageSelected, setLanguageSelected] = useState(i18n.language);
  const [listTransport, setListTransport] = useState(listTransportProductEnglish)
  const [listTransportSerVice, setListTransportService] = useState(listTransportServicesEnglish)
  // listTransportServicesEnglish, listTransportProductEnglish
  const [listAirport, setListAirport] = useState(listAirportProductEnglish)
  const [listAirportService, setListAirportService] = useState(listAirportServicesEnglish)


  useEffect(() => {
    if (languageSelectedBysUser === "en") {
      setListTransportService(listTransportServicesEnglish)
      setListTransport(listTransportProductEnglish)
      setListAirport(listAirportProductEnglish)
      setListAirportService(listAirportServicesEnglish)

    }
    else {
      setListTransportService(listTransportServicesGerman)
      setListTransport(listTransportProductGerman)
      setListAirport(listAirportProductGerman)
      setListAirportService(listAirportServicesGerman)
    }

  }, [languageSelectedBysUser])
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
  const onValueChange = (itemValue) => {

    setSelectedLanguage(itemValue)
    console.log({ itemValue })

    const oldLanguage = i18n.language;
    dispatch(ApplicationActions.onChangeLanguage(itemValue));
    i18n.changeLanguage(itemValue);

    setTimeout(() => {
      // Utils.reloadLocale(oldLanguage, itemValue);

    }, 500);
  }
  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options:  language.map((x) => Utils.languageFromCode(x)),
        destructiveButtonIndex: 3,
        cancelButtonIndex: 2,
        userInterfaceStyle: 'dark',
        tintColor:"white"
      },
      buttonIndex => {
        console.log({buttonIndex})
        if (buttonIndex === 0) {
              onValueChange("en")

          // cancel action
        } else if (buttonIndex === 1) {
          onValueChange("de")

        } else if (buttonIndex === 2) {
       

        }
      }
    );
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      <View style={{ width: "40%", position: 'absolute', top: 0, zIndex: 1, backgroundColor: 'rgba(255,255,255, 0.8)', right: 0 }}>
        {Platform.OS === "android" ? <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            onValueChange(itemValue)

          }>
          {language.map((x) => <Picker.Item label={Utils.languageFromCode(x)} value={x} />)}

          {/* <Picker.Item label="German" value="de" /> */}
        </Picker> :


         null


        }
      </View>
      <ImageBackground

        style={styles.backgroundImage}
        imageStyle={{ borderRadius: 0 }}
        source={Images.homeBackGround}>
             
           
        <View style={styles.ViewFirst} >
        {Platform.OS === "ios" &&
                  <View style={{ width: "40%", position: 'absolute', top: 0, zIndex: 1, backgroundColor: 'rgba(255,255,255, 0.8)', right: 0 }}>
            <Button color={"black"} onPress={onPress} title={Utils.languageFromCode(selectedLanguage)} />
            </View>
      }

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
              {t("TRANSPORT")}
            </Text>

            {isTransportActive === true &&
              <View style={{ width: '100%', height: 100, justifyContent: 'flex-end', }}>
                <TouchableOpacity onPress={() => navigateToTransportProducts()} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      {t("PRODUCT_DETAILS")}
                    </Text>
                  </View>
                  <ArrowPng />
                  {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToTransportService()} style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      {t("SERVICE_SUPPORT")}
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
              {t("AIRPORT")}
            </Text>
            {isTransportActive === false &&
              <View style={{ width: '100%', height: 100, justifyContent: 'flex-end', }}>
                <TouchableOpacity onPress={() => navigateToAirPortProducts()} style={{ flexDirection: "row", width: '100%', alignItems: 'center' }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      {t("PRODUCT_DETAILS")}
                    </Text>
                  </View>
                  <ArrowPng />
                  {/* <FontAwesome5 name="angle-double-right" color={"white"} size={25} /> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigateToAirPortService()} style={{ flexDirection: "row", width: '100%', alignItems: 'center', marginTop: 20 }}>
                  <View style={{ width: "60%", }}>
                    <Text headline bold whiteColor>
                      {t("SERVICE_SUPPORT")}
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
