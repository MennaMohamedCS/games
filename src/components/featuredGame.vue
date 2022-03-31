<template>
<div>
    <div class="container  py-5 mt-5 d-flex justify-content-center">
        <div class="row mt-5 d-flex justify-content-center">
            <img class="col-7 " src="../assets/Bitmap.png">
            <div class="textGame px-5 pt-4 col-3">
            <h5 >Subway Surfers</h5>
            <h6>SYBO Games</h6>
            <p class="">SURF the urban wave!DODGE the oncoming trains!</p>
            <small>300k Downloads</small>
            <router-link class="btn "  :to="`/${0}`">More Info</router-link>
            </div>
        </div>

    </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.textGame{
    background:white;
}
img{
    border-radius: 8%;
}
.btn{
    width: 100%;
    color: white;
    background-color:#572589
}
small{
    color:#686868;
}
</style>