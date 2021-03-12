import React from "react";
import { ScrollView } from "react-native";
import styles from "./style";
import AnimatedSwitch from "../../Components/Switch";
const Switch = (props) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <AnimatedSwitch />
      <AnimatedSwitch />
      <AnimatedSwitch />
      <AnimatedSwitch />
      <AnimatedSwitch />
      <AnimatedSwitch />
      <AnimatedSwitch />
      <AnimatedSwitch />
    </ScrollView>
  );
};

export default Switch;
