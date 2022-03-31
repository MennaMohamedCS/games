import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {createRouter,createWebHistory} from 'vue-router';



import homeComp from './components/home.vue';
import detailsComp from './components/details.vue';


import axios  from 'axios';

const routes = [
    {
        path:'/',
        component:homeComp,
    },
    {
        path:'/home',
        component:homeComp
    },
    {
        path:'/:id',
        component:detailsComp,
        props:true
    },
]

axios.defaults.baseURL='http://localhost:3000/'
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

