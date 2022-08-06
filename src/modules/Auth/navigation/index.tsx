import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

export const AuthModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default AuthModule;