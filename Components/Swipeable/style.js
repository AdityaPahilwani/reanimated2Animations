import { StyleSheet, Dimensions } from "react-native";
export const widthItem = Dimensions.get('window').width
export const swipeContainerWidth = 70;
const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1
  },
  box: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: widthItem,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  renderContainer: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    height: '100%',
    width: widthItem,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  circleButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
