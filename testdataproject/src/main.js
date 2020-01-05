
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index.js';
import App from './App.vue';


Vue.use(VueRouter);

const router = new VueRouter({
    mode:'hash',
    base:__dirname,
    routes:[
        {
            path:'/',
            component:App,
            children:[
                
            ]

        }
    ]
})

new Vue({
    router,
    store,

}).$mount('#app');