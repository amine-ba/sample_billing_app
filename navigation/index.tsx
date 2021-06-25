import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import LoginScreen from "../screens/LoginScreen";

import NotFoundScreen from "../screens/NotFoundScreen/NotFoundScreen";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import { useSelector } from "react-redux";

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const user = useSelector((state: any) => state.user.user);
  if (!user) return <LoginScreen />;
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
