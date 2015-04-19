import './PostListPage.less';
import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import PostList from './PostList';
import PostStore from '../stores/PostStore';
import PostActions from '../actions/PostActions';


class PostListPage {

  getInitialState() {
    return {
      postList: PostStore.getPostList()
    };
  }

  // componentDidMount() {
  //   PostStore.addChangeListener(this._onChange);
  // }

  // componentWillUnmoun() {
  //   PostStore.removeChangeListener(this._onChange);
  // }

  // handleAddItem: function(newItem){
  //   todoActions.addItem(newItem);
  // },
  // handleRemoveItem: function(index){
  //   todoActions.removeItem(index);
  // },
  // _onChange: function(){
  //   this.setState({
  //     list: todoStore.getList()
  //   })
  // },

  render() {
    var postList = PostStore.getPostList();
    // invariant(postList !== undefined, 'Failed to load postList content.');

    // if (page.type === 'notfound') {
    //   this.props.onPageNotFound();
    //   return React.createElement(NotFoundPage, page);
    // }

    return (
      <div className={'PostListPage'}>
        <PostList items="postList" />
      </div>
    );
  }

}

export default PostListPage;
