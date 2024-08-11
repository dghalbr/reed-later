import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Linking,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import componentStyles from "./ReadingListStyles";
import NewEntryButton from "../NewEntryButton/NewEntryButton";
import Feather from "@expo/vector-icons/Feather";

const data: IReedDataEntry[] = [
  { url: "http://www.example.com/" },
  { url: "http://www.example.net/board/appliance.aspx" },
  { url: "http://anger.example.org/anger/bone" },
  { url: "http://example.com/bed/bait#bikes" },
  { url: "https://bedroom.example.com/advice?basketball=alarm&bomb=bomb#bell" },
  { url: "http://example.com/" },
];

const ReadingList = () => {
  const [listData, setListData] = useState<IReedDataEntry[]>(data);

  function buttonClick(event: GestureResponderEvent): void {
    const myNewUrl: IReedDataEntry[] = [{
      url: "https://www.apple.com",
    }];
  
    setListData([...listData, ...myNewUrl]);
  } 

  const buttonsListArr = listData.map((entry: IReedDataEntry) => (
      <TouchableOpacity key={entry.url} onPress={() => Linking.openURL(entry.url)}>
        <Text style={componentStyles.listItem} key={entry.url}>
          {entry.url}
        </Text>
        {entry != data[data.length - 1] && <View style={componentStyles.horizontalRule} />}
      </TouchableOpacity>
  ));

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
