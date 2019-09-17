
/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Post item with details
 */
import React from 'React';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import CommonStyles from '../../styles/commonStyles';
import PropTypes from 'prop-types';

const PostItem = ({ userName, title, onPress }) => {
  return (
    <View style={[styles.container, CommonStyles.centerContent]}>
      <TouchableOpacity
        style={[styles.box, styles.shadow]}
        onPress={onPress}>
        <Text style={CommonStyles.boldText}>{userName}</Text>
        <Text style={CommonStyles.standardText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

PostItem.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default PostItem;