import React from "react";
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Image, View, Dimensions, StyleSheet, Text } from "react-native";
import { BlurView } from "expo-blur";
const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
const { width } = Dimensions.get("window");
const imageHeight = 400;
const imageWidth = 300;
const marginW = 10;
export const remainingSpace = width - imageWidth - marginW * 2;
export const snapToInterval = imageWidth + marginW * 2;

const Card = ({ item, index, scrollX }) => {
  const inputRange = [
    (index - 1) * snapToInterval,
    index * snapToInterval,
    (index + 1) * snapToInterval,
  ];
  const outputRange = [0.8, 1, 0.8];
  const imageStyle = useAnimatedStyle(() => {
    const deriveScale = interpolate(
      scrollX.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale: deriveScale }],
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      scrollX.value,
      inputRange,
      [imageWidth, 0, imageWidth],
      Extrapolate.CLAMP
    );
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [imageHeight, 0, imageHeight],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ translateX: translateX },{translateY:translateY }],
    };
  });

  return (
    <View>
      <Animated.View style={[styles.imageContainer, imageStyle]}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Animated.View style={[styles.absoluteContainer,textStyle]}>
          <Text numberOfLines={1} style={styles.text}>
            {item.title}
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: imageHeight,
    width: imageWidth,
    marginHorizontal: marginW,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: { height: "100%", width: "100%", resizeMode: "cover" },
  absoluteContainer: { position: "absolute", top: 30, left: 30 },
  text: { fontSize: 28, fontWeight: "bold", color: "white" },
});
export default Card;
