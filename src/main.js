import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {  
    faHouse,
    faUsers,
    faGear,
    faCircleCheck,
    faClock,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHouse)
library.add(faUsers)
library.add(faGear)
library.add(faCircleCheck)
library.add(faClock)
library.add(faPenToSquare)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
