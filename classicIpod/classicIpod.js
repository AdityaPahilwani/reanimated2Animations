import React from "react";
import { View, Dimensions, Image, Text, ScrollView } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  useAnimatedRef,
  scrollTo,
  useAnimatedGestureHandler,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { data } from "./data";
import { styles } from "./styles";
import { coverCards, OUTER_BALL_SIZE } from "./styleConstant";
import { Ionicons } from "@expo/vector-icons";
const ClassicIpod = () => {
  const positionScrollView = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();
  const itemTotalSize = coverCards.width + coverCards.marginHorizontal() * 2;

  const scrollToNearestItem = (offset) => {
    "worklet";
    let minDistance;
    let minDistanceIndex = 0;
    for (let i = 0; i < data.length; ++i) {
      const distance = Math.abs(i * itemTotalSize - offset);
      if (minDistance === undefined) {
        minDistance = distance;
      } else {
        if (distance < minDistance) {
          minDistance = distance;
          minDistanceIndex = i;
        }
      }
    }

    scrollTo(scrollViewRef, minDistanceIndex * itemTotalSize, 0, true);
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e, ctx) => {
      positionScrollView.value = e.contentOffset.x;
    },
    onEndDrag: (e, ctx) => {
      scrollToNearestItem(e.contentOffset.x);
    },
    onMomentumEnd: (e, ctx) => {
      scrollToNearestItem(e.contentOffset.x);
    },
  });
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      ctx.start = { x: e.x, y: e.y };
      ctx.last = ctx.start;
    },
    onActive: (e, ctx) => {
      const currentPoz = { x: e.x, y: e.y };
      const lastPoz = ctx.last;
      ctx.last = currentPoz;
      if (currentPoz.x === lastPoz.x && lastPoz.y === currentPoz.y) {
        // no change so far
        return;
      }
      const changeVector = {
        x: currentPoz.x - lastPoz.x,
        y: currentPoz.y - lastPoz.y,
      };
      const toCenterV = {
        x: OUTER_BALL_SIZE / 2 - lastPoz.x,
        y: OUTER_BALL_SIZE / 2 - lastPoz.y,
      };
      const crossProd =
        changeVector.x * toCenterV.y - changeVector.y * toCenterV.x;
      if (crossProd === 0) {
        return;
      }
      const dist = Math.sqrt(changeVector.x ** 2 + changeVector.y ** 2);
      // up or down
      const sign = crossProd < 0 ? -1 : 1;
      const arr = [0, itemTotalSize * (data.length - 1)];
      positionScrollView.value = interpolate(
        positionScrollView.value + sign * dist * 5,
        arr,
        arr,
        Extrapolate.CLAMP
      );
      scrollTo(scrollViewRef, positionScrollView.value, 0, false);
    },
    onEnd: (e, ctx) => {
      scrollToNearestItem(positionScrollView.value);
    },
  });
  return (
    <View style={styles.ipodBoy}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal={true}
        scrollEventThrottle={1}
        onScroll={scrollHandler}
        style={styles.scrollViewContainer}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map(({ artist, song }, i) => {
          const animateCard = useAnimatedStyle(() => {
            const itemDistance = Math.abs(
              (positionScrollView.value - i * itemTotalSize) / itemTotalSize
            );
            let opacity = 1;
            if (itemDistance >= 0.5) {
              opacity = 0.3;
            } else if (itemDistance > 3) {
              opacity = 0;
            }

            return {
              opacity: opacity,
            };
          });
          return (
            <Animated.View key={i} style={[styles.coverPicCard, animateCard]}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="musical-notes-outline"
                  size={80}
                  color="black"
                />
              </View>
              <View style={styles.detailContainer}>
                <Text style={styles.label} numberOfLines={1}>
                  {artist}
                </Text>
                <Text style={[styles.songLabel]} numberOfLines={1}>
                  {song}
                </Text>
              </View>
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
      <View style={styles.trackPadContainer}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={styles.ballWrapper}>
            <View style={styles.innerBall} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default ClassicIpod;
