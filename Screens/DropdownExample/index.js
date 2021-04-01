import { ScrollView } from "react-native";
import Dropdown from "../../Components/Dropdown/index";
import React from "react";

const DropdownExample = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 10,
      }}
    >
      <Dropdown />
    </ScrollView>
  );
};

export default DropdownExample;
