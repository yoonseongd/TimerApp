import React, { Component } from "react";

import Tabs from "./nav/taps";

export default class Start extends Component {
  state = {
    exam_time: 60,
    time_fact: 1,
  };

  setting_time_fact = (time_fact, exam_time) => {
    this.setState({ time_fact, exam_time });
  };

  render() {
    return (
      <Tabs
        screenProps={{
          exam_time: this.state.exam_time,
          time_fact: this.state.time_fact,
          setting_time_fact: this.setting_time_fact,
        }}
      />
    );
  }
}
