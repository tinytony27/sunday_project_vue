// import Vue from 'vue'
import Vuex from 'vuex'

//Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loggedIn: false,
    },
    //mutationsオプションで定義
    mutations: {
        // 'increment'mutationを定義
        login: function(state, payload) {
            state.loggedIn = payload.state;
        },
        logout: function(state) {
            state.loggedIn = false;
        }
    }
})

export default store