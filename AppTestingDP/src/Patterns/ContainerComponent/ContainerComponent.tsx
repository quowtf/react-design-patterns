import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from '../Styling/AppStyling';

const {width} = Dimensions.get('screen');
interface PropsButton {
  item?: string;
  value?: any;
  text: string;
  setItem?: (item: string, value: any) => void;
}
const FancyButton = (props: PropsButton) => {
  return (
    <TouchableOpacity
      style={styles.fancyButton}
      onPress={() => {
        if (props.setItem) props.setItem!(props.item!, props.value!);
      }}>
      <Text style={styles.label}>{props.text}</Text>
    </TouchableOpacity>
  );
};

interface PropsInput {
  item: string;
  value: string;
  setItem: (item: string, value: string) => void;
}
const FancyInput = (props: PropsInput) => {
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

const container = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isCurrentUser] = useState('');
  return (
    <View style={styles.container}>
      <FancyInput item={'user'} value={user} setItem={setUser}></FancyInput>
      <FancyInput
        item={'password'}
        value={password}
        setItem={setPassword}></FancyInput>
      {isCurrentUser ? (
        <FancyButton text={'Login'}></FancyButton>
      ) : (
        <React.Fragment>
          <FancyInput
            item={'email'}
            value={email}
            setItem={setEmail}></FancyInput>
          <FancyButton text={'Sing up'}></FancyButton>
          <FancyButton
            text={'Sign in'}
            value={isCurrentUser ? false : true}
            item={'isCurrentUser'}
          />
        </React.Fragment>
      )}
    </View>
  );
};

export default container;
