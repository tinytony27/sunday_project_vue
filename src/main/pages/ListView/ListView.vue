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
  created () {
    axios.get('/ticket/api/ticket')
    .then( response => {
      return response.data
    })
    .then( json => {
      this.tickets = json
    })
    .catch((err) => {
      this.msg = err // エラー処理
    });
  },
  mounted: function(){
    this.$store.dispatch('fetchStatesMaster')
  }
}
</script>
