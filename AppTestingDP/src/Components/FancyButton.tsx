import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles/AppStyles';
import {PropsButton} from './interfaces/Props';

export const FancyButton = (props: PropsButton) => {
  return (
    <TouchableOpacity
      onPress={
        props.route
          ? () => {
              console.log('go route');
              console.log(props);
              props.navigation.navigate(props.route);
              // props.navigation.goBack();
            }
          : () => {
              console.log('GO BACK');
              console.log(props.route);
              props.navigation.goBack();
            }
      }
      style={
        props.text === 'Log in'
          ? [styles.fancyButton, styles.loginButton]
          : styles.fancyButton
      }>
      <Text style={styles.label}>{props.text}</Text>
    </TouchableOpacity>
  );
};
