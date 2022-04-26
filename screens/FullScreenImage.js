// import { StyleSheet, View, Image, Dimensions } from "react-native";
// import React from "react";

import React from "react";
import { View, Text, Image, Animated, Dimensions, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

import ImageZoom from "react-native-image-pan-zoom";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FullScreenImage = ({ route, navigation }) => {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <ImageZoom cropWidth={windowWidth} cropHeight={windowHeight} imageWidth={windowWidth} imageHeight={windowHeight}>
        <Image style={{ width: windowWidth, height: windowHeight }} source={{ uri: photo.uri }} />
      </ImageZoom>
      <Button onPress={navigation.goBack} mode="contained" style={styles.backButton}>
        Go Back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: windowHeight - 50,
    left: windowWidth / 2 - 40,
  },
});

export default FullScreenImage;
