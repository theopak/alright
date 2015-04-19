import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import PayloadSources from '../constants/PayloadSources';
import EventEmitter from 'eventemitter3';
import assign from 'react/lib/Object.assign';


// var AppDispatcher = require('../dispatcher/AppDispatcher');
// var appConstants = require('../constants/appConstants');
// var objectAssign = require('react/lib/Object.assign');
// var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var postList = {};
var postListLoading = false;

var addPost = function(item){
  postList.list.push(item);
};

var removePost = function(index){
  postList.list.splice(index, 1);
};

var PostStore = assign({}, EventEmitter.prototype, {

  isLoading() {
    return postListLoading;
  },

  /**
   * Gets page data by the given URL path.
   *
   * @param {String} path URL path.
   * @returns {*} Page data.
   */
  getPost(date) {
    return date in postList ? postList[date] : {
      content: 'post not found',
      location: 0,
      author: 0,
      pubDate: date
    };
  },

  getPostList() {
    return postList;
  },

  /**
   * Emits change event to all registered event listeners.
   *
   * @returns {Boolean} Indication if we've emitted an event.
   */
  emitChange() {
    return this.emit(CHANGE_EVENT);
  },

  /**
   * Register a new change event listener.
   *
   * @param {function} callback Callback function.
   */
  onChange(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * Remove change event listener.
   *
   * @param {function} callback Callback function.
   */
  off(callback) {
    this.off(CHANGE_EVENT, callback);
  }

});

PostStore.dispatcherToken = Dispatcher.register((payload) => {
  var action = payload.action;

  switch(action.actionType){
    case ActionTypes.ADD_POST:
      addPost(action.data);
      PostStore.emitChange();
      break;
    case ActionTypes.REMOVE_POST:
      removePost(action.data);
      PostStore.emitChange();
      break;
    default:
      return true;
  }

});

export default PostStore;
