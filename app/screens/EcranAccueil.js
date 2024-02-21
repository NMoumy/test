import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function EcranAccueil() {
  return (
    <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
      <View style={styles.conteneurLogo}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.slogan}>Exemple d'ecran d'accueil sur react native</Text>
      </View>
      <View style={styles.boutonConnexion}></View>
      <View style={styles.boutonInscrition}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  boutonConnexion: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  boutonInscrition: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  conteneurLogo: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  slogan: {
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 10,
  },
});
