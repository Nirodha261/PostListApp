
/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Standard list view with given render component
 */
import React from 'React';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ListView = ({ renderItem, listData = [], onRefresh, refreshing }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={item => `${item.id}`}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
}

ListView.propTypes = {
  renderItem: PropTypes.func.isRequired,
  listData: PropTypes.array.isRequired,
  refreshing: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired
};


export default ListView;