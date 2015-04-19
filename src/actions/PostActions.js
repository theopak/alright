/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

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
    Dispatcher.handleViewAction({
      actionType: ActionTypes.LOAD_POSTLIST
    });

    http.get('http://127.0.0.1:8000/posts/')
      .accept('application/json')
      .end((err, res) => {
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
