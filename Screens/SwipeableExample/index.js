import React, { useState } from "react";
import { ScrollView } from "react-native";
import Swipeable from "../../Components/Swipeable/index";
import { dataArr } from '../../Constants/Data'

const SwipeableExample = () => {
  const [data, setData] = useState(dataArr)
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      {data.map((item, index) => (
        <Swipeable key={item} index={index} setData={setData} />
      ))}
    </ScrollView>
  );
};
export default SwipeableExample;
