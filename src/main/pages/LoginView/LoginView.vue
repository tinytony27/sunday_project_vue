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
    methods: {
        login: function() {
            console.log('login')
            const data = {
                username: this.username,
                password: this.password
            }
            console.log(this.$store.state.loggedIn);
            axios.post('/ticket/api/login/', data)
            .then(
                response => { console.log(response);
                this.$store.commit('login',{state: true})
                console.log('redirect path: '+this.$route.query.redirect);
                console.log('login state: '+this.$store.state.loggedIn);
                if(this.$route.query.redirect == undefined){
                    this.$router.push('/list')
                }
                else{
                    this.$router.push(this.$route.query.redirect);
                }
                //
            })
            .catch((err) => {
                this.msg = err
                console.log(err);
            });
        }
    }
}
</script>