import { StyleSheet } from "react-native";

/**
 * Common basic style defines
 */
export const BaseStyle = StyleSheet.create({
    tabBar: {
        borderWidth:0,
        borderTopWidth:0,
        backgroundColor:'black',
        height:"13%"
    },
    bodyPaddingDefault: {
        paddingHorizontal: 20,
    },
    bodyMarginDefault: {
        marginHorizontal: 20,
    },
    textInput: {
        height: 46,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    safeAreaView: {
        flex: 1,
    },
    container: {
        padding: 20,
    },
});
