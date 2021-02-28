import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import AccountRegister from '../components/AccountRegister'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '*',
        redirect: '/dashboard'
    },
    {
        path: '/',
        name: 'home',
        meta: {
            requiresAuth: true
        },
        redirect: '/dashboard'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/account-register',
        name: 'AccountRegister',
        component: AccountRegister
    }
]
});

export default router