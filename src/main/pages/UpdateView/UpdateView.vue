<template src="./UpdateView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'UpdateView',
    data() {
        return {
            ticket: '',
            msg: '',
            title: '',
            category: '',
            description: '',
            status: '3',
            deadlinedate: '',
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

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    },
    methods: {
        save: function() {
            console.log('save')
            axios.patch('/ticket/api/ticket/'+this.$route.params.id+'/', {description : "APIテストチケットUpdate"})
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