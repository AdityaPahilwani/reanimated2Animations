import React from "react";
import { FlatList,View } from "react-native";
import SkeletonComponent from "../../Components/Skeleton";
import { data } from "../../Constants/Data";
const Skeleton = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center",flex:1 }}>
      <SkeletonComponent />
    </View>
  );
};

export default Skeleton;
