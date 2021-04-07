import { StyleSheet } from "react-native";
const iconContainerSize = 35;
export const styles = StyleSheet.create({
  accordion: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    elevation: 5,
    overflow: "hidden",
  },
  accordionText: {
    fontWeight: "bold",
    fontSize: 26,
  },
  innerText: {
    fontSize: 26,
  },
  accordionBody: {
    overflow: "hidden",
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
