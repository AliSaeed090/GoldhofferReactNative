import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo,useEffect } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl,Linking, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import RenderList2 from "./RenderList2.js"
import Svg, { Rect } from 'react-native-svg';

import { useSelector } from "react-redux";

function renderFooter() {
  const contact = useSelector((state) => state.application.contact);
  const { colors } = useTheme();
  const callNumber = phone => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    }
    else  {
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
    <TouchableOpacity onPress={()=>callNumber(contact.number)} style={{ width: "95%", flexDirection: 'row', height: 90, marginTop: 20, alignSelf: "center", borderTopEndRadius: 55, borderTopLeftRadius: 55, backgroundColor: "#E5EAED" }}>
     
     <View style={{borderTopLeftRadius: 55, backgroundColor:'black', width:100, height:'100%', justifyContent:'center', alignItems:'center'}}>
     <Image source={Images.G} style={styles.manImage} resizeMode="contain" />

     </View>
      <View style={{ width: '50%', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ marginTop: 10 }} headline bold blackColor>
          {contact.name}
        </Text>
        <View style={{ width: "95%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
         
          <Text style={{ marginLeft: 10, fontSize: 18 }} blackColor>
          {contact.number}
          </Text>
        </View>
      </View>

    </TouchableOpacity>

    // <View style={{
    //   width: 300,
    //   height: 50,
    //   backgroundColor: "transparent",
    //   borderStyle: "solid",
    //   borderLeftWidth: 0,
    //   borderRightWidth: 100,
    //   borderBottomWidth: 50,
    //   borderLeftColor: "transparent",
    //   borderRightColor: "transparent",
    //   borderBottomColor: "red",
    // }}>


    // </View>
  )
}
const BackArrowPng = () => {
  return (
    <Image source={Images.backArrow} style={{ width: 20, height: 20 }} resizeMode="contain" />
  );
}
export default function ProductDetailsList(props) {
  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { params } = props.route
  const [isTransportActive, setTransPortActive] = useState(null)
  const [list, setList] = useState([
    

  ])
  useEffect(() => {
 
    setList(params.item)
}, [params])
  const [searchArr, setsearchArr] = useState(["s", "2", "s", "2", "s", "2", "s", "2", "s", "2"])


  const [search, setsearch] = useState("");
  const filter = (text) => {
    setsearch(text);
    if (text) {

    } else {

    }
  };

 
  const onPressRight =()=>{
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }]
  });
  }

  const RenderItem = useMemo((item) => RenderList2, [list]);
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
        onPressRight={onPressRight}
        onPressLeft={() => {
          navigation.goBack();
        }}

      />
      {/* <View style={{ paddingHorizontal: 0, paddingVertical: 15 }}>
        <TextInput
          style={{ width: '90%', alignSelf: 'center', borderRadius: 50, padding: 10 }}
          onChangeText={filter}
          placeholder={t("Search")}
          value={search}
          icon={
            <TouchableOpacity onPress={() => setsearch("")}>
              <Icon name="search" size={16} color={BaseColor.grayColor} />
            </TouchableOpacity>
          }
        />
      </View> */}

      <FlatList
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={false}
            onRefresh={() => { }}
          />
        }
        data={search.length > 0 ? searchArr : list}
        keyExtractor={(item, index) => Math.random().toString()}

        ListFooterComponent={renderFooter}
        renderItem={({ item }) => <RenderItem item={item} />}
      
      />
    </SafeAreaView>
  );
};


