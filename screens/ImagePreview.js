import { StyleSheet, TouchableOpacity, View, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;

const ImagePreview = ({ route, navigation }) => {
  const { photo } = route.params;
  const ratio = photo.height / photo.width;
  const [isLoading, setIsLoading] = useState(false);

  const height = (windowWidth / 1.5) * ratio;

  const analyzeImage = async () => {
    try {
      setIsLoading(true);
      const data = new FormData();
      data.append("image", {
        uri: photo.uri,
        name: "image.jpg",
        type: "image/jpg",
      });

      const result = await fetch("https://c3e2-136-233-9-101.ngrok.io/api/upload", {
        method: "POST",
        body: data,
      });
      console.log(JSON.stringify(result));
      navigation.navigate("result", { result });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("fullScreenImage", { photo })}>
        <Image source={{ uri: photo.uri }} style={[styles.image, { height: height }]} />
      </TouchableOpacity>

      <Button
        icon="card-search-outline"
        mode="contained"
        onPress={analyzeImage}
        style={styles.analyzeButton}
        loading={isLoading}
        disabled={isLoading}>
        Analyze
      </Button>
      {!isLoading && (
        <Button style={styles.cancelButton} onPress={() => navigation.goBack()}>
          Cancel
        </Button>
      )}
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: windowWidth / 1.5,
    borderRadius: 15,
  },
  analyzeButton: {
    marginTop: 20,
    paddingVertical: 10,
    width: windowWidth / 1.5,
    borderRadius: 50,
  },
  cancelButton: {
    marginTop: 30,
  },
});
