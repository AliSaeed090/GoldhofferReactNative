import React,{useEffect} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
 
import {  View,Text,Linking } from "react-native";
import { useFocusEffect } from '@react-navigation/native';



/* Bottom Screen */





/* Stack Screen */
import Home from "@screens/Home";
 
import ProductDetailsList from "@screens/ProductDetailsList";
import ProductDeatilMoreInfo from "@screens/ProductDeatilMoreInfo";


import ProductDeatilInfo from "@screens/ProductDeatilInfo"
import News from "@screens/News";


import ChangeLanguage from "@screens/ChangeLanguage";

import Setting from "@screens/Setting";
import ThemeSetting from "@screens/ThemeSetting";
import NewsDetails from "@screens/NewsDetails";
import ContactOverView from "@screens/ContactOverView";
import ProductDeatilVideo from "@screens/ProductDeatilVideo";
import ProductDeatilVideoLink from "@screens/ProductDeatilVideoLink";



import { Image } from "@components";

import { BaseColor, useTheme, Images, BaseStyle } from "@config";
import { useTranslation } from "react-i18next";













const Shop =(props)=>{
  const { navigation } = props;
  useFocusEffect(() => {
    Linking.openURL("https://e-shop.goldhofer.com/index.php?lang=1&cl=account")
    // 
    navigation.goBack("Home")
  }, [])
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Shop</Text>
    </View>
  )
}



const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const TabBarIcon = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={props.src}
      tintColor={props.color}
      style={{ height: 40, width: 40,  }}
    />
  );
};

const EBottomTabNavigator = (props) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
      
        showIcon: true,
        showLabel: false,
        activeTintColor: "black",
        inactiveTintColor: 'white',
        activeBackgroundColor: 'white',
        style: BaseStyle.tabBar,
        labelStyle: {
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Main}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon color={color} src={Images.homeTab} />
          },
        }}
      />

      <BottomTab.Screen
        name="News"
        component={News}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon  color={color} src={Images.newsTab} />
          },
        }}
      />

      <BottomTab.Screen
        name="Shop"
        component={Shop}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon  color={color} src={Images.bagTab} />
          },
        }}
      />


      <BottomTab.Screen
        name="ContactOverView"
        component={ContactOverView}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon  color={color} src={Images.chatTab} />
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const Main = (props) => {
  return (
    <MainStack.Navigator headerMode="none"
      initialRouteName="ECommerceMenu"


    >
      <MainStack.Screen name="ECommerceMenu" component={Home} />
      <MainStack.Screen name="ProductDetailsList" component={ProductDetailsList} />
      <MainStack.Screen name="ProductDeatilInfo" component={ProductDeatilInfo} />

      <MainStack.Screen name="ProductDeatilMoreInfo" component={ProductDeatilMoreInfo} />
      <MainStack.Screen name="ProductDeatilVideo" component={ProductDeatilVideo} />
      <MainStack.Screen name="ProductDeatilVideoLink" component={ProductDeatilVideoLink} />


      
      <MainStack.Screen name="NewsDetails" component={NewsDetails} />
      

      <MainStack.Screen name="ChangeLanguage" component={ChangeLanguage} />

      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="ThemeSetting" component={ThemeSetting} />





    </MainStack.Navigator>
  );
};

export default EBottomTabNavigator;
