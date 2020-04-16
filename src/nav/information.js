import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "../theme";

export default class Information extends Component {
  render() {
    return (
      <LinearGradient colors={["#7DE2FC", "#B9B6E5"]} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.heading}>설명서</Text>
          <Text>이 타이머 앱은 수험생 여러분의 시험</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  heading: {
    color: "white",
    fontSize: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  container: {
    // backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    margin: 10,
    backgroundColor: "white",
    paddingHorizontal: 8,
    height: 50,
  },
});
