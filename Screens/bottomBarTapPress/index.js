import React from "react";
import { View, Pressable, TextInput } from "react-native";
import BottomNavigationTapPress from "../../Components/bottomNavigation";
const BottomBarTapPress = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#efefed",
          elevation: 4,
          padding: 10,
        }}
      >
        <TextInput />
      </View>

      <BottomNavigationTapPress />
    </View>
  );
};

export default BottomBarTapPress;
