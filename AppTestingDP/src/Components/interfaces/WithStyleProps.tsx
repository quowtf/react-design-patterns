import {StyleProp, ViewStyle} from 'react-native';

export interface WithStyleProps {
  setStyle?: StyleProp<ViewStyle>;
  style?: string;
}
