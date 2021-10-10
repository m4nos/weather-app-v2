import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const CityCard = (props) => {
  return (
    <Text>city 1,2,3,</Text>
    // <TouchableOpacity
    //   onPress={() =>
    //     props.navigation.navigate("Forecast")
    //   }
    // >
    //   <View style={styles.item}>
    //     <Image
    //       style={styles.icon}
    //       source={{ uri: `https://openweathermap.org/img/wn/${store.icon}@2x.png` }}
    //     />
    //     <Text style={styles.cityName}>
    //       {props.cityName}, {props.cityCountry}
    //       {"\n"}
    //       <Text style={styles.weather}>{weather}</Text>
    //     </Text>

    //     <Text style={styles.temp}>{temp}°C</Text>
    //   </View>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // item: {
  //   backgroundColor: "white",
  //   flex: 1,
  //   flexDirection: "row",
  // },
  // icon: {
  //   width: 100,
  //   height: 100,
  // },
  // cityName: {
  //   paddingTop: 10,
  //   fontSize: 22,
  //   fontWeight: "bold",
  // },
  // weather: {
  //   fontSize: 16,
  //   color: "#808080",
  // },
  // temp: {
  //   padding: 8,
  //   marginLeft: "auto",
  //   fontSize: 27,
  // },
});

export default CityCard;
