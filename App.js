import BottomSheet from "./BottomSheet";
import AccordionExample from "./Components/Accordion";
import ClassicIpod from "./classicIpod/index";
import React from "react";
import { StatusBar } from "react-native";
export default function App(props) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ClassicIpod />
    </>
  );
}
