import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { Dashboard, Place, SapreView } from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './navigation/tabs';

const Stack = createStackNavigator();


/**
 * @desc Main app func.
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  console.disableYellowBox = true; // device상에 warnning message 비활성화 처리.
  return(
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName={'Dashboard'}
        >
          <Stack.Screen name='Dashboard' component={Tabs} />
          <Stack.Screen name='Place' component={Place} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
