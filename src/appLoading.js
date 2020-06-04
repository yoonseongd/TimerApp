import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import Start from "./start";

import Animated, { Easing } from "react-native-reanimated";
import { TapGestureHandler, State } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug("stop clock", stopClock(clock))),
    state.position,
  ]);
}
class Loading extends Component {
  constructor() {
    super();
    this.state = {
      startClick: false,
    };
    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            ),
          ]),
      },
      setTimeout(
        function () {
          this.setState({ startClick: true });
        }.bind(this),
        3500
      ),
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 2, 0],
      extrapolate: Extrapolate.CLAMP,
    });
  }
  render() {
    if (!this.state.startClick) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            justifyContent: "flex-end",
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
            }}
            source={require("./img/하단.png")}
          >
            <Animated.View
              style={{
                ...StyleSheet.absoluteFill,
                transform: [{ translateY: this.bgY }],
              }}
            >
              <Image
                source={require("./img/상단4.png")}
                style={{ flex: 1, height: null, width: null }}
              />
            </Animated.View>
            <View style={{ height: height / 3, justifyContent: "center" }}>
              <TapGestureHandler onHandlerStateChange={this.onStateChange}>
                <Animated.View
                  style={{
                    ...styles.button,
                    opacity: this.buttonOpacity,
                    transform: [{ translateY: this.buttonY }],
                  }}
                >
                  <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    Start
                  </Text>
                </Animated.View>
              </TapGestureHandler>
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return <Start />;
    }
  }
}
export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
});
