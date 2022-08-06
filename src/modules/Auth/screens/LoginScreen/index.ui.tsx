import React from 'react';
import {View, Text} from 'react-native';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';

//component containing the view of Login screen
const LoginUI = ({
  navigation,
}: ScreenTypes.login) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.txt}>Auth Screen</Text>
    </View>
  );
};
export default LoginUI;
