<template>
<div>
    <div class="container p-5 mt-5 col-9">
        <div class="row mt-5">
            <div class="card col " >
            <img v-bind:src=this.photo class="card-img-top" alt="...">
            <div class="card-body-auto">
                <p class="card-title">{{this.title}}</p>
                <br>
                <p class="card-text" >{{this.body}}</p>
                <small>Read more</small>
                <br>
            </div>
            </div>
        </div>

    </div>
    <popularComp/>
</div>
</template>

<script>
import axios from "axios";
import popularComp from './popular.vue'
    export default {
        name:'detailsComp',
        components: {
            popularComp 
            },
        props:['id'],
        data() {
            return {
               // id:"",
                title: "",
                body: "",
                photo: "",
            };
        },

  created() {
    this.getItemById();
  },
  methods: {
    getItemById() {
        //console.log("menna  ");
        //this.id=this.$route.params.id;
        axios.get(`games?id=${this.id}`)
        .then((res) => {console.log(res.data);
        console.log(res.data.length);
        if(res.data.length ==0)
        {
            this.title = `Subway Surfers
                         SYBO Games`;
            this.body = `DASH as fast as you can!DODGE the oncoming trains!
            Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.
            ★ Grind trains with your cool crew!
            ★ Colorful and vivid HD graphics!`;
            this.photo = "/img/Bitmap.39709242.png";

        }
        else{
        console.log(res.data[0].photo);

            this.title = res.data[0].title;
            this.body = res.data[0].body;
            this.photo = res.data[0].photo;
        }})
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>

<style scoped>
img{
    height: 210px;
}
small{
    color: #572589;
}

</style>