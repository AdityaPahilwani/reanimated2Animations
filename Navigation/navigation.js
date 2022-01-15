import React from "react";
import Data from "./Data";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreens from "./ListScreen";
const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Animations" component={ListScreens} />
        {Data.map((item, index) => {
          return <Stack.Screen name={item.title} component={item.screen} key={item.title}/>;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
