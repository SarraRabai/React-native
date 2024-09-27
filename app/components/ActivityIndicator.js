import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/done.json")}
    />
  );
}

const styles = StyleSheet.create({});

export default ActivityIndicator;
