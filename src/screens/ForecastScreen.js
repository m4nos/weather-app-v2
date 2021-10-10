import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const ForecastScreen = ({ navigation }) => {
  const cityName = navigation.getParam("cityName");
  return (
    <View>
      <Text>forecast {cityName}</Text>
    </View>
  );
};

ForecastScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Feather name="plus" style={styles.plusIcon} size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  plusIcon: {
    color: "black",
    marginRight: 15,
  },
});

export default ForecastScreen;
