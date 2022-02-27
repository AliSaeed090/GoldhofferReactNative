import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
  logo: {
    width: 80,
    height: 80
},
banner:{
  width: "100%",
  height: "100%"
},
manImage:{
  width: 150,
  height: 150,
  marginTop:-20
},
container: {
  backgroundColor: 'white',
},
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10,
},
buttonGroup: {
  flexDirection: 'row',
  alignSelf: 'center',
  paddingBottom: 5,
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5,
},
player: {
  alignSelf: 'stretch',
  marginVertical: 10,
},
});
