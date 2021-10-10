import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <View>
      <TextInput style={styles.input}
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
      />
    </View>
  );
};

SearchScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Feather name="check" style={styles.checkIcon} size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkIcon: {
    color: "black",
    marginRight: 15,
  },
});

export default SearchScreen;
