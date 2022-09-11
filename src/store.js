// import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        loggedIn: false,
        status: []
    },
    //mutationsオプションで定義
    mutations: {
        // 'increment'mutationを定義
        login: function(state, payload) {
            state.loggedIn = payload.state;
        },
        logout: function(state) {
            state.loggedIn = false;
        },
        refleshStatus(state, status_list) {
          state.status = status_list
        }
    },
    actions: {
        fetchStatesMaster(context){
            axios.get('/ticket/api/status')
                .then( response => {
                    return response.data
                })
                .then( json => {
                    console.log(json)
                    context.commit('refleshStatus', json)
                })
                .catch((err) => {
                    this.msg = err // エラー処理
                });
        }
    }
})

export default store