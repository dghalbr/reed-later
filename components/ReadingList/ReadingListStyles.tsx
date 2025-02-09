import { StyleSheet } from "react-native";

export const componentStyles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#aeeb34",
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
    backgroundColor: "#79a819",
    padding: 10,
    borderBottomColor: "black",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
  },
  listContainer: {
    backgroundColor: "#79a819",
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
  },  
  buttonContainer: {
    display: 'flex',
    marginLeft: 'auto',
    paddingRight: 25,
    fontSize: 48,
    height: 250,
  },
})

 export default componentStyles;
