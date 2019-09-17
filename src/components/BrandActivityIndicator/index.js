
/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Standard activity indicator to be used for screens
 */

import React from 'React';
import {
  View,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BrandActivityIndicator = ({ loading }) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return null
  }
}

BrandActivityIndicator.propTypes = {
  loading: PropTypes.bool.isRequired
};


export default BrandActivityIndicator;