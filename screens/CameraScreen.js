import { StyleSheet, Text, View, Dimensions, StatusBar, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

import { IconButton } from "react-native-paper";

import CameraShutter from "../components/CameraShutter";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isPicking, setIsPicking] = useState(false);
  const cameraRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    });
    return unsubscribe;
  }, [navigation]);

  if (isPicking || hasPermission === null || !isFocused) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef.current) {
      setLoading(true);
      let photo = await cameraRef.current.takePictureAsync();
      navigation.navigate("imagePreview", { photo });
      setLoading(false);
    }
  };

  const openFile = async () => {
    try {
      setIsPicking(true);
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
      });
      console.log(result);
      navigation.navigate("imagePreview", { photo: result });
    } catch (err) {
      console.log(err);
    } finally {
      setIsPicking(false);
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <CameraShutter style={styles.shutter} onPress={snap} loading={loading} />
          <IconButton
            icon="file-image-outline"
            color="white"
            style={styles.fileUpload}
            size={40}
            disabled={loading}
            onPress={openFile}
          />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: StatusBar.currentHeight,
    height: "100%",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  shutter: {
    position: "absolute",
    top: windowHeight - 150,
    left: windowWidth / 2 - 40,
  },
  fileUpload: {
    position: "absolute",
    top: windowHeight - 140,
    right: 50,
  },
});

export default CameraScreen;
