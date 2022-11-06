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
            created_date: '',
            category: '',
            description: '',
            status: '',
            deadlinedate: '',
            lastupdatedate: '',
            updateURL: '/ticket/update',
            category_list: [],
            status_list: []
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
            this.title = json.title
            this.created_date = json.created_date
            this.category = json.category
            this.description = json.description
            this.status = json.status
            this.deadlinedate = json.deadlinedate
            this.lastupdatedate = json.lastupdatedate
            let tmpDate1 = this.deadlinedate;
            if(tmpDate1 != null){
                let tmpDate2 = tmpDate1.substring(0, 10);
                this.deadlinedate = tmpDate2;
            }
        })
        .catch((err) => {
            this.msg = err // エラー処理
        });

        //カテゴリー
        axios.get('/ticket/api/category/')
        .then(response => { return response.data })
        .then(json => { this.category_list = json })
        .catch((err) => { this.msg = err });

        //ステータスも取ってくる。
        axios.get('/ticket/api/status/')
        .then(response => { return response.data })
        .then(json => { this.status_list = json })
        .catch((err) => { this.msg = err });

        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    },
    methods: {
        save: function() {
            console.log('save')
            let data = {};
            if(this.ticket.title != this.title){
                data.title = this.title
            }
            if(this.ticket.category != this.category){
                data.category = this.category
            }
            if(this.ticket.description != this.description){
                data.description = this.description
            }
            if(this.ticket.status != this.status){
                data.status = this.status
            }
            if(this.ticket.deadlinedate != this.deadlinedate){
                data.deadlinedate = this.deadlinedate
            }
            console.log(data);

            if(data != {}){
                axios.patch('/ticket/api/ticket/'+this.$route.params.id+'/', data)
                .then( response => { console.log(response); })
                .catch((err) => {
                    this.msg = err
                    console.log(err);
                });
            }

            this.$router.push('/ticket/'+this.$route.params.id)
        }
    }
}
</script>