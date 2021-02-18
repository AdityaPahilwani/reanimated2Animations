import { ScrollView } from "react-native";
import Accordion from "../../Components/Accordion/index";
import React from "react";
const AccordionExample = () => {
  return (
    <ScrollView
      contentContainerStyle={{
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
