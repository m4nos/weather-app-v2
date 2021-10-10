import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import initialCitiesIds from "../../data/initialCitiesIds";


import citiesActions from "../store/actions/citiesActions";

import { useSelector, useDispatch } from "react-redux";

import CityCard from "../components/CityCard";

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const cities = useSelector((state) => state.availableCities);
  console.log(cities);

  const dispatch = useDispatch();

  const loadCities = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(citiesActions.setCities());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadCities().then(() => setIsLoading(false));
  }, [dispatch, loadCities]);

  const selectCityHandler = (cityId) => {
    props.navigation.navigate("Forecast", {
      cityId,
    });
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isLoading && cities.length === 0) {
    return (
      <View>
        <Text>No cities</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        onRefresh={loadCities}
        refreshing={isRefreshing}
        data={cities}
        keyExtractor={(city) => city.cityId}
        renderItem={({ itemData }) => (
          <CityCard
            icon={itemData.city.icon}
            cityName={itemData.city.cityName}
            cityCountry={itemData.city.cityCountry}
            weather={itemData.city.weather}
            temprature={itemData.city.temprature}
            navigation={navigation}
          />
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
