import React from 'react';
import {View, Text} from 'react-native';
import {FancyButton} from '../Components/FancyButton';
import styles from '../Components/styles/AppStyles';
import {PropsButton} from 'src/Components/interfaces/Props';

const HomeScreen: React.FC<PropsButton> = (props) => {
  console.log('Detail screen props');
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Detalles ultima screen, regresa!</Text>

      <FancyButton text={'go back!'} navigation={props.navigation} />
    </View>
  );
};

export default HomeScreen;
