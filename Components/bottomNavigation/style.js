import { StyleSheet, Dimensions } from "react-native";
import {
  sizeIconContainer,
  iconBlock,
  activeIndex,
  bottomBarHeight,
  bottomBarWidth
} from "./constant.js";
console.log(sizeIconContainer, iconBlock, activeIndex);

const styles = StyleSheet.create({
  bottomTabContainer: {
    elevation: 4,
    height: bottomBarHeight,
    width: bottomBarWidth,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  itemContainer: {
    height: "100%",
    width: iconBlock,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    height: sizeIconContainer,
    justifyContent: "center",
    alignItems: "center",
    width: sizeIconContainer,
    borderRadius: sizeIconContainer / 2,
  },
  selectedContainer: {
    overflow: "hidden",
    height: sizeIconContainer,
    justifyContent: "center",
    alignItems: "center",
    width: sizeIconContainer,
    borderRadius: sizeIconContainer / 2,
    backgroundColor: "red",
    position: "absolute",
    bottom: bottomBarHeight / 2 - sizeIconContainer / 2,
    left: 0,
  },
});

export default styles;
