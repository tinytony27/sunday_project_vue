import Vuex from 'vuex'
import axios from 'axios'

const store = new Vuex.Store({
    strict: true,
    state: {
        loggedIn: false,
        status: [],
        categories: []
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
        },
        refleshCategory(state, category_list){
          state.categories = category_list
        }
    },
    actions: {
        fetchStatusMaster(context){
            axios.get('/ticket/api/status')
                .then( response => {
                    return response.data
                })
                .then( json => {
                    context.commit('refleshStatus', json)
                })
                .catch((err) => {
                    this.msg = err // エラー処理
                });
        },
        fetchCategoryMaster(context){
            axios.get('/ticket/api/category/')
                .then(response => {
                    return response.data
                })
                .then(json => {
                    context.commit('refleshCategory', json)
                    console.log('fetch Category Master')
                    console.log(json)
                })
                .catch((err) => {
                    this.msg = err // エラー処理
                });
        }
    }
})

export default store