import { SafeAreaView, Image, Text, Header, Icon, TextInput } from "@components";
import { BaseStyle, useTheme, Images, BaseColor } from "@config";
// Load sample data
import styles from './styles'
import React, { useState, useMemo } from "react";
import { FlatList, View, TouchableOpacity, RefreshControl } from "react-native";
import { useTranslation } from "react-i18next";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import RenderList from "./RenderList"
import Svg, { Rect } from 'react-native-svg';

function renderFooter() {
  const { colors } = useTheme();
  return (
    <View style={{ width: "95%", flexDirection: 'row', height: 100, marginTop: 20, alignSelf: "center", borderTopEndRadius: 55, borderTopLeftRadius: 55, backgroundColor: colors.primary }}>
      <Image source={Images.man} style={styles.manImage} resizeMode="contain" />
      <View style={{ width: '50%', alignItems: 'center', marginTop: 10 }}>
        <Text style={{ marginTop: 10 }} headline bold blackColor>
          SALES TRANSPORT
        </Text>
        <View style={{ width: "95%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
          <FontAwesome5 name="mobile-alt" color="white" size={25} />
          <Text style={{ marginLeft: 10, fontSize: 18 }} blackColor>
            +49 8331 15-341
          </Text>
        </View>
      </View>

    </View>

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

export default function News(props) {
  const { navigation } = props;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [isTransportActive, setTransPortActive] = useState(null)
  const [list, setList] = useState(["s", "2", "s", "2", "s", "2", "s", "2", "s", "2"])
  const [searchArr, setsearchArr] = useState(["s", "2", "s", "2", "s", "2", "s", "2", "s", "2"])


  const [search, setsearch] = useState("");
  const filter = (text) => {
    setsearch(text);
    if (text) {

    } else {

    }
  };

  const memoizedValue = useMemo(() => RenderList(), [list]);
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} edges={['right', 'top', 'left']}>
      
     

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
        renderItem={()=>memoizedValue}
        ItemSeparatorComponent={()=><View style={{marginTop:10}}/>}
      />
    </SafeAreaView>
  );
};


