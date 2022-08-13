<template src="./CreateView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'CreateView',
    data() {
        return {
          //ticket: '',
          title: '',
          category: '',
          description: '',
          status: '3',
          deadlinedate: '',
          updateURL: '/ticket/',

          category_list: [],
          status_list: []
        }
    },
    created () {
      //カテゴリーを取ってくる。
      axios.get('/ticket/api/category/')
      .then(response => {
        return response.data
      })
      .then(json => {
        this.category_list = json
      })
      .catch((err) => {
        this.msg = err // エラー処理
      });

      //ステータスも取ってくる。
      axios.get('/ticket/api/status/')
      .then(response => {
        return response.data
      })
      .then(json => {
        this.status_list = json
      })
      .catch((err) => {
        this.msg = err // エラー処理
      });

      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    },
    methods: {
        submit: function() {
            console.log('save')
            axios.post('/ticket/api/ticket/', {
                title: this.title,
                category: this.category,
                description: this.description,
                status: this.status,
                deadlinedate: this.deadlinedate
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