import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";

import Tabs from "./src";

export default class App extends Component {
  state = {
    time_fact: 1,
    exam_time: 90,
  };

  setting_time_fact = (time_fact, exam_time) => {
    this.setState({ time_fact, exam_time=exam_time*60 });
  };

  //유상코드

  render() {
    return (
      <Tabs
        screenProps={{
          time_fact: this.state.time_fact,
          exam_time: this.state.exam_time,
          setting_time_fact: this.setting_time_fact,
        }}
      />
    );
  }
}
