import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { FlatList, View, Dimensions } from "react-native";
import Card, { remainingSpace, snapToInterval } from "./Card";
import { data } from "../../Constants/Data";
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const FlatlistAnimation = () => {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x;
    },
  });
  return (
    <AnimatedFlatList
      bounces={false}
      snapToInterval={snapToInterval}
      onScroll={scrollHandler}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor:'white'
      }}
      data={data}
      keyExtractor={(item) => item.key}
      horizontal={true}
      scrollEventThrottle={8}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return <Card item={item} index={index} scrollX={scrollX} />;
      }}
      ListFooterComponent={() => <View style={{ width: remainingSpace }} />}
    />
  );
};

export default FlatlistAnimation;
