// // import BottomSheet from "./BottomSheet";
// // import AccordionExample from "./Components/Accordion";
// // import ClassicIpod from "./classicIpod/index";

// import React, { useState } from "react";
// import { View, Text, Pressable } from "react-native";

// export default function App(props) {
//   const [no, setNo] = useState(0);
//   const writeText = (props) => {
//     return React.createElement(
//       Text,
//       {
//         style: { color: "white", fontSize: 22, fontWeight: "bold" },
//       },
//       `${no} Clicked`
//     );
//   };
//   const Element = React.createElement(
//     View,
//     {
//       style: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       },
//     },
//     React.createElement(
//       Pressable,
//       {
//         onPress: () => {
//           setNo(no + 1);
//         },

//         style: {
//           borderRadius:20,
//           height: 200,
//           width: 400,
//           backgroundColor: "red",
//           justifyContent: "center",
//           alignItems: "center",
//         },
//       },
//       React.createElement(writeText, {
//         text: "Work work Work work Work work Work work Work work Work work",
//       })
//     )
//   );
//   console.log(Element);
//   return Element;
// }


