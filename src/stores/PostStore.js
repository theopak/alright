/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var AppDispatcher = require('../core/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants/ActionTypes');
var assign = require('object-assign');
// var PostActions = require('../actions/PostActions');

var CHANGE_EVENT = 'change';

var _posts = [];

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  _posts.push(text);
}

var PostStore = assign({}, EventEmitter.prototype, {

  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return _posts;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {
    case ActionTypes.POST_CREATE:
      // text = action.text.trim();
      if (text !== '') {
        create(text);
        PostStore.emitChange();
      }
      break;
    case ActionTypes.LOAD_POSTLIST:
      PostStore.emitChange();
      break;
    case ActionTypes.ADD_POST:
      // addPost(action.data);
      PostStore.emitChange();
      break;
    case ActionTypes.REMOVE_POST:
      // removePost(action.data);
      PostStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = PostStore;
