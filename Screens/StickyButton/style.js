import { StyleSheet } from "react-native";
const buttonHeight = 50;
export const bottomDistance = 10;
const paddingHorizontal = 20;
const styles = StyleSheet.create({
  scrollContainer: { padding: paddingHorizontal, backgroundColor: "white" },
  fontSize: {
    fontSize: 22,
    letterSpacing: 2,
  },
  buttonContainer: {
    height: buttonHeight,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ace6f6",
    elevation: 4,
    borderRadius: 10,
  },
  absoluteButtonContainer: {
    position: "absolute",
    bottom: bottomDistance,
    height: buttonHeight,
    width: "100%",
    paddingHorizontal: paddingHorizontal,
  },
  buttonText: {
    fontSize: 26,
    letterSpacing: 2,
  },
});

export default styles;
