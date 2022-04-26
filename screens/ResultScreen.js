import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ResultScreen = ({ navigation, route }) => {
  const { result } = route.params;

  return (
    <View>
      <Text>{JSON.stringify(result)}</Text>
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
  },
});
