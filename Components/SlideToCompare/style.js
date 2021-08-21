import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const controlHolder = 50;
export const compareStickWidth = 10;
export const ContainerWidth = width - 20;
export const imageWidth = ContainerWidth / 2;
const absoluteCenterStickPos = imageWidth - compareStickWidth / 2;
const height = 300;
const styles = StyleSheet.create({
  container: {
    width: ContainerWidth,
    elevation: 4,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    height: height,
    overflow: "hidden",
  },
  imageContainer: {
    width: imageWidth,
    height: height,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  compareStick: {
    width: compareStickWidth,
    height: "100%",
    backgroundColor: "white",
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: absoluteCenterStickPos,
  },
  middleCircle: {
    width: controlHolder,
    height: controlHolder,
    borderRadius: controlHolder,
    elevation: 4,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
