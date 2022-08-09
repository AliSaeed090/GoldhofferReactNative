import React from "react";
import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        
      },
      ViewFirst:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'rgba(0, 0, 0, 0.7)'
     
      },
      ViewSecond:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        width:'100%',
       
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        marginTop:20,
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 40,
        paddingRight: 40,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "black",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 10,
        textAlign: "center",
        fontSize:20
      },
      modalText2: {
        marginBottom: 10,
        textAlign: "center", color:'red', textDecorationLine:"underline"
      }
});
