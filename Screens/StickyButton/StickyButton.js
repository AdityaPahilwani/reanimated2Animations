import React, { useEffect } from "react";
import { View, Alert, Text, Pressable, Dimensions } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useHeaderHeight } from "@react-navigation/elements";
import { lorem } from "../../Constants/constant";
import styles, { bottomDistance } from "./style";

const { height } = Dimensions.get("window");
const StickyButton = (props) => {
  const headerHeight = useHeaderHeight();
  const scrollY = useSharedValue(0);
  const buttonYPosition = useSharedValue(0);
  const topInset = useSafeAreaInsets().top

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollY.value = contentOffset.y;
    },
  });


  const stickYButtonAnimate = useAnimatedStyle(() => {
    const inputRange = [-1, 0, buttonYPosition.value, buttonYPosition.value + 1];
    const outputRange = [0, 0, 0, -1];
    const translateY = interpolate(scrollY.value, inputRange, outputRange);
    return {
      transform: [{ translateY: translateY }],
    };
  }, [buttonYPosition]);
  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={styles.scrollContainer}
      >
        <Text style={styles.fontSize}>{[lorem, lorem]}</Text>
        <View
          style={styles.buttonContainer}
          onLayout={(event) => {
            const { y, height: buttonHeight } = event.nativeEvent.layout;
            buttonYPosition.value =
              y - height + headerHeight + buttonHeight + bottomDistance - topInset;
          }}
        ></View>
        <Text style={styles.fontSize}>{[lorem, lorem]}</Text>
      </Animated.ScrollView>
      <Animated.View
        style={[styles.absoluteButtonContainer, stickYButtonAnimate]}
      >
        <View style={[styles.buttonContainer]}>
          <Pressable style={styles.button} onPress={() => { Alert.alert("Pressed") }}>
            <Text style={styles.buttonText}>Apply now</Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
};
export default StickyButton;
