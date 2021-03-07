import React, { useState } from "react";
import { View, Text } from "react-native";
import styles, { swipeContainerWidth, paddingBox } from "./style";
import { Feather } from "@expo/vector-icons";
import { lorem } from "../../Constants/constant";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  interpolate,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const Swipeable = () => {
  const translationX = useSharedValue(0);
  const getSpringConfig = (velocity) => {
    "worklet";
    return {
      stiffness: 500,
      damping: 100,
      mass: 10,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
      velocity,
    };
  };
  const handler = useAnimatedGestureHandler({
    onStart: (evt, ctx) => {
      ctx.startX = translationX.value;
    },
    onActive: (evt, ctx) => {
      const newTranlation = ctx.startX + evt.translationX;
      translationX.value = newTranlation;
    },
    onEnd: (evt, ctx) => {
      if (evt.velocityX > 100) {
        translationX.value = withSpring(
          swipeContainerWidth + paddingBox,
          getSpringConfig(evt.velocityX)
        );
      } else {
        translationX.value = withSpring(0, getSpringConfig(evt.velocityX));
      }
    },
  });
  const swipeContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });
  return (
    <PanGestureHandler activeOffsetX={[-20, 20]} onGestureEvent={handler}>
      <Animated.View style={[styles.rowContainer, swipeContainerStyle]}>
        <View style={[styles.box]}>
          <Text style={{ fontSize: 22 }} numberOfLines={3}>
            {lorem}
          </Text>
        </View>
        <RenderLeftActions />
      </Animated.View>
    </PanGestureHandler>
  );
};

const RenderLeftActions = (props) => {
  return (
    <Animated.View style={[styles.renderContainer]}>
      <Animated.View style={styles.circleButton}>
        <Feather name="send" size={24} color="black" />
      </Animated.View>
    </Animated.View>
  );
};

export default Swipeable;
