<template>
    <div>
        <featuredGameComp/>
        <recommendComp/>
        <popularComp/>

    </div>
</template>

<script>

import featuredGameComp from './featuredGame.vue'
import recommendComp from './recommendation.vue'
import popularComp from './popular.vue'
    export default {
          name: 'HomeComp',
          components: {
            featuredGameComp,
            recommendComp,
            popularComp
  }
        
    }
</script>

<style scoped>

</style>