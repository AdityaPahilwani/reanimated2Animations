import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export const icons = [
  { name: "send", color: "#28c7fa" },
  { name: "home", color: "#ff304f" },
  { name: "search", color: "#22eaaa" },
  { name: "user", color: "#ffd717" },
];
export const iconContainer = 50;
export const tabBlock = width / icons.length;
export const activeIndex = 0;
export const bottomBarHeight = 70;
export const bottomBarWidth = width;
