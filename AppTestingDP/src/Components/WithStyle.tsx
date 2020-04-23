import React from 'react';
import styles from './styles/AppStyles';
import {WithStyleProps} from './interfaces/WithStyleProps';
import {WithTextProps} from './interfaces/WithTextProps';
interface Props extends WithTextProps, WithStyleProps {}

const WithStyle = (WrappedComponent: any) => (props: Props) => {
  return (
    <WrappedComponent
      {...props}
      setStyle={
        props.style
          ? props.style
          : props.text === 'Sign in'
          ? [styles.fancyButton, styles.loginButton]
          : styles.fancyButton
      }
    />
  );
};

export default WithStyle;
