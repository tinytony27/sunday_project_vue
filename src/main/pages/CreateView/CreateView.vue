<template src="./CreateView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'CreateView',
    data() {
        return {
          //ticket: '',
          title: '',
          category: '3',
          description: '',
          status: '3',
          endDate: '',
          updateURL: '/ticket/'
        }
    },
    created () {
       //カテゴリーを取ってくる。
       //ステータスも取ってくる。
      axios.defaults.xsrfCookieName = 'csrftoken' // ←ココと
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN" // ←ココに追加しました
    },
    methods: {
        submit: function() {
            console.log('save')
            axios.post('/ticket/api/ticket/', {
                title: this.title,
                category: this.category,
                description: this.description,
                status: this.status,
                endDate: this.endDate
            })
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