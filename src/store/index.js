import Vue from 'vue';
import Vuex from 'vuex';

import ParseModule from './parse'
import BookmarksModule from './bookmarks'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    parse: ParseModule,
    bookmarks: BookmarksModule
  }
});
