<template src="./LoginView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: '',
            msg: ''
        }
    },
    created () {
        //axios.defaults.xsrfCookieName = 'csrftoken'
        //axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    },
    methods: {
        login: function() {
            console.log('login')
            const data = {
                username: this.username,
                password: this.password
            }
            
            axios.post('/ticket/api/login/', data)
            .then(
                response => { console.log(response);
                this.$router.push('/list')
            })
            .catch((err) => {
                this.msg = err
                console.log(err);
            });
            
            
        }
    }
}
</script>