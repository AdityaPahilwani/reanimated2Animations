import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { View, Text, Pressable, Dimensions, ScrollView } from "react-native";
import styles from "./style";
import { lorem } from "../../Constants/constant";
const DarkMode = () => {
  const { height, width } = Dimensions.get("window");
  const isDarkMode = useSharedValue(false);
  const time = 700;
  const animateContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isDarkMode.value === true ? "black" : "white",
        {
          duration: time,
          easing: Easing.linear,
        }
      ),
    };
  });
  const animateText = useAnimatedStyle(() => {
    return {
      color: withTiming(isDarkMode.value === true ? "white" : "black", {
        duration: time,
        easing: Easing.linear,
      }),
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Animated.View style={[styles.container, animateContainer]}>
          <Pressable
            style={styles.button}
            onPress={() => {
              isDarkMode.value = !isDarkMode.value;
            }}
          >
            <Text style={styles.buttonText}>Dark mode</Text>
          </Pressable>
          <Animated.Text style={[styles.lorem, animateText]}>
            [{lorem},{lorem}]
          </Animated.Text>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default DarkMode;
