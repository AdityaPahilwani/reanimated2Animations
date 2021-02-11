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

import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
const iconContainerSize = 35;
const iconSize = 24;
const AccordionExample = (props) => {
  const accordionBodyHeight = useSharedValue(0);
  const accordionOpen = useSharedValue(0);
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
        duration: 500,
        easing: Easing.ease,
      }),
      marginTop: withTiming(accordionOpen.value ? 10 : 0, {
        duration: 500,
        easing: Easing.ease,
      }),
      borderRadius: withTiming(accordionOpen.value ? 10 : 0, {
        duration: 500,
        easing: Easing.ease,
      }),
      overflow: "hidden",
    };
  });

  const rotateZ = useDerivedValue(() => {
    return accordionOpen.value ? `${Math.PI} deg` : "0 deg";
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
  const parenRef = useAnimatedRef();

  return (
    <View style={{ marginVertical: 10 }}>
      <Animated.View style={[styles.card]}>
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
            <Text style={styles.accordionText}>Accordion</Text>
            <Animated.View style={[styles.iconContainer, animateIcon]}>
              <AntDesign name="down" size={iconSize} color="white" />
            </Animated.View>
          </View>
        </Pressable>
      </Animated.View>
      <Animated.View
        ref={parenRef}
        style={[styles.accordionBody, styles.card, animateContainer]}
      >
        <View
          ref={viewRef}
          onLayout={(event) => {
            var { height } = event.nativeEvent.layout;

            accordionBodyHeight.value = height;
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

const styles = StyleSheet.create({
  accordion: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    elevation: 4,
    overflow: "hidden",
    borderRadius: 10,
  },
  accordionText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  innerText: {
    fontSize: 26,
  },
  accordionBody: {
    alignItems: "flex-start",
    paddingHorizontal: 10,
  },
  iconContainer: {
    height: iconContainerSize,
    width: iconContainerSize,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: iconContainerSize / 2,
    overflow: "hidden",
  },
});

const Accordion = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 20, flexGrow: 1 }}>
      <AccordionExample />
      <AccordionExample />
      <AccordionExample />
      <AccordionExample />
      <AccordionExample />
      <AccordionExample />
      <AccordionExample />
      <AccordionExample />
    </ScrollView>
  );
};
export default Accordion;
