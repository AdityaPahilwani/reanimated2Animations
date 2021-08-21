import React from "react";
import { View, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import styles, { ContainerWidth, imageWidth, compareStickWidth } from "./style";
import { Ionicons } from "@expo/vector-icons";

const iconSize = 26;
const maxImageSize = ContainerWidth - compareStickWidth;
const endOffset = ContainerWidth - imageWidth - compareStickWidth / 2;
const startOffset = endOffset * -1;
const maxImageSizeAfterOverlap = ContainerWidth - compareStickWidth / 2;

const SlideToCompare = ({ firstImage, secondImage }) => {
  const firstImageWidth = useSharedValue(imageWidth);
  const secondImageWidth = useSharedValue(imageWidth);
  const translationX = useSharedValue(0);
  const handler = useAnimatedGestureHandler({
    onStart: (evt, ctx) => {
      ctx.startX = translationX.value;
      ctx.copyFirstImageWidth = firstImageWidth.value;
      ctx.copySecondImageWidth = secondImageWidth.value;
    },
    onActive: (evt, ctx) => {
      const newTranlation = ctx.startX + evt.translationX;
      let distanceOffset = 0;
      // evt.translationX > 0 mean gesture is in right dir
      if (evt.translationX > 0) {
        translationX.value = Math.min(newTranlation, endOffset);
        distanceOffset = translationX.value - ctx.startX;
        firstImageWidth.value = Math.min(
          ctx.copyFirstImageWidth + distanceOffset,
          maxImageSize
        );
        secondImageWidth.value = Math.max(
          maxImageSizeAfterOverlap - firstImageWidth.value,
          0
        );
      } else if (evt.translationX < 0) {
        translationX.value = Math.max(newTranlation, startOffset);
        distanceOffset = Math.abs(translationX.value - ctx.startX);
        secondImageWidth.value = Math.min(
          ctx.copySecondImageWidth + distanceOffset,
          maxImageSize
        );
        firstImageWidth.value = Math.max(
          maxImageSizeAfterOverlap - secondImageWidth.value,
          0
        );
      }
    },
  });

  const animateFirstImageContainer = useAnimatedStyle(() => {
    return {
      width: firstImageWidth.value,
    };
  });

  const animateSecondImageContainer = useAnimatedStyle(() => {
    return {
      width: secondImageWidth.value,
    };
  });
  const animateStickContainer = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translationX.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, animateFirstImageContainer]}
      >
        <Image style={styles.image} source={{ uri: firstImage }} />
      </Animated.View>

      <Animated.View
        style={[styles.imageContainer, animateSecondImageContainer]}
      >
        <Image style={styles.image} source={{ uri: secondImage }} />
      </Animated.View>
      <PanGestureHandler activeOffsetX={[-0, 0]} onGestureEvent={handler}>
        <Animated.View style={[styles.compareStick, animateStickContainer]}>
          <View style={styles.middleCircle}>
            <Ionicons name="ios-chevron-back" size={iconSize} color="black" />
            <Ionicons
              name="ios-chevron-forward"
              size={iconSize}
              color="black"
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default SlideToCompare;
