import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
 



/* Bottom Screen */





/* Stack Screen */
import Home from "@screens/Home";
 
import ProductDetailsList from "@screens/ProductDetailsList";

import ChangeLanguage from "@screens/ChangeLanguage";

import Setting from "@screens/Setting";
import ThemeSetting from "@screens/ThemeSetting";

import { Image } from "@components";

import { BaseColor, useTheme, Images, BaseStyle } from "@config";
import { useTranslation } from "react-i18next";

















const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const TabBarIcon = (props) => {
  return (
    <Image
      resizeMode='contain'
      source={props.src}
      tintColor={props.color}
      style={{ height: 35, width: 35,  }}
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
        name="EHome"
        component={Home}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon color={color} src={Images.homeTab} />
          },
        }}
      />

      <BottomTab.Screen
        name="EProduct"
        component={Home}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon  color={color} src={Images.newsTab} />
          },
        }}
      />

      <BottomTab.Screen
        name="News"
        component={Home}
        options={{
          title: t(""),
          tabBarIcon: ({ color }) => {
            return <TabBarIcon  color={color} src={Images.bagTab} />
          },
        }}
      />


      <BottomTab.Screen
        name="Profile"
        component={Setting}
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
      <MainStack.Screen name="ECommerceMenu" component={EBottomTabNavigator} />
      <MainStack.Screen name="ProductDetailsList" component={ProductDetailsList} />

      

      <MainStack.Screen name="ChangeLanguage" component={ChangeLanguage} />

      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="ThemeSetting" component={ThemeSetting} />





    </MainStack.Navigator>
  );
};

export default Main;
