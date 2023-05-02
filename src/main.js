
/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/general.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHotel, faRotate, faHouseChimney, faTruck, faSuitcase, faUsersLine, faGlobe, faLink, faMagnifyingGlass, faGear, faLightbulb, faPhoneFlip, faEnvelope, faClock, faHeart, faArrowUpFromBracket, faCaretDown} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faHotel, faRotate, faHouseChimney, faTruck, faSuitcase, faUsersLine, faGlobe, faLink, faMagnifyingGlass, faGear, faLightbulb, faPhoneFlip, faEnvelope, faClock, faHeart, faArrowUpFromBracket, faCaretDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
