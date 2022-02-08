import { useTheme } from "@config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Loading from "@screens/Loading"; 
import SelectDarkOption from "@screens/SelectDarkOption";
import SelectFontOption from "@screens/SelectFontOption";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native"; 
import { useDarkMode ,DarkModeProvider} from 'react-native-dynamic'
import SplashScreen from "react-native-splash-screen";
import Main from "./main";

const RootStack = createStackNavigator();
const Navigator = (props) => {
  const { theme, colors } = useTheme();
  const isDarkMode = useDarkMode();
  const forFade = ({ current, closing }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  useEffect(() => {
    // Hide screen loading
    SplashScreen.hide();

    // Config status bar
    if (Platform.OS == "android") {
      StatusBar.setBackgroundColor(colors.primary, true);
    }
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content", true);
  }, []);
  return (
    <DarkModeProvider>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator
          mode="modal"
          headerMode="none"
          initialRouteName="Loading"
        >
          <RootStack.Screen
            name="Loading"
            component={Loading}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen name="Main" component={Main} />
          
          
          <RootStack.Screen
            name="SelectDarkOption"
            component={SelectDarkOption}
            gestureEnabled={false}
            options={{
              cardStyleInterpolator: forFade,
              cardStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          />
          <RootStack.Screen
            name="SelectFontOption"
            component={SelectFontOption}
            gestureEnabled={false}
            options={{
              cardStyleInterpolator: forFade,
              cardStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          />
         
        
          
        </RootStack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default Navigator;
