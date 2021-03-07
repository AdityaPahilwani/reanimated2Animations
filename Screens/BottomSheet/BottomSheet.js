import Animated, {
  useSharedValue,
  withTiming,
  withSpring,
  useAnimatedStyle,
  Easing,
  useAnimatedGestureHandler,
  useAnimatedRef,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { View, Dimensions, StyleSheet, Pressable, Text } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export default function BottomSheet(props) {
  const bottomHeight = useSharedValue(height);
  const translateY = useSharedValue(0);
  const toggleBottom = useSharedValue(false);
  let viewRef = useAnimatedRef();
  const config = {
    duration: 200,
    easing: Easing.ease,
  };
  const style = useAnimatedStyle(() => {
    return {
      height: bottomHeight.value,
      transform: [
        {
          translateY: withTiming(translateY.value, config),
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View ref={viewRef} style={[styles.bottomContainer, style]}>
        <View style={styles.grabber}></View>
      </Animated.View>

      <Pressable
        style={styles.press}
        onPress={() => {
          if (toggleBottom.value) {
            translateY.value = 0;
          } else {
            translateY.value = -250;
          }

          toggleBottom.value = !toggleBottom.value;
        }}
      >
        <Text>Toggle</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  press: {
    backgroundColor: "white",
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  bottomContainer: {
    width: width,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    zIndex: 10,
    elevation: 10,
    bottom: -height,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
  },
  grabber: {
    backgroundColor: "#aaa",
    width: 100,
    height: 10,
    borderRadius: 10,
  },
  backdropContainer: {
    height: height,
    width: width,
    backgroundColor: "rgba(0,0,0,0.6)",
    position: "absolute",
    zIndex: 6,
  },
});
