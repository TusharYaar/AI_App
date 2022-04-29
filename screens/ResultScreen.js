import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Your Image has been successfully Uploaded. Use the desktop to run it thorugh the AI model</Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
});
