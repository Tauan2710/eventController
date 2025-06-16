import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import UserProfile from "../screens/UserProfile";

import UserEventsList from "../screens/UserEventList";
import { EventList } from "../screens/EventListEcreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Eventos">
      <Tab.Screen
        name="Eventos"
        component={EventList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="UserEventList"
        component={UserEventsList}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Perfil" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
