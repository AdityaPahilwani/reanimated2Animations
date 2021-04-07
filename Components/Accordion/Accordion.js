import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnUI,
  useAnimatedRef,
  measure,
  useDerivedValue,
} from "react-native-reanimated";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { styles } from "./style.js";

const iconSize = 24;
const Accordion = (props) => {
  const accordionBodyHeight = useSharedValue(0);
  const accordionOpen = useSharedValue(0);
  const toAccordionHeight = useDerivedValue(() => {
    return accordionOpen.value ? accordionBodyHeight.value : 1;
  });
  const animateContainer = useAnimatedStyle(() => {
    return {
      height: withTiming(toAccordionHeight.value, {
        duration: 500,
        easing: Easing.ease,
      }),
      marginTop: withTiming(accordionOpen.value ? 10 : 0, {
        duration: 500,
        easing: Easing.ease,
      }),
    };
  });

  const rotateZ = useDerivedValue(() => {
    return accordionOpen.value ? `${Math.PI} rad` : "0 rad";
  });
  const animateIcon = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: withTiming(rotateZ.value, {
            duration: 500,
            easing: Easing.linear,
          }),
        },
      ],
      backgroundColor: withTiming(accordionOpen.value ? "#4fc1e9" : "#12e2a3", {
        duration: 500,
        easing: Easing.linear,
      }),
    };
  });
  const viewRef = useAnimatedRef();

  return (
    <View style={{ marginVertical: 10 }}>
      <Animated.View style={[styles.card]}>
        <Pressable
          onPress={() => {
            accordionOpen.value = !accordionOpen.value;
          }}
        >
          <View style={styles.accordion}>
            <Text style={styles.accordionText}>Accordion</Text>
            <Animated.View style={[styles.iconContainer, animateIcon]}>
              <AntDesign name="down" size={iconSize} color="white" />
            </Animated.View>
          </View>
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[styles.card, styles.accordionBody, animateContainer]}
      >
        <View
          ref={viewRef}
          onLayout={(event) => {
            accordionBodyHeight.value = event.nativeEvent.layout.height;
          }}
        >
          <Text style={styles.innerText}>Select 1</Text>
          <Text style={styles.innerText}>Select 2</Text>
          <Text style={styles.innerText}>Select 3</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;
