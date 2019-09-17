

/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Screen to dispaly post image
 */
import React, { Component } from 'React';
import styles from './styles';
import { POST_IMAGE } from '../../constants/messages';
import {
  CachedImage
} from 'react-native-cached-images';

class PostImage extends Component {

  static navigationOptions = {
    title: POST_IMAGE
  };

  render() {
    const selectedImage = this.props.navigation.getParam('selectedImage', );
    return (
      <CachedImage source={{ uri: selectedImage }} style={styles.container} />
    );
  }
}

export default PostImage;