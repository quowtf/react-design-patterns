import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/AppStyles';

import {WithTextProps} from './interfaces/WithTextProps';
import WithNavigation from './WithNavigation';
import WithStyle from './WithStyle';
import {WithStyleProps} from './interfaces/WithStyleProps';

const button: React.FC<WithTextProps & WithStyleProps> = (props) => {
  return (
    <View style={props.setStyle}>
      <Text style={styles.label}>{props.text}</Text>
    </View>
  );
};

export const FancyButton: any = WithNavigation(WithStyle(button));
