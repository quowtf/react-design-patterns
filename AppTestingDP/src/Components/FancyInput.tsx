import React from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles/AppStyles';
import {PropsInput} from './interfaces/Props';

export const FancyInput = (props: PropsInput) => {
  return (
    <React.Fragment>
      <Text style={styles.label}>{props.item}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          props.setItem(props.item, value);
        }}></TextInput>
    </React.Fragment>
  );
};
