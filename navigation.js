import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import React from "react";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";

const navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="RecipeDetail"
          options={{ presentation: "fullScreenModal" }}
          component={RecipeDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default navigation;
