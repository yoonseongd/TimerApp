import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

import { colors } from "../theme";

function formatTime(exam_time) {
  let minutes = Math.floor(exam_time / 60);
  exam_time -= minutes * 60;
  let seconds = parseInt(exam_time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

// static navigationOptions = {
//     title: "Timer",
//     headerTitleStyle: {
//       color: "black",
//       fontSize: 20,
//       fontWeight: "400",
//       alignSelf: "center",
//     },
//   };

export default class Timer extends React.Component {
  render() {
    const { time_fact, exam_time } = this.props.screenProps;
    // return (
    //   <View>
    //     <Text>{time_fact}</Text>
    //     <Text>{feel_time}</Text>
    //   </View>
    // );

    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>{formatTime(exam_time)}</Text>
        </View>

        <View style={styles.lower}>
          {/* // {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
              // {isPlaying && (
              //   <Button iconName="stop-circle" onPress={restartTimer} />
              // )} */}
          {/* <Button iconName="play-circle" />
          <Button iconName="stop-circle" /> */}
          <View>
            <Text>{time_fact}</Text>
            <Text>{exam_time}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   cityContainer: {
//     padding: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: colors.primary,
//   },
//   city: {
//     fontSize: 20,
//   },
//   country: {
//     color: "rgba(0,0,0,.5)",
//   },
// });
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
  },
  time: {
    color: "white",
    fontSize: 80,
    fontWeight: "100",
  },
});
