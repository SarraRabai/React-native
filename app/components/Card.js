import React from "react";
import colors from "../config/colors";
import AppText from "./AppText.android";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

function Card({ title, subtitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20, //margin between the cards
    overflow: "hidden", //therse an extra part of the image on the top we need to hide it
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
  },
});
export default Card;
