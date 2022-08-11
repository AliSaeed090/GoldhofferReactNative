import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo, useEffect } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl, Linking, ActivityIndicator } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import RenderList from "./RenderList"
import Svg, { Rect } from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { WebView } from 'react-native-webview';
import { requestTrackingPermission, getTrackingStatus } from 'react-native-tracking-transparency'

export default function News(props) {
  const languageSelectedBysUser = useSelector((state) => state.application.language);


  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [isLoading, setloisLoading] = useState(null)


  const [allowed, setAllowed] = useState(false);
  const [search, setsearch] = useState("");
  const filter = (text) => {
    setsearch(text);
    if (text) {

    } else {

    }
  };
  const askPermission = async () => {
    const trackingStatus = await requestTrackingPermission();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      // enable tracking features
      setAllowed(true)
    }
  }
  useEffect(async () => {

    const trackingStatus = await getTrackingStatus();
    if (trackingStatus === 'authorized' || trackingStatus === 'unavailable') {
      // enable tracking features
    } else {
      askPermission()
    }
  }, [])
  // const memoizedValue = useMemo(() => RenderList(), [list]);
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>


      {allowed === true &&
        <WebView

          onLoadStart={(syntheticEvent) => {
            // update component to be aware of loading status
            const { nativeEvent } = syntheticEvent;
            console.log({ isLoading: nativeEvent.loading })
            setloisLoading(nativeEvent.loading)
          }}

          onLoadEnd={(syntheticEvent) => {
            // update component to be aware of loading status
            const { nativeEvent } = syntheticEvent;
            console.log({ isLoading: nativeEvent.loading })
            setloisLoading(nativeEvent.loading)
          }}

          source={{ uri: languageSelectedBysUser === "en" ? "https://www.goldhofer.com/en/press" : 'https://www.goldhofer.com/presse' }} />
      }
      {isLoading && <View style={{
        position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'
      }}>

        <ActivityIndicator color={"black"} size="large" />
      </View>

      }
    </SafeAreaView>
  );
};


