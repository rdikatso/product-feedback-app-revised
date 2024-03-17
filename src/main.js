import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue'
import App from './App.vue'
// import HelloWorld from '@/components/HelloWorld'
import Suggestions from '@/components/Suggestions'
import SuggestionDetail from '@/components/SuggestionDetail'
import PageNotFound from '@/components/PageNotFound'
import AddFeedback from './components/AddFeedback.vue'  
// import * as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueSelect from 'vue-select';

import 'vue-select/dist/vue-select.css';
import store from '@/store/store';

const routes = [
    { path: '/', 
    name : 'SuggestionsComponent',
    component: Suggestions 
    },
    { path: '/add-feedback', 
    name: 'AddFeedback', 
    component: AddFeedback 
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
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const feedbackApp = createApp(App)

feedbackApp.use(router)
feedbackApp.use(store);
feedbackApp.component('VueSelect', VueSelect);

feedbackApp.mount('#app')
//createApp(App).mount('#app')
