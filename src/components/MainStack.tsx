import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from "react";

import { HomeScreen } from "./HomeScreen";
import { TradeScreen } from "./TradeScreen";
import { NewsScreen } from "./NewsScreen";
import { StockDetailScreen } from "./StockDetailScreen";
import { SettingsScreen } from "./SettingsScreen";

const Stack = createStackNavigator();

export const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Trade" component={TradeScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="StockDetail" component={StockDetailScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);