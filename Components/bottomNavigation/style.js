import { StyleSheet } from "react-native";
import {
  iconContainer,
  tabBlock,
  bottomBarHeight,
  bottomBarWidth
} from "./constant.js";


const styles = StyleSheet.create({
  bottomTabContainer: {
    elevation: 4,
    height: bottomBarHeight,
    width: bottomBarWidth,
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  tabContainer: {
    height: "100%",
    width: tabBlock,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    height: iconContainer,
    justifyContent: "center",
    alignItems: "center",
    width: iconContainer,
    borderRadius: iconContainer / 2,
  },
  selectedContainer: {
    overflow: "hidden",
    height: iconContainer,
    justifyContent: "center",
    alignItems: "center",
    width: iconContainer,
    borderRadius: iconContainer / 2,
    position: "absolute",
    bottom: bottomBarHeight / 2 - iconContainer / 2,
    left: 0,
    backgroundColor:"#28c7fa"
  },
});

export default styles;
