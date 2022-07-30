<template src="./DetailView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'DetailView',
    data() {
        return {
            ticket: '',
            msg: ''
        }
    },
    created () {
        // console.log(this.$route.params.id)
        axios.get('/ticket/api/ticket/' + this.$route.params.id)
        .then( response => {
            //console.log(response);
            return response.data
        })
        .then( json => {
            this.ticket = json
        })
        .catch((err) => {
            this.msg = err // エラー処理
        });
    }
}
</script>