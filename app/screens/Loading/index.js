import { Image, Text } from "@components";
import { BaseColor, useTheme, Images, BaseSetting } from "@config";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
import { ApplicationActions } from "@actions";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useDispatch } from "react-redux";
import * as RNLocalize from "react-native-localize";
import SplashScreen from "react-native-splash-screen";

const Loading = (props) => {
  const { navigation } = props;
  const { colors } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
    const onProcess = async () => {
      // Get current language of device
      const locales = RNLocalize.getLocales();
      const { languageCode } = locales?.[0] ?? {
        languageCode: BaseSetting.defaultLanguage,
      };
      dispatch(ApplicationActions.onChangeLanguage(languageCode));

      // Config language for app
      await i18n.use(initReactI18next).init({
        resources: BaseSetting.resourcesLanguage,
        lng: languageCode,
        fallbackLng: languageCode,
      });

      navigation.replace("Main");
    };
    onProcess();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
       
      </View>
      
    </View>
  );
};

export default Loading;
