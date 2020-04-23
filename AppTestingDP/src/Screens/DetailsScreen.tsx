import React from 'react';
import {View, Text} from 'react-native';
import {FancyButton} from '../Components/FancyButton';
import styles from '../Components/styles/AppStyles';
import {WithNavigationProps} from '../Components/interfaces/WithNavigationProps';

const HomeScreen: React.FC = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Detalles ultima screen, regresa!</Text>

      <FancyButton text={'Go Back!'} navigation={props.navigation} />
    </View>
  );
};

export default HomeScreen;
