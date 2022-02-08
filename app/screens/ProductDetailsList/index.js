import { SafeAreaView, Image, Text, Header, Icon,TextInput } from "@components";
import { BaseStyle, useTheme, Images,BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState ,useMemo} from "react";
import { FlatList, View, TouchableOpacity,RefreshControl } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import RenderList from "./RenderList"



export default function ProductDetailsList(props) {
  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [isTransportActive, setTransPortActive] = useState(null)
  const [list, setList] = useState(["s","2","s","2","s","2","s","2","s","2"])
  const [searchArr, setsearchArr] = useState(["s","2","s","2","s","2","s","2","s","2"])

  
  const [search, setsearch] = useState("");
  const filter = (text) => {
    setsearch(text);
    if (text) {
       
    } else {

    }
  };

  const memoizedValue = useMemo(() => RenderList, [list]);
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      <Header
        style={{ backgroundColor: 'black' }}
        title=""
        renderLeft={() => {
          return (
            <View style={{ flexDirection: 'row', width: 100 }}>
              <FontAwesome5 name="angle-double-left" color={"white"} size={25} />
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
      <View style={{ paddingHorizontal: 0, paddingVertical: 15 }}>
        <TextInput
        style={{width:'90%', alignSelf:'center', borderRadius:50, padding:10}}
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
            data={search.length >0? searchArr : list}
            keyExtractor={(item, index) => Math.random().toString()}
          
           
            renderItem={memoizedValue}
          />
    </SafeAreaView>
  );
};


