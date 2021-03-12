import React from "react";
import { View, Pressable } from "react-native";
import styles, { switchSize, maxWidthSwitch } from "./style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withSpring,
} from "react-native-reanimated";
const config = {
  duration: 1000,
  easing: Easing.elastic,
};
const Switch = (props) => {
  const toggleSwitch = useSharedValue(0);

  const switchAnimatedStyle = useAnimatedStyle(() => {
    const translateX = toggleSwitch.value ? maxWidthSwitch - switchSize : 0;
    return {
      transform: [
        {
          translateX: withTiming(translateX, {
            config,
          }),
        },
      ],
    };
  });
  const animateContainer = useAnimatedStyle(() => {
    const backgroundColor = toggleSwitch.value ? "#78fee0" : "white";
    return {
      backgroundColor: withTiming(backgroundColor, {
        config,
      }),
    };
  });
  const handleToggle = () => {
    toggleSwitch.value = !toggleSwitch.value;
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.switchContainer, animateContainer]}>
        <Pressable onPress={handleToggle}>
          <Animated.View
            style={[styles.switch, switchAnimatedStyle]}
          ></Animated.View>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Switch;
