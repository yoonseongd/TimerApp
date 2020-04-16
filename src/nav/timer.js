import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  StatusBar,
} from "react-native";

import { colors } from "../theme";

// //////
//  // 중지를 위해 ID 보관
//  var timerId = null;

//  // 시계 시작
//  function StartClock() {
//      actualTime = Number(actualTime);
//      feelTime = Number(feelTime);
//      var magni = (actualTime) / (feelTime);
//      var setting = 1000/magni;
//      min = actualTime;
//      count = actualTime*60;
//      PrintTime();
//      timerId = setInterval(PrintTime, setting);
//  }

//  function StopClock() {
//          clearInterval(timerId);
//  }

//  function PrintTime() {
//      sec = count-(min*60);
//      return({min} 분 {sec} 초);
//      document.getElementById("result").innerHTML = "남은시간"+min+"분"+sec+"초";
//      if(count ==0){StopClock()}
//      count --;
//      min = parseInt(count/60)

//  }

export default class Timer extends React.Component {
  state = ({ exam_time, time_fact } = this.props.screenProps);
  printTime = (exam_time) => {
    this.setState((exam_time = exam_time - 1));
  };

  formatTime = (exam_time, time_fact) => {
    var setting = 1000 / Number(time_fact);
    setInterval(PrintTime(exam_time), setting);
    let minutes = Math.floor(exam_time / 60);
    exam_time -= minutes * 60;
    let seconds = parseInt(exam_time % 60, 10);
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
  };

  render() {
    const { time_fact, exam_time } = this.state;

    //이제 exam은 sec야.

    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>{formatTime(exam_time, time_fact)}</Text>
        </View>

        <View style={styles.lower}>
          <View>
            <Text>{time_fact}</Text>
            <Text>{exam_time}</Text>
          </View>
        </View>
      </View>
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
  },
  time: {
    color: "white",
    fontSize: 80,
    fontWeight: "100",
  },
});
