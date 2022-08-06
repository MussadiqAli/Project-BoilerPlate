import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles'
// import colors from '@commons/colors'

const AppPreLoader = () =>{
    return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color='red' />
        </View>
    )
}

export default AppPreLoader