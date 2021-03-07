import { StyleSheet } from "react-native";

export const paddingBox = 10;
export const swipeContainerWidth = 70;
const styles = StyleSheet.create({
  rowContainer: {
    marginVertical: 10,
    
    flexDirection: "row",
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
  },
  box: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
  },

  renderContainer: {
    position: "absolute",
    left: -swipeContainerWidth-paddingBox,
    height: 100,
    width: swipeContainerWidth,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  circleButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
