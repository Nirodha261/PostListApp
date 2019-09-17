

/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Screen to dispaly detail on selected post
 */
import React, { Component } from 'React';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActions from '../../actions/PostActions';
import { POST_DETAIL, SCREENS } from '../../constants/messages';
import CommonStyles from '../../styles/commonStyles';
import { ImageGridView } from '../../components/';

class PostDetail extends Component {

  static navigationOptions = {
    title: POST_DETAIL
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.postActions.getPostImages();
  }

  render() {
    const title = this.props.navigation.getParam('title', '');
    const body = this.props.navigation.getParam('body', '');
    return (
      <View style={styles.container}>
        <Text style={CommonStyles.boldText}> {title} </Text>
        <Text style={[styles.bodyContainer, CommonStyles.justifyText]}> {body} </Text>
        <ImageGridView
          onItemPress={item => {
            this.props.navigation.navigate(SCREENS.postImage,
              { selectedImage: item.item.url })
          }}
          images={this.props.posts.images}
        />
      </View >
    );
  }
}

const mapStateToProps = state => ({
  posts: state.PostReducer
});

const mapDispatchToProps = dispatch => ({
  actions: {
    postActions: bindActionCreators(PostActions, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);