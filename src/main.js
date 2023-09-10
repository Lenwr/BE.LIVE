import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import Accueil from "@/components/accueil.vue";
import CreateEvents from "@/components/CreateEvents.vue";
import Event from "@/components/event.vue";
import {createRouter, createWebHistory} from "vue-router";
import { VueFire, VueFireAuth } from 'vuefire'
import {firebaseApp} from "@/components/firebaseConfig";
import Contact from "@/components/contact.vue";




const routes = [
    {
        path: '/' , component:  Accueil
    } ,
    {
        path: '/createEvents' , component: CreateEvents
    },
    {
        path: '/events/:event_id' , component: Event
    },
    {
        path: '/contact' , component: Contact
    }

]
const router = createRouter(
    {
        history : createWebHistory(),
        routes: routes
    }
)

const app = createApp(App)
app.use(router);
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        // we will see other modules later on
    ],
})
app.mount('#app');