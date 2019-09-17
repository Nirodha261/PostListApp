/*
 * Author: Nirodha Perera
 * Date: 16/09/2019
 *
 * Screen to dispaly list of posts
 */
import React, { Component } from 'React';
import {
  View
} from 'react-native';
import styles from './styles';
import { ListView, PostItem, BrandActivityIndicator } from '../../components/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActions from '../../actions/PostActions';
import { POSTS, SCREENS } from '../../constants/messages';


class Posts extends Component {

  static navigationOptions = {
    title: POSTS,
  };

  state = {
    refreshing: false
  }

  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
    this.renderPost = this.renderPost.bind(this);
  }

  componentWillMount() {
    if (this.props.posts.postList.length === 0) {
      this.props.actions.postActions.setLoading(true);
      this.props.actions.postActions.getPostList();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.posts.postList !== this.props.posts.postList) {
      this.setState({ refreshing: false })
    }
  }

  renderPosts = () => {
    const { refreshing } = this.state;
    return (
      <ListView
        listData={this.props.posts.postList}
        renderItem={item => {
          return this.renderPost(item);
        }}
        refreshing={refreshing}
        onRefresh={this.onRefresh}
      />

    )
  }

  onRefresh = () => {
    this.setState({ refreshing: false })
    this.props.actions.postActions.getPostList();
  }


  postItemPress = item => {
    this.props.navigation.navigate(SCREENS.postDetail,
      { title: item.title, body: item.body });
  }

  renderPost = item => {
    return (
      <PostItem
        title={item.title}
        userName={item.user}
        onPress={() => this.postItemPress(item)}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <BrandActivityIndicator loading={this.props.posts.loading} />
        {this.renderPosts()}
      </View>
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
)(Posts);