import { ScrollView } from "react-native";
import Accordion from "./Accordion";
import React from "react";
const AccordionExample = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 20,
        flexGrow: 1,
        paddingHorizontal: 10,
      }}
    >
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
    </ScrollView>
  );
};
export default AccordionExample;
