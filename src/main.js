import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import App from './App.vue'
// import HelloWorld from '@/components/HelloWorld'
import Suggestions from '@/components/Suggestions'
import SuggestionDetail from '@/components/SuggestionDetail'
import PageNotFound from '@/components/PageNotFound'
// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const routes = [
    { path: '/', 
    name : 'SuggestionsComponent',
    component: Suggestions 
    },
    { path: '/suggestion/:id', 
    name : 'SuggestionDetail',
    component: SuggestionDetail,
    props : true
    },
    { path: '/:pathMatch(.*)*',
      name: 'PageNotFound', 
      component: PageNotFound 
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const feedbackApp = createApp(App)

feedbackApp.use(router)

feedbackApp.mount('#app')
//createApp(App).mount('#app')
