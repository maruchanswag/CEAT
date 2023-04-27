import { createApp } from 'vue'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({ history: createWebHistory(), routes })
createApp(App).use(router).mount('#app')
