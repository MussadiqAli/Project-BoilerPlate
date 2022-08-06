import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, Modal} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {useAppSelector} from '@redux/reducers';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import AppPreLoader from '@components/appPreLoader';

import HomeModule from '@Home/navigation';
import AuthModule from '@Auth/navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isLoading} = useAppSelector(state => state.homeReducer);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainView} edges={['top']}>
        <NavigationContainer>
          <StatusBar backgroundColor="green" />
          <Stack.Navigator>
            <Stack.Screen
              name="AuthModule"
              component={AuthModule}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Modal visible={isLoading} transparent>
          <AppPreLoader />
        </Modal>
        <Toast ref={Toast.setRef} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
