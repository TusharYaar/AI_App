import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CameraShutter = ({ onPress, style, loading }) => {
  return (
    <TouchableOpacity
      style={[loading ? styles.loading : styles.cameraShutter, style]}
      onPress={onPress}></TouchableOpacity>
  );
};

export default CameraShutter;

const styles = StyleSheet.create({
  cameraShutter: {
    width: 80,
    height: 80,
    backgroundColor: "#e63946",
    borderRadius: 100,
  },
  loading: {
    width: 0,
    height: 0,
  },
});
