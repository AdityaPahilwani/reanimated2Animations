import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useSharedValue,
  Easing,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
import styles, { imageSize } from "./style";
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
const bgGrey = "#a0a0a0";
const COLORS = ["#a0a0a0", "#b0b0b0", "#a0a0a0", "#b0b0b0"];
const Skeleton = (props) => {
  const loading = useSharedValue(0);
  useEffect(() => {
    loading.value = 1;
  }, []);
  const animateImageContainer = (widthComponent) => {
    return useAnimatedStyle(() => {
      const translateX = interpolate(
        loading.value,
        [0, 1],
        [-widthComponent, widthComponent],
        Extrapolate.CLAMP
      );
      return {
        borderRadius: 0,
        transform: [
          {
            translateX: withRepeat(
              withTiming(translateX, {
                duration: 1500,
                easing: Easing.linear,
              }),
              -1
            ),
          },
        ],
      };
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={[styles.image, { backgroundColor: bgGrey }]}>
          <AnimatedLinearGradient
            colors={COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.image,
              StyleSheet.absoluteFill,
              animateImageContainer(imageSize),
            ]}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.skeletonTileContainer]}>
          <AnimatedLinearGradient
            colors={COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.skeletonTileContainer,
              { marginTop: 0, position: "absolute", top: 0, left: 0 },
              animateImageContainer(styles.skeletonTileContainer.width),
            ]}
          />
        </View>

        <View style={[styles.skeletonDescriptionContainer]}>
          <AnimatedLinearGradient
            colors={COLORS}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.skeletonDescriptionContainer,
              { marginTop: 0 },
              StyleSheet.absoluteFill,
              animateImageContainer(styles.skeletonDescriptionContainer.width),
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default Skeleton;
