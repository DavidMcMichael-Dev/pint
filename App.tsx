import { StatusBar } from "expo-status-bar";
import React, { Fragment, useRef, useState } from "react";
import { Text, View, Image } from "react-native";
import { StyleSheet, TouchableWithoutFeedback, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./styles.js";
import TabNavigator from "./components/TabNavigator";
import Auth0Config from "react-native-auth0";
import { useAuth0, Auth0Provider } from "react-native-auth0";

export default function App() {
  return (
    <Auth0Provider
      domain={"pint.eu.auth0.com"}
      clientId={"3ntFy2WvX21fEMxENFMeWwTXhNvs2qMS"}
    >
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </View>
    </Auth0Provider>
  );
}
