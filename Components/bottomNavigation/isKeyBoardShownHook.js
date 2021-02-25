import React, { useState, useEffect } from "react";
import { Platform, Keyboard } from "react-native";
const IsKeyBoardShown = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const handleKeyboardShow = () => {
    setKeyboardVisible(true);
  };
  const handleKeyboardHide = () => {
    setKeyboardVisible(false);
  };
  useEffect(() => {
    if (Platform.OS === "ios") {
      Keyboard.addListener("keyboardWillShow", handleKeyboardShow);
      Keyboard.addListener("keyboardWillHide", handleKeyboardHide);
    } else {
      Keyboard.addListener("keyboardDidShow", handleKeyboardShow);
      Keyboard.addListener("keyboardDidHide", handleKeyboardHide);
    }

    return () => {
      if (Platform.OS === "ios") {
        Keyboard.removeListener("keyboardWillShow", handleKeyboardShow);
        Keyboard.removeListener("keyboardWillHide", handleKeyboardHide);
      } else {
        Keyboard.removeListener("keyboardDidShow", handleKeyboardShow);
        Keyboard.removeListener("keyboardDidHide", handleKeyboardHide);
      }
    };
  }, [handleKeyboardHide, handleKeyboardShow]);
  return { keyboardVisible: keyboardVisible };
};

export default IsKeyBoardShown;
