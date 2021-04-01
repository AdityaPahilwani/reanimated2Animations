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
const duration = 50;
const borderRadius = 16;
const Dropdown = (props) => {
  const accordionBodyHeight = useSharedValue(0);
  const accordionOpen = useSharedValue(false);
  const toAccordionHeight = useDerivedValue(() => {
    if (!accordionOpen.value) {
      return 1;
    } else {
      return accordionBodyHeight.value;
    }
  });
  const animateContainer = useAnimatedStyle(() => {
    return {
      height: withTiming(toAccordionHeight.value, {
        duration: duration,
        easing: Easing.linear,
      }),
      overflow: "hidden",
      backgroundColor: 'red',
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
            duration: duration,
            easing: Easing.linear,
          }),
        },
      ],
      backgroundColor: withTiming(accordionOpen.value ? "#4fc1e9" : "#12e2a3", {
        duration: duration,
        easing: Easing.linear,
      }),
    };
  });
  const viewRef = useAnimatedRef();

  return (
    <View style={{ margin: 20 }}>
      <Animated.View style={[{borderRadius: borderRadius},styles.card]}>
        <Pressable
          onPress={() => {
            if (accordionBodyHeight.value === 0) {
              runOnUI(() => {
                "worklet";
                accordionBodyHeight.value = measure(viewRef).height;
                
              })();
            }
            accordionOpen.value = !accordionOpen.value;
          }}
        >
          <View style={styles.accordion}>
            <Text style={styles.accordionText}>Dropdown</Text>
            <Animated.View style={[styles.iconContainer, animateIcon]}>
              <AntDesign name="down" size={iconSize} color="white" />
            </Animated.View>
          </View>
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          styles.card,
          styles.accordionBody,
          animateContainer, 
          {borderBottomRightRadius: borderRadius, borderBottomLeftRadius: borderRadius}
        ]}
      >
        <View
          ref={viewRef}
          onLayout={(event) => {
            var { height } = event.nativeEvent.layout;

            accordionBodyHeight.value = height;
          }}
        >
          <Text style={styles.innerText}>Option 1</Text>
          <Text style={styles.innerText}>Option 2</Text>
          <Text style={styles.innerText}>Option 3</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Dropdown;
