import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import Top from '../Top.vue';

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'Top',
            component: Top
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
});

export default router;