<template src="./CreateView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'CreateView',
    data() {
        return {
          title: '',
          category: '',
          description: '',
          status: '3',
          deadlinedate: '',
          updateURL: '/ticket/',

          category_list: [],
          //status_list: []
        }
    },
    created () {
      //カテゴリーを取ってくる。
      // TODO: categoryもvuex経由で取得する。 
      // axios.get('/ticket/api/category/')
      // .then(response => {
      //   return response.data
      // })
      // .then(json => {
      //   this.category_list = json
      // })
      // .catch((err) => {
      //   this.msg = err // エラー処理
      // });

      //ステータスも取ってくる。
      // axios.get('/ticket/api/status/')
      // .then(response => {
      //   return response.data
      // })
      // .then(json => {
      //   this.status_list = json
      // })
      // .catch((err) => {
      //   this.msg = err // エラー処理
      // });

      //axios.defaults.xsrfCookieName = 'csrftoken'
      //axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    },
    methods: {
        submit: function() {
            axios.defaults.xsrfCookieName = 'csrftoken'
            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

            axios.post('/ticket/api/ticket/', {
                title: this.title,
                category: this.category,
                description: this.description,
                status: this.status,
                deadlinedate: this.deadlinedate
            })
            .then( response => {
                console.log(response);
                this.$router.push('/list')
            })
            .catch((err) => {
                this.msg = err // エラー処理
                console.log(err);
            });

            //this.$router.push('/list')
        }
    },
    computed: {
      status_list(){
        return this.$store.state.status
        // statusのデータはvuexでストアしたものを利用。
      },
      categories_list(){
        return this.$store.state.categories
      },
      maxLengthValidation: function() {
        if(this.description.length < 30){
          return this.description.length + ' 文字目です。'
        }
        else{
          return (this.description.length - 30) + ' 文字 長すぎます。'
        }
      },
      messageFontSwitch: function(){
        if(this.description.length < 30){
          return {
            color: 'black',
            'font-weight': 'normal'
          }
        }else{
          return {
            color: 'red',
            'font-weight': 'bold'
          }
        }
      }
    }
}
</script>