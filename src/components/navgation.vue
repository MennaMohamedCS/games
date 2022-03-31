<template>
        <nav class="navbar fixed-top navbar-light bg-light row ">
        <div class="container col-8  ">
 
            <router-link :to="`/home`"> <img class="logo" src="../assets/logo.png"> </router-link>
            <input class="textSearch col-7" type="text">
            <img class="logo-search" src="../assets/loupe.png" @click="search()">
            <img class="logo-more" src="../assets/more.png" @click="login()">

        </div>

        <formComp class="formlogin"/>

        <div class="container-fluid">
            <div v-for="(item ,index) in sliderCategory" :key="item.id" @mouseleave="correct2(index)"  @mouseover="correct(index)">

                <div v-if="index==8">
                    <button class="sliderCategory" @mouseover="slider()"> {{item}} </button>
                </div>
                <div v-else>
                    <button class="sliderCategory">{{item}} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="correct" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>
        </nav>

</template>

<script>
import formComp from './form.vue';
    export default {
        name:'navComp',
        components: {
            formComp 
            },
        data() {
            return {
                sliderCategory:['Action','Arcade','Sports',
                'Action','Advanture','Arcade',
                'Action','Advanture','Sports',],
                temp:'',

                
            };
        },

        created() {
            //this.slideshow();
        },
         methods: {
             search()
             {
                 console.log("run");
                 if(document.getElementsByClassName("textSearch").item(0).style.visibility=='visible')
                 {
                     document.getElementsByClassName("textSearch").item(0).style.visibility='hidden';
                 }
                else
                 {
                     document.getElementsByClassName("textSearch").item(0).style.visibility='visible';
                 }
             },
             login()
             {
                if(document.getElementsByClassName("formlogin").item(0).style.display=='none')
                 {
                     document.getElementsByClassName("formlogin").item(0).style.display='block'
                 }
                else
                 {
                     document.getElementsByClassName("formlogin").item(0).style.display='none';
                 }
                 
                 
             },
             slider()
             {
                 console.log("hi");
                 for(var i=0 ;i<8;i++)
                 {
                    this.temp=this.sliderCategory[i];
                    this.sliderCategory[i]=this.sliderCategory[i+1];
                    this.sliderCategory[i+1]=this.temp;
                 }
                 

             },
             correct(index){
                 console.log("hi");
                 document.getElementsByClassName("correct").item(index).style.display='inline';

             },
            correct2(index){
                 console.log("hi");
                 document.getElementsByClassName("correct").item(index).style.display='none';

             }
        }
        
    }
</script>

<style scoped>
nav{
    box-shadow: 0px 2px 900px rgb(206, 203, 203);
}
.logo{
    width: 80%;
}
.logo-search ,.logo-more{
    width: 2%;
}
.textSearch{
    visibility: hidden;
}

.sliderCategory{
    border-width: small;
    border-style: solid;
    border-color: gray;
    border-radius: 30px;
    padding-right: 10%;
    padding-left: 10%;
    width: 10vw; 
}
.sliderCategory:hover
{
    color: white;
    background-color:#572589 ;
}

.formlogin{
    display: none;
}
.correct{
    display: none;
}
</style>






