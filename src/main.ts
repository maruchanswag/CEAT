import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import App from './App.vue'
import routes from '~pages'
const router = createRouter({ history: createWebHistory(), routes })
createApp(App).use(router).use(autoAnimatePlugin).mount('#app')
