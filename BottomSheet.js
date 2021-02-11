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
import { View, Button, Dimensions, StyleSheet } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");
export default function BottomSheet(props) {
  const bottomHeight = useSharedValue(height);
  const translateY = useSharedValue(0);
  const toggleBottom = useSharedValue(false);
  const backdropOpacity = useSharedValue(0);
  let viewRef = useAnimatedRef();

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },

    onActive: (event, ctx) => {
      let newY = ctx.startY + event.translationY;
      if (newY > -726) {
        translateY.value = newY;
      }
    },
    onEnd: (event, ctx) => {},
  });
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
  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(backdropOpacity.value, config),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.backdropContainer, backdropStyle]}
      ></Animated.View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View ref={viewRef} style={[styles.bottomContainer, style]}>
          <View style={styles.grabber}></View>
        </Animated.View>
      </PanGestureHandler>
      <Button
        title="toggle"
        onPress={() => {
          if (toggleBottom.value) {
            translateY.value = 0;
          } else {
            translateY.value = -250;
          }
          backdropOpacity.value = backdropOpacity.value === 0 ? 1 : 0;
          toggleBottom.value = !toggleBottom.value;
        }}
      />
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
