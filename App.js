import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import MedicationListScreen from "./screens/MedicationListScreen";
import ScanScreen from "./screens/ScanScreen";
import ReminderScreen from "./screens/ReminderScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MedicationList" component={MedicationListScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
