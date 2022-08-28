<template src="./HeaderView.html"></template>
  
<script>
export default {
    name: 'HeaderView',
    props: {
      msg: String
    },
    data() {
      return {
        listURL: '/list',
        createURL: '/ticket/create',
        kanbanURL: '/kanban',
        logoutURL: '/logout'
      }
    }
}
</script>
 
<style scoped>
</style>
  