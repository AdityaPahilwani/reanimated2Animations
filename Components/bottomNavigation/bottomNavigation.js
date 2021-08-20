import React from "react";
import { View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./style";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";
import {
  tabBlock,
  iconContainer,
  activeIndex,
  icons,
  bottomBarHeight,
} from "./constant.js";
import IsKeyBoardShown from "./isKeyBoardShownHook";

const BottomNavigationTapPress = (props) => {
  const { keyboardVisible } = IsKeyBoardShown();
  const selectedIndex = useSharedValue(activeIndex);
  const config = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    velocity: 2,
  };
  const animateSelectedContainer = useAnimatedStyle(() => {
    return {
      backgroundColor: icons[selectedIndex.value].color,
      transform: [
        {
          translateX: withSpring(
            selectedIndex.value * tabBlock + tabBlock / 2 - iconContainer / 2,
            {
              config,
            }
          ),
        },
      ],
    };
  });

  const animateIconContainer = ({ index }) => {
    return useAnimatedStyle(() => {
      let offSet = index === selectedIndex.value ? -bottomBarHeight : 0;
      return {
        transform: [
          {
            translateY: withSpring(offSet, config),
          },
        ],
      };
    });
  };
  const handleKeyboardAnimation = ({ forActiveBar }) => {
    return useAnimatedStyle(() => {
      let offSet = forActiveBar ? bottomBarHeight * 2 : bottomBarHeight;
      return {
        transform: [
          {
            translateY: withTiming(keyboardVisible ? offSet : 0, {
              duration: 500,
              easing: Easing.linear,
            }),
          },
        ],
      };
    });
  };
  return (
    <>
      <Animated.View
        style={[
          styles.bottomTabContainer,
          { position: "absolute", bottom: 0 },
          handleKeyboardAnimation({ forActiveBar: true }),
        ]}
      >
        {icons.map((item, index) => {
          return (
            <Pressable
              key={item.name}
              onPress={() => {
                selectedIndex.value = index;
              }}
            >
              <View style={[styles.tabContainer, { overflow: "hidden" }]}>
                <Animated.View
                  style={[
                    styles.iconContainer,
                    animateIconContainer({ index }),
                  ]}
                >
                  <Feather name={item.name} size={24} color={item.color} />
                </Animated.View>
              </View>
            </Pressable>
          );
        })}

        <Animated.View
          style={[styles.selectedContainer, animateSelectedContainer]}
        ></Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          styles.bottomTabContainer,
          { position: "absolute", bottom: -bottomBarHeight },
          handleKeyboardAnimation({ forActiveBar: false }),
        ]}
      >
        {icons.map((item, index) => {
          return (
            <View
              style={styles.tabContainer}
              key={`${item.name} unique unique unique `}
            >
              <Animated.View
                style={[styles.iconContainer, animateIconContainer({ index })]}
              >
                <Feather name={item.name} size={24} color="white" />
              </Animated.View>
            </View>
          );
        })}
      </Animated.View>
    </>
  );
};

export default BottomNavigationTapPress;
