import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import configureStore from "./store/store";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";

 
import Navigation from "./navigation";
import { Provider } from "react-redux";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={configureStore()}>
        <SafeAreaProvider>
          <Navigation colorScheme={"light"} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
