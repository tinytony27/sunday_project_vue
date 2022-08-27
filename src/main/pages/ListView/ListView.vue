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
    //axios.get('http://www.geonames.org/postalCodeLookupJSON?postalcode=1000001&country=JP')
    //axios.get('/postalCodeLookupJSON?postalcode=1000001&country=JP')
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
  }
}
</script>
