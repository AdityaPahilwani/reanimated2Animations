import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
  Easing,
  runOnUI,
  useAnimatedRef,
  measure,
  useDerivedValue,
  processColor,
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
        duration: 200,
        easing: Easing.linear,
      }),
    };
  });


  const animateIcon = useAnimatedStyle(() => {
    const color = accordionOpen.value ? 'rgba(5,200,3, 1)' : 'grey'
    return {
      transform: [
        {
          rotateZ: withTiming(accordionOpen.value ? `${Math.PI * 1} rad` : "0 rad", {
            duration: 500,
            easing: Easing.linear,
          }),
        },
      ],
      backgroundColor: color
    }
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
