<template src="./UpdateView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'UpdateView',
    data() {
        return {
            ticket: '',
            msg: '',
            updateURL: '/ticket/update'
        }
    },
    created () {
        // console.log(this.$route.params.id)
        axios.get('/ticket/api/ticket/' + this.$route.params.id, )
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
    },
    methods: {
        save: function() {
            console.log('save')
            axios.patch('/ticket/api/ticket/' + this.$route.params.id, {description : "APIテストチケットUpdate"})
            .then( response => {
                console.log(response);
            })
            .catch((err) => {
                this.msg = err // エラー処理
                console.log(err);
            });
        }
    }
}
</script>