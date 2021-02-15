import { StyleSheet, Dimensions } from "react-native";
import {
  ipodConstant,
  coverCards,
  details_BG,
  OUTER_BALL_SIZE,
  INNER_BALL_SIZE,
  CENTER_INNER_BALL,
} from "./styleConstant.js";

export const styles = StyleSheet.create({
  ipodBoy: {
    backgroundColor: ipodConstant.backgroundColor,
    padding: ipodConstant.padding,
    alignItems: "center",
    margin: ipodConstant.margin,
    borderRadius:30
  },
  scrollViewContainer: {
    borderRadius: 20,
    backgroundColor: "white",
    height: "60%",
  },
  coverPicCard: {
    width: coverCards.width,
    height: coverCards.height,
    marginHorizontal: coverCards.marginHorizontal(),
    marginVertical: coverCards.marginVertical,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: coverCards.borderRadius,
    elevation: 15,
    overflow: "hidden",
  },
  iconContainer: {
    width: "100%",
    height: "75%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: details_BG,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  songLabel: {
    fontSize: 22,
  },
  trackPadContainer: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  ballWrapper: {
    borderRadius: OUTER_BALL_SIZE / 2,
    width: OUTER_BALL_SIZE,
    height: OUTER_BALL_SIZE,
    backgroundColor: "white",
  },
  innerBall: {
    position: "absolute",
    width: INNER_BALL_SIZE,
    height: INNER_BALL_SIZE,
    borderRadius: INNER_BALL_SIZE,
    top: CENTER_INNER_BALL,
    left: CENTER_INNER_BALL,
    backgroundColor: "#D3D3D3",
  },
});
