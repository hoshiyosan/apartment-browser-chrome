import axios from 'axios'


const ParseModule = {
    namespaced: true,
    state: {
        bookmark: null,
        apartment: null,
    },
    getters: {

    },
    mutations: {
        setApartment(state, apartment) {
            state.apartment = apartment;
            console.log('set apartment', apartment)
        },
        setBookmark(state, bookmark) {
            state.bookmark = bookmark
            console.log('set bookmark', state.bookmark);
        }
    },
    actions: {
        parseAnounce({ commit }, { url, title, body }) {
            console.log('send parse request to backend');
            axios.post('http://localhost:5000' + '/parse', { url, body })
                .then((response) => {
                    commit('setApartment', response.data);
                    commit('setBookmark', { title, url, place: { name: 'boulevard léon bourgeois', location: null } });
                })
        }
    },
}

export default ParseModule