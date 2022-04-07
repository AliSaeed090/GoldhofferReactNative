import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo, useEffect } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl, Linking } from "react-native";
import { useTranslation } from "react-i18next";
 import RenderList2 from "./RenderList2"
 import {dataSetTransportService, dataSetTransportProducts, dataSetAirportService, dataSetAirportProducts} from "./Data"

 

import { useSelector } from "react-redux";
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
  const [list, setList] = useState([ ])
  const [dataSet, setDataSet] = useState([ ])
  const contact = useSelector((state) => state.application.contact);
  useEffect(()=>{
    if(contact.type==='SALES TRANSPORT'){
      setDataSet([...dataSetTransportProducts])
    }
    else if(contact.type==='SERVICE TRANSPORT'){
      setDataSet([...dataSetTransportService])
    }
    else if(contact.type==='SALES AIRPORT'){
      setDataSet([...dataSetAirportProducts])
    }

    else if(contact.type==='SERVICE AIRPORT'){
      setDataSet([...dataSetAirportService])
    }


  },[contact])

  useEffect(()=>{
    if(params){
      filter(params.data)
    }

  },[params])
   

  const [searchArr, setsearchArr] = useState([]);
  const searchFilterFunction = (text) => {
 
 
    const newData = dataSet.filter((items) => {
      const itemData = `${items.text.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setsearchArr([...newData])
  };

  const [search, setsearch] = useState("");
  const filter = (text) => {
    setsearch(text);
    if (text) {
      searchFilterFunction(text)
    } else {

    }
  };




  const RenderItem = useMemo((item) => RenderList2, [list]);
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

        onPressLeft={() => {
          navigation.goBack();
        }}

      />
      <View onPress={()=>navigation.navigate("SearchHistory")} style={{ paddingHorizontal: 0, paddingVertical: 15 }}>
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
      </View>

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
        ItemSeparatorComponent={() => <View style={{ width: "100%", height: 8, backgroundColor: 'white' }} />}
      
        renderItem={({ item }) => <RenderItem item={item} />}

      />
    </SafeAreaView>
  );
};


