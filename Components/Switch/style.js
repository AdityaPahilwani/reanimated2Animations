import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const containerPadding = 1;
const switchPadding = 5;
const switchHeight = 30;
const switchContainerSize = 50 - containerPadding * 2;
export const switchSize = switchHeight - switchPadding * 2;
export const maxWidthSwitch = switchContainerSize - switchPadding * 2;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: containerPadding,
    marginVertical:10,
    alignItems: "center",
  },
  switchContainer: {
    width: switchContainerSize,
    height: switchHeight,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: switchContainerSize,
    paddingHorizontal: switchPadding,
    justifyContent: "center",
  },
  switch: {
    height: switchSize,
    width: switchSize,
    borderRadius: switchSize,
    backgroundColor: "#324e7b",
    elevation: 4,
  },
});

export default styles;
