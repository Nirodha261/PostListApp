
/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Image grid view
 */
import React from 'React';
import {
  View,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import GridView from 'react-native-super-grid';
import {
  CachedImage
} from 'react-native-cached-images';
import PropTypes from 'prop-types';

const ImageGridView = ({ images = [], onItemPress }) => {
  return (
    <View style={styles.container}>
      <GridView
        itemDimension={130}
        items={images}
        style={styles.gridView}
        renderItem={item => (
          <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
            <View style={styles.imageContainer}>
              <CachedImage style={styles.imageStyle} source={{ uri: item.item.thumbnailUrl }} />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}


ImageGridView.propTypes = {
  onItemPress: PropTypes.func.isRequired,
  images: PropTypes.array
};

export default ImageGridView;