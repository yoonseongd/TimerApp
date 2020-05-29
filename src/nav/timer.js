import React from "react";
import {
  Text,
  Vibration,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default class Timer extends React.Component {
  state = {
    count: 0,
    isPlaying: false,
  };
  static navigationOptions = {
    tabBarIcon: () => {
      return <Ionicons name="md-timer" size={32} color="darkturquoise" />;
    },
  };
  countPlus = () => {
    // console.log(
    //   this.state.count,
    //   this.props.screenProps.exam_time,
    //   this.props.screenProps.time_fact
    // );
    const { count } = this.state;
    if (count >= this.props.screenProps.exam_time) {
      Vibration.vibrate([1000, 2000, 3000]);
      this.stop();
      // console.log("time is done");
    } else {
      this.setState({ count: count + 1 });
    }
  };


  startClock = () => {
    this.timerId = setInterval(
      () => this.countPlus(),
      1000 / this.props.screenProps.time_fact
    );
    this.setState({  isPlaying: true });

    // console.log("counting");
  };

  pause = () => {
    clearInterval(this.timerId);

    this.setState({ isPlaying: false });

    // console.log("pause");
  };

  formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = parseInt(time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };
  stop = () => {
    clearInterval(this.timerId);

    this.setState({ isPlaying: false });
    this.setState({ count: 0 });
    // console.log("stop");
  };
  render() {
    const { exam_time } = this.props.screenProps;
    const time = exam_time - this.state.count;
    return (
      <LinearGradient colors={["#4b908e", "#b8d7d5"]} style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>{this.formatTime(time)}</Text>
        </View>

        <View style={styles.lower}>
          {!this.state.isPlaying && (
            <TouchableOpacity onPress={() => this.startClock()}>
              <FontAwesome name={"play-circle"} size={80} color="white" />
            </TouchableOpacity>
          )}

          {this.state.isPlaying && (
            <TouchableOpacity onPress={() => this.pause()}>
              <FontAwesome name={"pause-circle-o"} size={80} color="white" />
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => this.stop()}>
            <FontAwesome name={"stop-circle"} size={80} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ce0b24",
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  time: {
    color: "white",
    fontSize: 80,
    fontWeight: "100",
  },
});
