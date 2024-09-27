import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText.android";

function PickerItem({ item, onPress }) {
  console.log("Rendering PickerItem for:", item);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Item pressed:", item);
        onPress(item);
      }}
    >
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default PickerItem;
