import React, { Component } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class Information extends Component {
  render() {
    return (
      <LinearGradient colors={["#4b79a1", "#283e51"]} style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>Instruction</Text>
            <Text style={styles.heading}>
              이 타이머 앱은 다른 경쟁자보다 더 빠르게 더 정확하게 문제를
              맞추기위한 훈련을 해줘요!!!!
            </Text>
            <Text style={styles.heading}>
              혼자 모의 시험을 풀 때 점수는 잘 나오지만 막상 정해진 시험 시간에
              문제를 풀면 다 못 풀죠? 오구오구ㅜㅜ
            </Text>
            <Text style={styles.heading}>
              시험장에서는 정해진 시간에 고도의 집중과 긴장감을 갖고 문제를 풀어
              넘길때 빠른 두뇌회전이 필요한데
            </Text>
            <Text style={styles.heading}>
              제 시간에 다 맞추려면 그 시험적 감을 길러야해요!!!!
            </Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>How to setting</Text>
            <Image
              style={styles.image}
              source={require("../img/setting.png")}
            />
            <Text style={styles.heading}>그래서 이 타이머 앱은</Text>
            <Text style={styles.heading}>여러분의 실제 시험이 60분이고</Text>
            <Text style={styles.heading}>5분 더 빨리 풀기위해</Text>
            <Text style={styles.heading}>체감 하고싶은 55분을 설정하면</Text>
            <Text style={styles.heading}>1. 실제 시험 시간 예)60</Text>
            <Text style={styles.heading}>2. 체감 시험 시간 예)55</Text>
            <Text style={styles.heading}>여러분이 설정한 배율만큼</Text>
            <Text style={styles.heading}>
              ( 60/55 : 대략 1.09 배율) 1초가 1.09초 빠르게 타이머가 동작해서
            </Text>
            <Text style={styles.heading}>
              수험생 여러분의 타이머는 60:00 에서 00:00 이 되지만 실제 시간은
              55분이 지나기에
            </Text>
            <Text style={styles.heading}>
              남들보다 더 긴장감있고, 높은 집중력으로 빨리 문제를 풀수
              있어요!!!!
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
});
