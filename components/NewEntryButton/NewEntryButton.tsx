import React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import componentStyles from "./NewEntryButtonStyles";


interface INewEntryButton {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
}

export default function NewEntryButton(props: INewEntryButton) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={componentStyles.button} onPress={onPress}>
      <Text style={componentStyles.text}>{title}</Text>
    </Pressable>
  );
}
