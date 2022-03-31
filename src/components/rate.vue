<template>
    <div class="card-rate">
        <img  class="star" src="../assets/purple-star-hi.png">
        <p class="rate">4.9</p>
    </div>
</template>

<script>
    export default {
        name: "rateComp"
        
    }
</script>

<style scoped>

.star{
    width: 12px;
    height: 12px;
    
}
.rate{
    padding-top: 35%;
    display: inline;

}
.card-rate{
    position: absolute;
    top:20%;

    border-radius: 30%;
    background-color: white;
    width: 5%;
    padding-left: 1%;
    margin-left: 1%;

}
</style>