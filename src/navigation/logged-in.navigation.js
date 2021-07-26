import React from 'react';
import Pages from '../pages';
import Color from '../styles';

import {faHome, faSearch} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const LoggedInTab = createBottomTabNavigator();

function LoggedIn() {
  return (
    <LoggedInTab.Navigator
      initialRouteName="LoggedIn"
      backBehavior="initialRoute"
      tabbarOptions={{
        activeTintColor: Color.THEME_COLOR,
        inactiveTintColor: Color.GREY2_COLOR,
        labelStyle: {
          marginTop: -10,
          marginBottom: 5,
        },
        tabStyle: {
          backgroundColor: Color.WHITE_COLOR,
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <LoggedInTab.Screen
        name="Github"
        component={Pages.GithubPages}
        options={{
          headerTitle: 'Search',
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faSearch} size={20} color={color} />;
          },
        }}
      />
      <LoggedInTab.Screen
        name="Home"
        component={Pages.HomePages}
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faHome} size={20} color={color} />;
          },
        }}
      />
    </LoggedInTab.Navigator>
  );
}

export default LoggedIn;
