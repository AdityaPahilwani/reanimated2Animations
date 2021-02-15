import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const FontSize = 22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius:10,
    backgroundColor:'#ace6f6',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin:10,
  },
  buttonText: {
    fontSize: FontSize,
  },
  darkContainer: {
    position: "absolute",
    opacity: 1,
    zIndex: 4,
    height,
    width,
    backgroundColor: "black",
  },
  lorem: {
    fontSize: FontSize,
  },
});

export default styles;
