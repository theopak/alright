import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

class PostList {

  render() {
    console.log('HELLO');
    console.log(this.props.items);
    var postListItems = this.props.items.map((item, index) => {
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
    });

    console.log(postListItems);

    return (
      <ul>
        {postListItems}
      </ul>
    );
  }

}

export default PostList;
