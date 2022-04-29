import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from "./screens/CameraScreen";
import ImagePreview from "./screens/ImagePreview";
import FullScreenImage from "./screens/FullScreenImage";
import ResultScreen from "./screens/ResultScreen";
// import AnalysisScreen from "./screens/AnalysisScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="camera" component={CameraScreen} options={cameraScreenOptions} />
      <Stack.Screen name="imagePreview" component={ImagePreview} />
      <Stack.Screen name="fullScreenImage" component={FullScreenImage} options={cameraScreenOptions} />
      <Stack.Screen name="result" component={ResultScreen} options={cameraScreenOptions} />
      {/* <Stack.Screen name="analysis" component={AnalysisScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const cameraScreenOptions = {
  headerShown: false,
};
