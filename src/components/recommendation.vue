<template>
    <div>
        <div class="container px-5 pb-5 col-9 ">
        <div class="row recommendation d-flex justify-content-center p-2">
            <span class="position-relative ">
             <p >Most Recommendation</p>
             <p class="position-absolute top-0 end-0 more">SEE ALL
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </p>
            </span>
            <div  v-for="(item) in items" :key="item.id" class="col-2">
                <img class="col-12" v-bind:src=item.photo alt="...">

                <rateComp/>

                <p>{{item.title}}</p>
                <router-link class="btn " :to="`/${item.id}`">More Info</router-link>
            </div>

        </div>

    </div>
    </div>
</template>

<script>
import axios from "axios";
import rateComp from "./rate.vue"
    export default {
        name:'recommendComp',
        components: {
            rateComp 
            },
        

                
        data() {
            return {
                items: [],
            };
        },

        created() {
            this.getItems();
        },
         methods: {
             getItems() {
                 axios.get("games").then((res) => {
                    console.log(res.data);
                    this.items = res.data;
                 })
                .catch((err) => {
                    console.log(err);
                });
             },
         } 
        
    }
</script>

<style scoped>
.recommendation{
    position: relative;
    font-size: 18px;
    background-color: white;
}
img{
    width: 134px;
    height: 134px;
    border-radius: 5%;
}
.btn{
    width: 100%;
    color: white;
    background-color:#572589
}
.more{
    display: inline;
    color:#572589
}
</style>