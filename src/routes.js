import Home from './components/Home.vue'
import About from './components/About.vue'
import User from './components/User.vue'
import Hobbies from './components/Hobbies.vue'
import UserDetails from './components/UserDetails.vue'

export const routes =[
    {path: '', component: Home},
    {path: '/about', component: About},
    {path: '/user', component: User, children: [
        {path:'details', component: UserDetails}
    ]},
    {path: '/hobbies', component: Hobbies}
]