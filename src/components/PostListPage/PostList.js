import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class PostList {

  render() {
    var postListItems = this.props.items.map(function(item, index){
      return (
        <li key={index} className="PostsList--item">
          <span
            className="glyphicon glyphicon-remove">
          </span>
          <span>
            {item}
          </span>
        </li>
      );
    }.bind(this));
    return (
      <ul>
        {postListItems}
      </ul>
    );
  }

}

export default PostList;
