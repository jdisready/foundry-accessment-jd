import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Entry from '../views/Entry.vue'
import Clients from '../views/Clients'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/register',
        name: 'register',

        component: Register
    },
    {
        path: '/entry',
        name: 'entry',

        component: Entry
    },
    {
        path: '/clients',
        name: 'clients',

        component: Clients
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router