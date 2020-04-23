import React from 'react';
import {TouchableOpacity} from 'react-native';
import {WithNavigationProps} from './interfaces/WithNavigationProps';

const WithNavigation = (WrappedComponent: any) => (
  props: WithNavigationProps,
) => {
  return (
    <TouchableOpacity
      onPress={
        props.route
          ? () => props.navigation.navigate(props.route)
          : () => props.navigation.goBack()
      }>
      <WrappedComponent {...props} />
    </TouchableOpacity>
  );
};

export default WithNavigation;
