import Timer from "./nav/timer";
import Setting from "./nav/setting";
//import info from "./nav/info";

import { colors } from "./theme";

import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// const CitiesNav = createStackNavigator(
//   {
//     Cities: { screen: Cities },
//     City: { screen: City },
//   },
//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: colors.primary,
//       },
//       headerTintColor: "#fff",
//     },
//   }
// );

const AppTabs = createBottomTabNavigator({
  Timer: { screen: Timer },
  Setting: { screen: Setting },
  //Info: { screen: Info },
});

const Tabs = createAppContainer(AppTabs);
export default Tabs;
