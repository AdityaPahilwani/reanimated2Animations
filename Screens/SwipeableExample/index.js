import { ScrollView } from "react-native";
import Swipeable from "../../Components/Swipeable/index";
import React from "react";
const SwipeableExample = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 20,
        flexGrow: 1,
        paddingHorizontal: 10,
      }}
    >
      <Swipeable />
      <Swipeable />
      <Swipeable />
      <Swipeable />
      <Swipeable />
      <Swipeable />
      <Swipeable />
      <Swipeable />
    </ScrollView>
  );
};
export default SwipeableExample;
