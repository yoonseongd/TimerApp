import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  setTestDeviceIDAsync,
  AdMobBanner,
  AdMobInterstitial,
} from "expo-ads-admob";
import { Ionicons } from "@expo/vector-icons";

export default class Information extends Component {
  async componentDidMount() {
    // await setTestDeviceIDAsync("EMULATOR");
    await AdMobInterstitial.setAdUnitID(
      "ca-app-pub-7675990536241720/7583362112"
    ); // Test ID, Replace with your-admob-unit-id
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
  }
  static navigationOptions = {
    tabBarIcon: () => {
      return (
        <Ionicons
          name="md-information-circle-outline"
          size={32}
          color="darkturquoise"
        />
      );
    },
  };
  bannerError() {
    // console.log("An error");
    return;
  }
  render() {
    return (
      <LinearGradient colors={["#4b79a1", "#283e51"]} style={styles.container}>
        <ScrollView>
          {/* Display a banner */}
          <AdMobBanner
            style={styles.bottomBanner}
            bannerSize="banner"
            adUnitID="ca-app-pub-7675990536241720/9711418731"
            // onAdViewDidReceiveAd={() => console.log("success")}
            // Test ID, Replace with your-admob-unit-id
            setTestDeviceID="EMULATOR"
            didFailToReceiveAdWithError={this.bannerError}
          />
          <View style={styles.header}>
            <Text style={styles.headerText}>Instruction</Text>
            <Text style={styles.heading}>
              이 타이머앱은 다른 경쟁자보다 더 빠르고 정확하게 문제를 맞출 수
              있도록 하는 훈련을 도와줘요! 
            </Text>
            <Text style={styles.heading}>
              혼자 모의시험을 풀 때는 괜찮다가도 막상 시험을 칠 때는 정해진 시간
              안에 맞춰 풀기가 어렵죠? 오구오구 ㅜㅜ
            </Text>
            <Text style={styles.heading}>
              시험장에서 고득점을 달성하기 위해서는 정해진 시간 안에 고도의
              집중력과 긴장감을 갖고 문제를 풀 수 있어야 합니다. 시간 감각을
              기르는 것은 필수예요!
            </Text>
            <Text style={styles.heading}>
              여러분은 이 타이머 앱으로 체감 시간을 마음대로 조정할 수
              있습니다! 
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>How to setting</Text>
            <Image
              style={styles.image}
              source={require("../img/setting.png")}
            />
            <Text style={styles.heading}>
              예를 들어, 제한 시간이 60분인 시험을 준비할 때
            </Text>
            <Text style={styles.heading}>5분 더 빨리 풀기위해</Text>
            <Text style={styles.heading}>체감 시간을 55분으로 설정하면</Text>
            <Text style={styles.heading}>1. 실제 시험 시간 예)60</Text>
            <Text style={styles.heading}>2. 체감 시험 시간 예)55</Text>
            <Text style={styles.heading}>
              여러분이 설정한 시간에 맞게 타이머의 동작 배율이 달라집니다.
            </Text>
            <Text style={styles.heading}>
              수험생 여러분의 타이머는 60:00 에서 00:00이 되지만 실제로는 55분이
              지나기 때문에 더 긴장감 있는 연습이 가능해 집니다.
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Let`s play</Text>
            <Image style={styles.image} source={require("../img/60.png")} />
            <Image style={styles.image} source={require("../img/5951.png")} />
            <Text style={styles.heading}>
              수험생 여러분이 이 타이머 어플을 통해 원하는 목표를 꼭 이루는데
              도움이 되면 좋겠어요
            </Text>
            <Text style={styles.heading}>파이팅!!!!!!</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    margin: 10,
  },
  header: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  },
  headerText: {
    textAlign: "center",
    fontSize: 60,
    color: "rgba(175, 47, 47, 0.25)",
    fontWeight: "100",
  },

  heading: {
    color: "white",
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  bottomBanner: {
    position: "absolute",
    alignSelf: "center",
    top: 600,
  },
});
