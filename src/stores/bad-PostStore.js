import Fluxible from 'fluxible/addons';
import ActionTypes from '../constants/ActionTypes';
import _ from 'lodash';


// const PostStore = createStore({
//     storeName: 'PostStore',
//     handlers: {
//         'Actions.LOAD_POSTLIST_SUCCESS': 'onLoadSuccess'
//     },
//     initialize: () => { // Set the initial state
//         this.foo = null;
//     },
//     onLoadSuccess({ post }) {
//       this.postList[post.id] = _.merge({}, this.postList[post.id], post);
//       this.emitChange();
//     },
//     getState: () => {
//         return {
//             foo: this.foo
//         }
//     }
// });

/*
class PostStore extends Fluxible.BaseStore {

  static storeName = 'PostStore'

  static handlers = {
    [Actions.LOAD_POSTLIST_SUCCESS]: "onLoadSuccess"
  }

  constructor(dispatcher) {
    super(dispatcher);

    this.postList = {};
  }

  onLoadSuccess({ post }) {
    this.postList[post.id] = _.merge({}, this.postList[post.id], post);
    this.emitChange();
  }

  getPost(id) {
    return _.find(this.postList, post =>
      post.id === parseInt(id)
    );
  }

  getPostList() {
    return this.postList;
  }

  dehydrate() {
    return {
      postList: this.postList
    };
  }

  rehydrate({ postList }) {
    this.postList = postList;
  }

}

export default PostStore;
*/

var PostStore = assign({}, EventEmitter.prototype, {

  isLoading() {
    return loading;
  },

  /**
   * Gets page data by the given URL path.
   *
   * @param {String} path URL path.
   * @returns {*} Page data.
   */
  getPage(path) {
    return path in pages ? pages[path] : {
      title: 'Page Not Found',
      type: 'notfound'
    };
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


export default PostStore;
