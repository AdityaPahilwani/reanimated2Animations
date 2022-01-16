import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles, { swipeContainerWidth, widthItem } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { lorem } from "../../Constants/constant";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
  Easing
} from "react-native-reanimated";
import { PanGestureHandler, RectButton } from "react-native-gesture-handler";

const Swipeable = ({ index, setData }) => {
  const translationX = useSharedValue(0);
  const deletingItem = useSharedValue(false);
  const timingConfig = {
    duration: 400,
    easing: Easing.in
  };
  const removeItem = () => {
    setData((data) => {
      const temp = data.filter((item, i) => {
        if (index !== i) {
          return item
        }
      })
      return [...temp]
    })
  }
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
      console.log(translationX.value, ctx.startX, translationX.value > swipeContainerWidth)
      if (evt.velocityX > 100 || translationX.value > swipeContainerWidth) {
        translationX.value = withSpring(
          swipeContainerWidth,
          getSpringConfig(evt.velocityX)
        );
      } else {
        translationX.value = withSpring(0, getSpringConfig(evt.velocityX));
      }
    },
  });
  const textContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });

  const swipeContainerStyle = useAnimatedStyle(() => {
    if (deletingItem.value) {
      return {
        height: withTiming(0, timingConfig, () => {
          runOnJS(removeItem)()
        }),
        flexDirection: 'row',
      };
    }

    return {
      height: 100,
      flexDirection: 'row',
    }
  });
  const RenderLeftActions = (props) => {
    return (
      <RectButton onPress={() => {
        deletingItem.value = true
      }}
        style={styles.renderContainer}
      >
        <Animated.View style={[swipeContainerStyle, { justifyContent: 'center', alignItems: 'center' }]}>
          <View style={styles.circleButton}>
            <AntDesign name="delete" size={24} color="black" />
          </View>
        </Animated.View>
      </RectButton>
    );
  };
  return (
    <View style={[styles.rowContainer]}>
      <PanGestureHandler activeOffsetX={[-10, 10]} onGestureEvent={handler}>
        <Animated.View style={[swipeContainerStyle]}>
          <RenderLeftActions />
          <Animated.View style={[styles.box, textContainerStyle]}>
            <Text style={{ fontSize: 22 }} numberOfLines={3}>
              {lorem}
            </Text>
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View >
  );
};



export default Swipeable;
