import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

// import * as mobilenet from "@tensorflow-models/mobilenet";
// import * as tf from "@tensorflow/tfjs";
// import "@tensorflow/tfjs-react-native";

// import RNFetchBlob from "react-native-fetch-blob";

const AnalysisScreen = ({ navigation, route }) => {
  const { photo } = route.params;
  useEffect(async () => {
    try {
      // await tf.setBackend("rn-webgl");
      // await tf.ready();
      // console.log("ready?");
      // tf.load;
      // await tf.loadLayersModel("../model/model.json");
      //   const response = await fetch(
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png"
      //   );
      //   console.log(response);
      //   await tf.loadModel("../model/model.json");
      //   const imageData = await RNFetchBlob.fetch(
      //     "GET",
      //     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/800px-Google_Images_2015_logo.svg.png"
      //   );
      //   console.log(imageData);
      //   const imageTensor = decodeJpeg(imageData);
      //   const prediction = await model.classify(imageTensor);
      //   console.log(prediction);
    } catch (e) {
      console.log(e);
    }
  }, [photo]);
  return (
    <View>
      <Text>AnalysisScreen</Text>
    </View>
  );
};

export default AnalysisScreen;

const styles = StyleSheet.create({});
