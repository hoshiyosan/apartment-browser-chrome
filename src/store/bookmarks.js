import axios from 'axios'


const BookmarksModule = {
    namespaced: true,
    state: {
        bookmarks: []
    },
    getters: {
    },
    mutations: {
        setBookmarks(state, bookmarks) {
            state.bookmarks = bookmarks;
        }
    },
    actions: {
        createBookMark({ commit }, bookmark) {
            console.log('create bookmark', bookmark)
            return new Promise((resolve) => {
                axios.post('http://localhost:5000' + '/bookmarks', bookmark)
                    .then(response => {
                        resolve(response.data);
                    });
            })
        },

        updateBookmarks({ commit }) {
            axios.get('http://localhost:5000' + '/bookmarks')
                .then(response => {
                    console.log('bookmark response', response);
                    commit('setBookmarks', response.data);
                });
        }
    },
}

export default BookmarksModule