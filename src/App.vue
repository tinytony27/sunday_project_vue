<template>
  <HeaderView/>
  <router-view/>
</template>

<script>
import HeaderView from './main/pages/Header/HeaderView.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
  }
}
</script>

<style>
</style>
