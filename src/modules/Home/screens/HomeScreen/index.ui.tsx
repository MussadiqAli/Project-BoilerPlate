import React from 'react';
import {View, Text} from 'react-native';
import {ScreenTypes} from '../../interfaces';
import styles from './styles';

//component containing the view of Login screen
const HomeUI = ({
  navigation,
}: ScreenTypes.home) => {
  return (
    <View style={styles.mainView}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeUI;
