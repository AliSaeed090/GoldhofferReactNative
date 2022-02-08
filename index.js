import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "app/index.js";
import { BaseSetting } from "@config";

// if (typeof(HermesInternal) === "undefined") {
//     console.log("Hermes is not enabled");
//   } else {
//     console.log("Hermes is enabled");
//   }

AppRegistry.registerComponent(BaseSetting.name, () => App);
