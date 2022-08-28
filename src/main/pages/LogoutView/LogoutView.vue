<template src="./LogoutView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'LogoutView',
    data() {
        return {
            msg: '',
            listURL: '/list'
        }
    },
    created () {
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
    },
    methods: {
        logout: function() {
            console.log('logout')            
            axios.post('/ticket/api/logout/',{})
            .then(
                response => { console.log(response);
                this.$router.push('/login')
            })
            .catch((err) => {
                this.msg = err
                console.log(err);
            });

            
        }
    }
}
</script>