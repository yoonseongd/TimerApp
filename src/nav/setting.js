import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { setTestDeviceIDAsync, AdMobInterstitial } from "expo-ads-admob";

export default class Setting extends Component {
  state = {
    feel_time: "",
    exam_time: "",
  };

  // async componentDidMount() {
  //   await setTestDeviceIDAsync("EMULATOR");
  //   await AdMobInterstitial.setAdUnitID(
  //     "ca-app-pub-3940256099942544/8691691433"
  //   ); // Test ID, Replace with your-admob-unit-id
  //   await AdMobInterstitial.requestAdAsync();
  //   await AdMobInterstitial.showAdAsync();
  // }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (this.state.feel_time === "" || this.state.exam_time === "")
      alert(
        "체감 하고싶은 시간(단위 :분)과 원래 시험 시간(단위 :분)을 입력해주세요."
      );
    else {
      const feel_time = this.state.feel_time;
      const exam_time = this.state.exam_time;

      const time_fact = Number(exam_time) / Number(feel_time);
      this.props.screenProps.setting_time_fact(
        time_fact,
        Number(exam_time) * 60
      );

      this.props.navigation.navigate("Timer");
    }
  };

  render() {
    return (
      <LinearGradient colors={["#00B7FF", "#FFFFC7"]} style={styles.container}>
        <Text style={styles.heading}>Setting</Text>
        <TextInput
          placeholder="체감 시험 시간 (단위: 분)"
          onChangeText={(val) => this.onChangeText("feel_time", val)}
          style={styles.input}
          value={this.state.feel_time}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="원래 시험 시간 (단위: 분)"
          onChangeText={(val) => this.onChangeText("exam_time", val)}
          style={styles.input}
          value={this.state.exam_time}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>설정 완료</Text>
          </View>
        </TouchableOpacity>
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
