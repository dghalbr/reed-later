import React from "react";
import {
  ScrollView,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Button,
  GestureResponderEvent,
} from "react-native";
import componentStyles from "./ReadingListStyles";
import NewEntryButton from "../NewEntryButton/NewEntryButton";
import Feather from "@expo/vector-icons/Feather";

const data: string[] = [
  "http://www.example.com/",
  "http://www.example.net/board/appliance.aspx",
  "http://anger.example.org/anger/bone",
  "http://example.com/bed/bait#bikes",
  "https://bedroom.example.com/advice?basketball=alarm&bomb=bomb#bell",
  "http://example.com/",
];

const buttonsListArr = data.map((link) => (
  <>
    <TouchableOpacity key={link} onPress={() => Linking.openURL(link)}>
      <Text style={componentStyles.listItem} key={link}>
        {link}
      </Text>
      {link != data[data.length - 1] && <View style={componentStyles.horizontalRule} />}
    </TouchableOpacity>
  </>
));


function buttonClick(event: GestureResponderEvent): void {
  console.log("Button Logic here");
} 

const ReadingList = () => {
  return (
    <View style={componentStyles.container}>
      <Feather
        name="menu"
        style={componentStyles.hamburgerMenu}
        size={24}
        color="black"
      />
      <Text style={componentStyles.heading}> Reed-Later List </Text>
      <ScrollView style={componentStyles.scrollView}>
        <View style={componentStyles.listContainer}>{buttonsListArr}</View>
      </ScrollView>
      <View style={componentStyles.buttonContainer}>
      <NewEntryButton 
      onPress={buttonClick} 
      title={"New +"} /> 
      </View>
    </View>
  );
};

export default ReadingList;
