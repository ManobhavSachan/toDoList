import { StyleSheet, View, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import TaskLayout from "./components/TaskLayout";
import { StatusBar } from "expo-status-bar";

import Avatar from "./components/Avatar";

export default function App() {
  
  const hasStatusBar = StatusBar.currentHeight > 0;
  const fontChange = false;
  const [loaded] = useFonts({
    Inter: require("./fonts/Inter-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      {/* <StatusBar hidden={true} /> */}
      <View style={styles.container}>
        <Header />
        <Avatar />
        <SubHeader />

        <ScrollView>
          <TaskLayout />
        </ScrollView>

        <AddTask />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 100,
    fontFamily: "Inter",
    fontStyle: "normal",
  },
});
