import { StyleSheet } from "react-native";

export const imageSize = 70;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    elevation: 4,
    backgroundColor: "white",
    flexDirection: "row",
    
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    height: "auto",
    width: "20%",
    overflow: "hidden",
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize / 2,
    overflow: "hidden",
    resizeMode: "cover",
  },
  contentContainer: {
    width: "80%",
    paddingHorizontal: 10,
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    width:'100%',
    fontSize: 22,
    fontWeight: "bold",
    height: 28,
  },
  description: {
    fontSize: 22,
    fontWeight: "300",
    height: 28,
  },
  skeletonTileContainer: {
    width: 250,
    height: 20,
    marginTop: 10,
    borderRadius: 70,
    backgroundColor: "#a0a0a0",
    overflow: "hidden",
  },
  skeletonTileContainer: {
    width: 250,
    height: 20,
    borderRadius: 70,
    backgroundColor: "#a0a0a0",
    overflow: "hidden",
  },
  skeletonDescriptionContainer: {
    width: 180,
    height: 20,
    marginTop: 10,
    borderRadius: 70,
    backgroundColor: "#a0a0a0",
    overflow: "hidden",
  },

});

export default styles;
