import axios from 'axios'


const BookmarksModule = {
    namespaced: true,
    state: {
        bookmarks: []
    },
    getters: {
    },
    mutations: {

    },
    actions: {
        createBookMark({ commit }, bookmark) {
            console.log('create bookmark', bookmark)
            axios.post('http://localhost:5000' + '/bookmarks', bookmark)
                .then(response => {
                    console.log('bookmark created!')
                });
        }
    },
}

export default BookmarksModule