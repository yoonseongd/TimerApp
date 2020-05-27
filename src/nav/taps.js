import Timer from "./timer";
import Setting from "./setting";
import Information from "./information";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const AppTabs = createBottomTabNavigator({
  Timer: { screen: Timer },
  Setting: { screen: Setting },
  Instruction: { screen: Information },
});

const Tabs = createAppContainer(AppTabs);
export default Tabs;
