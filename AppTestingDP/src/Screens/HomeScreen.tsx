import React, {useState} from 'react';
import {View} from 'react-native';
import {FancyButton} from '../Components/FancyButton';
import {FancyInput} from '../Components/FancyInput';
import styles from '../Components/styles/AppStyles';
import {PropsButton} from 'src/Components/interfaces/Props';

const HomeScreen: React.FC<PropsButton> = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <FancyInput item={'user'} value={user} setItem={setUser} />

      <FancyInput item={'password'} value={password} setItem={setPassword} />

      <FancyButton
        text={'Log in'}
        route={'Detail'}
        navigation={props.navigation}
      />
    </View>
  );
};

export default HomeScreen;
