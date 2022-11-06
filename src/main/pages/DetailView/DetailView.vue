<template src="./DetailView.html"></template>

<script>
import axios from 'axios';

export default{
    name: 'DetailView',
    data() {
        return {
            ticket: '',
            msg: '',
            updateURL: '/ticket/update'
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
            // API側できれいなデータにしておきたい
            for(let i = 0; i < this.$store.state.status.length; i++){
                let status = this.$store.state.status[i];
                if(status.id == this.ticket.status){
                    this.ticket.status = status.status;
                    break;
                }
            }
            for(let i = 0; i < this.$store.state.categories.length; i++){
                let category = this.$store.state.categories[i];
                if(category.id == this.ticket.category){
                    this.ticket.category = category.category;
                    break;
                }
            }
            let tmpDate1 = this.ticket.deadlinedate;
            if(tmpDate1 != null){
                let tmpDate2 = tmpDate1.substring(0, 10).replace(/-/g,'/');
                this.ticket.deadlinedate = tmpDate2;
            }
        })
        .catch((err) => {
            this.msg = err // エラー処理
        });
    }
}
</script>