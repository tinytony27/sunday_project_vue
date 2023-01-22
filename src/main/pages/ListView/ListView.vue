<template src="./ListView.html">
</template>
<!-- <template>
    {{test}}
</template-->

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import axios from 'axios';
import { useStore } from 'vuex';

const tickets = ref([]) //TODO: 型定義をStoreに書く
const msg = ref('API sample')
const store = useStore()

const initialize = ()=>{
  axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    store.dispatch('fetchStatusMaster');
    store.dispatch('fetchCategoryMaster');

    axios.get('/ticket/api/ticket')
    .then( response => {
      return response.data
    })
    .then( json => {
      tickets.value = json
      // API側できれいなデータにしておきたい
      tickets.value.forEach(elem => {
        for(let i = 0; i < store.state.status.length; i++){
          let status = store.state.status[i];
          if(status.id == elem.status){
            elem.status = status.status;
            break;
          }
        }
        for(let i = 0; i < store.state.categories.length; i++){
          let category = store.state.categories[i];
          if(category.id == elem.category){
            elem.category = category.category;
            break;
          }
        }
        let tmpDate1 = elem.deadlinedate;
        // console.log(tmpDate1);
        if(tmpDate1 != null){
          let tmpDate2 = tmpDate1.substring(0, 10).replace(/-/g,'/');
          elem.deadlinedate = tmpDate2;
          // console.log(tmpDate2);
        }
      });
    })
    .catch((err) => {
      msg.value = err // エラー処理
    });
  }

initialize()
</script>
