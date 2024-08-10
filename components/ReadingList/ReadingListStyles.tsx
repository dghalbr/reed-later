import { StyleSheet } from "react-native";

export const componentStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 60,
    borderRadius: 15,
    backgroundColor: "#EEEEEE",
    margin: 0,
    textAlign: "center",
    alignSelf: "stretch",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  scrollView: {
    padding: 20,
    borderRadius: 15,
  },
  listItem: {
    backgroundColor: "white",
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 5,
  },
  hamburgerMenu: {
    paddingLeft: 10,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
  },
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },  
})

 export default componentStyles;
