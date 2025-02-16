import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import ScanScreen from "./screens/ScanScreen";
import ScanPrescriptionScreen from "./screens/ScanPrescriptionScreen";
import MedicationListScreen from "./screens/MedicationListScreen";
import PrescriptionScannerScreen from "./screens/PrescriptionScannerScreen";
import RemindersScreen from "./screens/RemindersScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
      <Stack.Navigator
          initialRouteName="Home" 
          screenOptions={{
            headerStyle: { backgroundColor: "#007AFF" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontSize: 18 },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PrescriptionScanner" component={PrescriptionScannerScreen} />
          <Stack.Screen name="Reminders" component={RemindersScreen} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
