import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoggedInStack from './logged-in.navigation';
import Color from '../styles';

const Stack = createStackNavigator();

class Navigator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoggedIn"
            component={LoggedInStack}
            options={{
              headerStyle: {
                backgroundColor: Color.GROUND_COLOR,
                shadowOpacity: 0,
                elevation: 0,
              },
              headerTitleStyle: {
                fontWeight: 'normal',
                color: Color.GREY3_COLOR,
              },
              headerTitle: null,
              headerShown: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
