import React from "react";
import Albumlist from "./src/components/AlbumList";
import albumData from "./src/json/albums.json";
import { SafeAreaView, StatusBar, Text } from "react-native";
import { FlatList } from "@gluestack-ui/themed";

import Navigation from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView flex={1}>
        <StatusBar />
        <Navigation />
      </SafeAreaView>
    </Provider>


  )
}
export default App;