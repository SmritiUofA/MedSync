import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import ScanPrescriptionScreen from "./screens/ScanPrescriptionScreen";
import MedicationListScreen from "./screens/MedicationListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#007AFF" }, // iOS Blue
            headerTintColor: "#fff",
            headerTitleStyle: { fontSize: 18 },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Scan Prescription" component={ScanPrescriptionScreen} />
          <Stack.Screen name="Medication List" component={MedicationListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
