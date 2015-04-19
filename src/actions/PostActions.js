import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
// import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
import http from 'superagent';

export default {

  addPost(item) {
    Dispatcher.handleAction({
      actionType: ActionTypes.ADD_POST,
      data: item
    });
  },

  removePost(index) {
    Dispatcher.handleAction({
      actionType: ActionTypes.REMOVE_POST,
      data: index
    });
  },

  loadPostList(cb) {
    Dispatcher.dispatch({
      actionType: ActionTypes.LOAD_POSTLIST
    });

    http.get('http://127.0.0.1:8000/posts/')
      .accept('application/json')
      .auth('theopak', 'password')
      .end((err, res) => {
        console.log(res);
        Dispatcher.handleServerAction({
          actionType: ActionTypes.LOAD_POSTS,
          err,
          postList: res.body
        });
        if (cb) {
          cb();
        }
      });
  }

};
