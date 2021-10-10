import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { useSelector } from "react-redux";

import SearchScreen from "./SearchScreen";

import CityCard from "../components/CityCard";

const HomeScreen = ({ navigation }) => {
  const cities = useSelector((state) => state.availableCities);
  console.log(cities);
  // DISPATCH SET_CITIES
  // useEffect();
  if (cities.length === 0) {
    return (
      <View>
        <Text>No cities</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={cities}
        keyExtractor={(city) => city.id}
        renderItem={({ item }) => (
          <CityCard navigation={navigation} city={item.data} />
        )}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
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

export default HomeScreen;
