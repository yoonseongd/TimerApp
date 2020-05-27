import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  // Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import {
//   // setTestDeviceIDAsync,
//   AdMobBanner,
//   AdMobInterstitial,
// } from "expo-ads-admob";
import { Ionicons } from "@expo/vector-icons";

export default class Setting extends Component {
  constructor(props){
    super(props);
    // this.bannerAdId=Platform.OS==='ios' ? "ca-app-pub-7675990536241720/2508991223" : "ca-app-pub-7675990536241720/1467372291";
    // this.interstitialAdId=Platform.OS==='ios' ? "ca-app-pub-7675990536241720/8882827882" : "ca-app-pub-7675990536241720/7583362112"
      this.state = {
    feel_time: "",
    exam_time: "",
  };
  }

  static navigationOptions = {
    tabBarIcon: () => {
      return <Ionicons name="md-settings" size={32} color="darkturquoise" />;
    },
  };
  // bannerError() {
  //   // console.log("An error");
  //   return;
  // }
  // async componentDidMount() {
  //   // await setTestDeviceIDAsync("EMULATOR");
  //   await AdMobInterstitial.setAdUnitID(this.interstitialAdId);
  //   await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
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
        {/* Display a banner */}
        {/* <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="banner"
          adUnitID={this.bannerAdId}
          servePersonalizedAds="true"
          // onAdViewDidReceiveAd={() => console.log("success")}
          // Test ID, Replace with your-admob-unit-id
          // setTestDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        /> */}
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
  // bottomBanner: {
  //   alignSelf: "center",
  //   position: "absolute",
  //   bottom: 0,
  // },
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
