import React, {useState} from 'react';
import {View} from 'react-native';
import {FancyButton} from '../Components/FancyButton';
import {FancyInput} from '../Components/FancyInput';
import styles from '../Components/styles/AppStyles';
import {WithStyleProps} from 'src/Components/interfaces/WithStyleProps';
import {WithNavigationProps} from 'src/Components/interfaces/WithNavigationProps';
import {WithTextProps} from 'src/Components/interfaces/WithTextProps';

const HomeScreen: React.FC<
  WithStyleProps & WithNavigationProps & WithTextProps
> = (props) => {
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
