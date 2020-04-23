import React, {useState} from 'react';
import {View} from 'react-native';
import {FancyButton} from '../Components/FancyButton';
import {FancyInput} from '../Components/FancyInput';
import styles from '../Components/styles/AppStyles';
import {PropsButton} from 'src/Components/interfaces/Props';

const HomeScreen = (props: PropsButton) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <FancyInput item={'user'} value={user} setItem={setUser} />

      <FancyInput item={'password'} value={password} setItem={setPassword} />

      <FancyInput item={'email'} value={email} setItem={setEmail} />

      <FancyButton
        text={'Sign up'}
        route={'SignUp'}
        navigation={props.navigation}
      />

      <FancyButton
        text={'Sign in'}
        route={'Home'}
        navigation={props.navigation}
      />
    </View>
  );
};

export default HomeScreen;
