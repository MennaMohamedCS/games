<template>
<div id="body">
  <navComp />
  <router-view/>
</div>
</template>

<script>
import navComp from './components/navgation.vue'


export default {
  name: 'App',
  components: {
    navComp,
  }
}
</script>

<style>
#body{
  background-color: #F2F2F2;
}
</style>
