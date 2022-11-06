<template src="./ListView.html">
</template>
<!-- <template>
    {{test}}
</template-->

<script>
import axios from 'axios';

export default {
  name: 'ListView',
  data() {
    return {
      tickets: [],
      msg: 'API sample',
    };
  },
  mounted: function(){
    
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    this.$store.dispatch('fetchStatusMaster');
    this.$store.dispatch('fetchCategoryMaster');

    axios.get('/ticket/api/ticket')
    .then( response => {
      return response.data
    })
    .then( json => {
      this.tickets = json
      this.tickets.forEach(elem => {
        for(let i = 0; i < this.$store.state.status.length; i++){
          let status = this.$store.state.status[i];
          if(status.id == elem.status){
            elem.status = status.status;
            break;
          }
        }
        for(let i = 0; i < this.$store.state.categories.length; i++){
          let category = this.$store.state.categories[i];
          if(category.id == elem.category){
            elem.category = category.category;
            break;
          }
        }
      });
    })
    .catch((err) => {
      this.msg = err // エラー処理
    });
  }
}
</script>
