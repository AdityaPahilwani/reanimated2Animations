import BottomSheet from "../Screens/BottomSheet/BottomSheet";
import AccordionExample from "../Screens/AccordionExample";
import SwipeableExample from "../Screens/SwipeableExample";
import ClassicIpod from "../Screens/classicIpod";
import DarkMode from "../Screens/darkMode";
import FlatlistAnimation from "../Screens/FlatlistAnimation/FlatlistAnimation";
import BottomBarTapPress from "../Screens/bottomBarTapPress";
import Skeleton from "../Screens/Skeleton";
import StickyButton from "../Screens/StickyButton";
import Switch from "../Screens/Switch";
import SlideToCompare from "../Screens/SlideToCompare";
const Data = [
  { title: "BottomSheet", screen: BottomSheet },
  { title: "Accordion", screen: AccordionExample },
  { title: "Swipeable", screen: SwipeableExample },
  { title: "ClassicIpod", screen: ClassicIpod },
  // Interpolating color not working now
  // { title: "DarkMode", screen: DarkMode },
  { title: "Flatlist Animation", screen: FlatlistAnimation },
  { title: "Bottom bar tap press Animation", screen: BottomBarTapPress },
  { title: "Skeleton loading", screen: Skeleton },
  { title: "StickyButton", screen: StickyButton },
  { title: "Animated Switch", screen: Switch },
  { title: "SlideToCompare", screen: SlideToCompare },
];

export default Data;
