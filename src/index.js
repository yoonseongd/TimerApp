import Timer from "./nav/timer";
import Setting from "./nav/setting";
import Information from "./nav/information";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const AppTabs = createBottomTabNavigator({
  Timer: { screen: Timer },
  Setting: { screen: Setting },
  Instruction: { screen: Information },
});

const Tabs = createAppContainer(AppTabs);
export default Tabs;
