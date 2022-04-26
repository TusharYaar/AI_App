import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { enableScreens } from "react-native-screens";

enableScreens(true);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
}
