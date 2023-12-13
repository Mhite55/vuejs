import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShowUsers from './components/ShowUsers.vue'
import FormUsers from './components/FormUsers.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/users',
            name: 'ShowUsers',
            component: ShowUsers
        },
        {
            path:'/users/add',
            name:'FormUsers',
            component: FormUsers
        }
    ]
})

export default router;
createApp(App).use(router).mount('#app')
