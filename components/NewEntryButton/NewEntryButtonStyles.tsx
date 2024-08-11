import { Platform, StyleSheet } from "react-native";

export const componentStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 75,
    borderRadius: 20,
    backgroundColor: "white",

    ...Platform.select({
      ios: {
        shadowColor: "#030002",
        shadowOpacity: 0.25,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
})

 export default componentStyles;
