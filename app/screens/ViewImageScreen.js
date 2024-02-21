import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import couleurs from "../config/couleurs";

export default function ViewImageScreen() {
  return (
    <View style={styles.conteneur}>
      <View style={styles.boutonFermer}></View>
      <View style={styles.boutonSupprimer}></View>
      <Image resizeMode="contain" style={styles.image} source={require("../assets/mountain.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    backgroundColor: couleurs.black,
    flex: 1,
  },
  boutonFermer: {
    width: 50,
    height: 50,
    backgroundColor: couleurs.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  boutonSupprimer: {
    width: 50,
    height: 50,
    backgroundColor: couleurs.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
