import { createRouter, createWebHashHistory } from "vue-router";

// import sub pages
import home from './components/Home.vue'
import reservation from './components/Reservation.vue'
import user from './components/User.vue'
import inventory from './components/Inventory.vue'
import homepage from './components/HomePage.vue'

//route list

const routes = [
    {
        path: '/', component: home,redirect:'/home', children: [
            { path: '/reservation', component: reservation },
            { path: '/user', component: user },
            { path: '/inventory', component: inventory },
            { path: '/home', component: homepage }
        ]
    },
]
export default createRouter({
    history: createWebHashHistory(),
    routes,
})

