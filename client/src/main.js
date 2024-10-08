import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHammer, faPlug, faTruckFast, faUserSecret, faCheck, faBars} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTruckFast, faPlug, faHammer, faCheck, faBars)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
