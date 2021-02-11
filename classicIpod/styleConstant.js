import { Dimensions } from "react-native";

let { width } = Dimensions.get("window");
export const ipodConstant = {
  padding: 15,
  margin: 15,
  backgroundColor: '#4d4f53',
};
export const coverCards = {
  width: 300,
  height: 340,
  marginHorizontal: function () {
    let w = Math.floor(
      (width - (ipodConstant.padding * 2)- (ipodConstant.margin * 2)) / 2 
    );
    return w - Math.floor(this.width / 2);
  },
  marginVertical: 40,
  borderRadius: 15,
};

export const details_BG = "#f07b3f";
export const OUTER_BALL_SIZE = 200;
export const INNER_BALL_SIZE = OUTER_BALL_SIZE / 2;
export const CENTER_INNER_BALL =
  OUTER_BALL_SIZE - INNER_BALL_SIZE - INNER_BALL_SIZE / 2;
