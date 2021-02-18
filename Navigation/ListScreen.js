import React from "react";
import Data from "./Data";
import { FlatList, Pressable, Text, StyleSheet } from "react-native";

const ListScreens = (props) => {
  return (
    <FlatList
      data={Data}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.title}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            style={styles.button}
            onPress={() => {
              props.navigation.navigate(item.title);
            }}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </Pressable>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    flex: 1,
    borderRadius:10,
    padding: 10,
    marginVertical:5,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: { fontSize: 24, fontWeight: "bold" },
});

export default ListScreens;
