import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import views
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import Trucks from './views/Trucks.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'TruxPort - Vrachtwagen Transport in Antwerpen en Europa',
      description: 'Professioneel vrachtwagentransport voor bedrijven in België en Europa. Betrouwbaar, veilig en op tijd. Vraag een vrijblijvende offerte aan.'
    }
  },
  {
    path: '/diensten',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Onze Diensten - ADR, Express & Palletvervoer | TruxPort',
      description: 'Van ADR transport tot palletvervoer, internationaal transport en warehousing: TruxPort biedt transportoplossingen op maat in België en Europa.'
    }
  },
  {
    path: '/vrachtwagens',
    name: 'Trucks',
    component: Trucks,
    meta: {
      title: 'Ons Wagenpark - Moderne Vrachtwagens | TruxPort',
      description: 'Ontdek ons moderne en milieuvriendelijke wagenpark, van bestelwagens tot trekker-opleggers, voor elke transportbehoefte.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact & Offerte Aanvragen | TruxPort',
      description: 'Neem contact op met TruxPort voor een vrijblijvende offerte. Bereikbaar via telefoon, e-mail of ons kantoor in Antwerpen.'
    }
  },
  {
    path: '/over-ons',
    name: 'About',
    component: About,
    meta: {
      title: 'Over Ons - 15+ Jaar Transportervaring | TruxPort',
      description: 'Sinds 2008 het betrouwbare transportbedrijf uit Antwerpen. Maak kennis met ons verhaal, team en certificeringen.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

const SITE_URL = 'https://truxport.be'

router.afterEach((to) => {
  const title = (to.meta.title as string) ?? 'TruxPort'
  const description = (to.meta.description as string) ?? ''

  document.title = title

  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', `${SITE_URL}${to.path}`)
  document.querySelector('#canonical-link')?.setAttribute('href', `${SITE_URL}${to.path}`)
})

const app = createApp(App)
app.use(router)
app.mount('#app')
