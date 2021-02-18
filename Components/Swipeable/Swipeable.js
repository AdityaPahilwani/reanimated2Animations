import React, { useState } from "react";
import { View, Text, Animated } from "react-native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import { lorem } from "../../Constants/constant";
import Swipe from "react-native-gesture-handler/Swipeable";

const Swipeable = () => {
  return (
    <View style={{marginVertical:10,overflow:'hidden'}}>
      <Swipe
        renderLeftActions={(progress, dragX) => (
          <RenderLeftActions progress={progress} dragX={dragX} />
        )}
      >
        <Animated.View style={[styles.box]}>
          <Text style={{ fontSize: 22 }} numberOfLines={3}>
            {lorem}
          </Text>
        </Animated.View>
      </Swipe>
    </View>
  );
};

const RenderLeftActions = (props) => {
  let { progress, dragX } = props;
  const inputRange = [-0, 0, 65];
  const diffClamp = Animated.diffClamp(dragX, 0, 65);
  const scale = dragX.interpolate({
    inputRange: inputRange,
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });
  const translateX = dragX.interpolate({
    inputRange: inputRange,
    outputRange: [
      -styles.renderContainer.width,
      styles.renderContainer.width,
      0,
    ],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.renderContainer,
        {
          transform: [{ scale: scale }, { translateX: translateX }],
        },
      ]}
    >
      <Animated.View style={styles.circleButton}>
        <Feather name="send" size={24} color="black" />
      </Animated.View>
    </Animated.View>
  );
};

export default Swipeable;
