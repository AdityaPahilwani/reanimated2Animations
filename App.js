import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackNav from "./Navigation/navigation";
export default function App(props) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StackNav />
    </GestureHandlerRootView>
  )
}
