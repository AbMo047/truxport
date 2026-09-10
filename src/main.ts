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
import NotFound from './views/NotFound.vue'

const SITE_URL = 'https://truxport.be'

const breadcrumb = (name: string, path: string) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL + '/' },
    { '@type': 'ListItem', position: 2, name, item: SITE_URL + path }
  ]
})

const servicesSchema = {
  '@type': 'Service',
  serviceType: 'Vrachtwagentransport en logistiek',
  provider: { '@type': 'LocalBusiness', name: 'TruxPort' },
  areaServed: ['België', 'Europa'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Transportdiensten',
    itemListElement: [
      'ADR Transport',
      'Express Leveringen',
      'Sneltransport',
      'Internationaal Transport',
      'Bevoorrading van Schepen',
      'Palletvervoer',
      'Volumetransport',
      'Warehousing, Opslag en Overslag'
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } }))
  }
}

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      question: 'Hoe snel kan ik een offerte ontvangen?',
      answer: 'Wij streven ernaar om binnen 2 uur een offerte te sturen voor standaard transporten. Voor complexe transporten kan dit tot 24 uur duren.'
    },
    {
      question: 'Zijn jullie 24/7 beschikbaar?',
      answer: 'Ja, wij zijn 24/7 beschikbaar voor spoedtransporten. Onze spoedlijn is altijd bereikbaar voor urgente zendingen.'
    },
    {
      question: 'Welke gebieden bedienen jullie?',
      answer: 'Wij bedienen heel België en alle EU-landen. Voor lokale distributie richten wij ons op Antwerpen en omliggende regio’s.'
    },
    {
      question: 'Zijn de vrachtwagens verzekerd?',
      answer: 'Ja, al onze vrachtwagens zijn volledig verzekerd. Wij bieden ook aanvullende verzekering voor uw goederen aan.'
    },
    {
      question: 'Kunnen jullie gevaarlijke stoffen vervoeren?',
      answer: 'Ja, wij zijn ADR gecertificeerd voor het vervoer van gevaarlijke stoffen. Onze chauffeurs zijn speciaal opgeleid voor deze transporten.'
    }
  ].map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer }
  }))
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'TruxPort - Vrachtwagen Transport in Antwerpen en Europa',
      description: 'Professioneel vrachtwagentransport voor bedrijven in België en Europa. Betrouwbaar, veilig en op tijd. Vraag een vrijblijvende offerte aan.',
      ogImage: '/images/og-home.jpg'
    }
  },
  {
    path: '/diensten',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Onze Diensten - ADR, Express & Palletvervoer | TruxPort',
      description: 'Van ADR transport tot palletvervoer, internationaal transport en warehousing: TruxPort biedt transportoplossingen op maat in België en Europa.',
      ogImage: '/images/og-diensten.jpg',
      schema: [breadcrumb('Onze Diensten', '/diensten'), servicesSchema]
    }
  },
  {
    path: '/vrachtwagens',
    name: 'Trucks',
    component: Trucks,
    meta: {
      title: 'Ons Wagenpark - Moderne Vrachtwagens | TruxPort',
      description: 'Ontdek ons moderne en milieuvriendelijke wagenpark, van bestelwagens tot trekker-opleggers, voor elke transportbehoefte.',
      ogImage: '/images/og-vrachtwagens.jpg',
      schema: [breadcrumb('Onze Vrachtwagens', '/vrachtwagens')]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact & Offerte Aanvragen | TruxPort',
      description: 'Neem contact op met TruxPort voor een vrijblijvende offerte. Bereikbaar via telefoon, e-mail of ons kantoor in Antwerpen.',
      ogImage: '/images/og-home.jpg',
      schema: [breadcrumb('Contact', '/contact'), faqSchema]
    }
  },
  {
    path: '/over-ons',
    name: 'About',
    component: About,
    meta: {
      title: 'Over Ons - 15+ Jaar Transportervaring | TruxPort',
      description: 'Sinds 2008 het betrouwbare transportbedrijf uit Antwerpen. Maak kennis met ons verhaal, team en certificeringen.',
      ogImage: '/images/og-over-ons.jpg',
      schema: [breadcrumb('Over Ons', '/over-ons')]
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Pagina Niet Gevonden | TruxPort',
      description: 'Deze pagina bestaat niet of is verplaatst.',
      ogImage: '/images/og-home.jpg',
      noindex: true
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

function setMeta(selector: string, attribute: string, value: string) {
  document.querySelector(selector)?.setAttribute(attribute, value)
}

function setSchema(schemas: unknown[] | undefined) {
  const existing = document.getElementById('dynamic-schema')
  existing?.remove()

  if (!schemas || schemas.length === 0) return

  const script = document.createElement('script')
  script.id = 'dynamic-schema'
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas })
  document.head.appendChild(script)
}

router.afterEach((to) => {
  const title = (to.meta.title as string) ?? 'TruxPort'
  const description = (to.meta.description as string) ?? ''
  const ogImage = SITE_URL + ((to.meta.ogImage as string) ?? '/images/og-home.jpg')
  const url = `${SITE_URL}${to.path}`

  document.title = title

  setMeta('meta[name="description"]', 'content', description)
  setMeta('meta[name="robots"]', 'content', to.meta.noindex ? 'noindex, follow' : 'index, follow')
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('meta[property="og:image"]', 'content', ogImage)
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('meta[name="twitter:image"]', 'content', ogImage)
  setMeta('#canonical-link', 'href', url)

  setSchema(to.meta.schema as unknown[] | undefined)
})

const app = createApp(App)
app.use(router)
app.mount('#app')
