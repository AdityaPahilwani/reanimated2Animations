import React from "react";
import { View } from "react-native";
import Slide from "../../Components/SlideToCompare";

const firstImage =
  "https://images.unsplash.com/photo-1610824224317-ac64e52481c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
const secondImage =
  "https://images.unsplash.com/photo-1610821681484-ef2f0cec67f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";
const SlideToCompare = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <Slide firstImage={firstImage} secondImage={secondImage} />
    </View>
  );
};

export default SlideToCompare;
