import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import axios from '@/configs-axios/axios-config';
import  Vue  from 'vue';



createApp(App).use(router).mount('#app')


