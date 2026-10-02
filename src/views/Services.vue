<template>
  <div>
    <!-- Hero Section -->
    <section class="hero hero-photo" :style="{ '--hero-image': `url(${heroImage})` }">
      <div class="container">
        <h1>Onze Diensten</h1>
        <p>Professionele transport- en logistieke oplossingen op maat voor elke behoefte</p>
      </div>
    </section>

    <!-- Main Services -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Onze Transportdiensten</h2>
          <p>Gespecialiseerde transportoplossingen voor elke behoefte</p>
        </div>
        
        <CardSlider>
          <div v-for="service in services" :key="service.title" class="card">
            <h3>{{ service.title }}</h3>
            <StarRating :rating="service.rating" :count="service.count" />
            <p>{{ service.description }}</p>
            <ul class="service-list">
              <li v-for="item in service.items" :key="item">{{ item }}</li>
            </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
        </CardSlider>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="section section-alt">
  <div class="container">
    <div class="section-title">
      <h2>Aanvullende logistieke diensten</h2>
      <p>
        Praktische ondersteuning voor een complete en betrouwbare transportoplossing.
      </p>
    </div>

    <div class="grid grid-3">
      <div class="card">
        <h3>📋 Douaneondersteuning</h3>
        <p>
          Ondersteuning bij douanedocumenten en formaliteiten voor internationale
          transporten, zodat uw zending correct en vlot kan worden verwerkt.
        </p>
      </div>

      <div class="card">
        <h3>📍 Tracking en opvolging</h3>
        <p>
          Duidelijke opvolging van uw zending vanaf de ophaling tot de levering,
          met actuele statusinformatie tijdens het transport.
        </p>
      </div>

      <div class="card">
        <h3>🛡️ Transportverzekering</h3>
        <p>
          Mogelijkheid tot aanvullende verzekering van uw goederen, afhankelijk
          van de waarde, aard en bestemming van de zending.
        </p>
      </div>

      <div class="card">
        <h3>📞 Persoonlijke ondersteuning</h3>
        <p>
          Een rechtstreeks aanspreekpunt voor vragen, wijzigingen en de praktische
          opvolging van uw transportopdracht.
        </p>
      </div>

      <div class="card">
        <h3>🔄 Retourlogistiek</h3>
        <p>
          Efficiënte organisatie van retourzendingen, retourgoederen en terugkerende
          goederenstromen in België en Europa.
        </p>
      </div>

      <div class="card">
        <h3>📊 Transportoverzichten</h3>
        <p>
          Duidelijke overzichten van uitgevoerde transporten, leveringen en relevante
          informatie voor uw administratie.
        </p>
      </div>
    </div>
  </div>
</section>

    <!-- Process Section -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Hoe Werkt Het?</h2>
          <p>Eenvoudig en transparant proces in 4 stappen</p>
        </div>
        
        <div class="grid grid-4">
          <div class="card text-center">
            <div class="process-step">1</div>
            <h3>Offerte Aanvragen</h3>
            <p>Vul ons contactformulier in of bel direct voor een vrijblijvende offerte.</p>
          </div>
          
          <div class="card text-center">
            <div class="process-step">2</div>
            <h3>Planning</h3>
            <p>Wij plannen uw transport en zorgen voor de juiste vrachtwagen en chauffeur.</p>
          </div>
          
          <div class="card text-center">
            <div class="process-step">3</div>
            <h3>Transport</h3>
            <p>Uw goederen worden veilig en op tijd vervoerd naar de bestemming.</p>
          </div>
          
          <div class="card text-center">
            <div class="process-step">4</div>
            <h3>Levering</h3>
            <p>Bevestiging van levering en eventuele retourlogistiek regelen wij voor u.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FaqSection />

    <!-- CTA Section -->
    <section class="section cta-band">
      <div class="container text-center">
        <h2>Klaar voor een Offerte?</h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Neem contact met ons op voor een vrijblijvende offerte op maat.
        </p>
        <router-link to="/contact" class="btn btn-primary">Vraag Offerte Aan</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import heroImage from '../assets/images/services-hero.jpg'
import CardSlider from '../components/CardSlider.vue'
import FaqSection from '../components/FaqSection.vue'
import StarRating from '../components/StarRating.vue'

const services = [
  {
    title: 'ADR Transport',
    rating: 4.9,
    count: 86,
    description: 'Veilig en betrouwbaar ADR transport voor gevaarlijke goederen, nationaal en internationaal, volgens de geldende ADR voorschriften.',
    items: [
      'Nationaal en internationaal vervoer van gevaarlijke goederen',
      'Transport volgens de geldende ADR regelgeving',
      'Correcte behandeling en beveiliging van uw lading',
      'Ondersteuning bij transportdocumentatie en etikettering',
      'Duidelijke opvolging van ophaling tot levering'
    ]
  },
  {
    title: 'Express Leveringen',
    rating: 4.7,
    count: 134,
    description: 'Snelle en betrouwbare expressleveringen voor dringende zendingen in België en Europa, met een oplossing op maat van uw planning en bestemming.',
    items: [
      'Snelle ophaling en levering van dringende zendingen',
      'Nationale en internationale expressleveringen',
      'Same day en next day levering mogelijk',
      'Rechtstreekse levering van deur tot deur',
      'Duidelijke opvolging van ophaling tot bestemming'
    ]
  },
  {
    title: 'Sneltransport',
    rating: 4.8,
    count: 97,
    description: 'Direct en betrouwbaar sneltransport voor dringende zendingen in België en Europa. Uw goederen worden zo snel mogelijk opgehaald en rechtstreeks naar de bestemming vervoerd.',
    items: [
      'Onmiddellijke ophaling van dringende zendingen',
      'Rechtstreeks transport zonder onnodige tussenstops',
      'Nationaal en internationaal spoedtransport',
      'Een voertuig exclusief voor uw zending',
      'Duidelijke opvolging van ophaling tot levering'
    ]
  },
  {
    title: 'Internationaal Transport',
    rating: 4.6,
    count: 112,
    description: 'Betrouwbaar internationaal transport van goederen vanuit België naar bestemmingen in heel Europa, met duidelijke communicatie en een zorgvuldige opvolging.',
    items: [
      'Goederenvervoer vanuit België naar Europese bestemmingen',
      'Deelladingen en volledige ladingen mogelijk',
      'Transport van pallets, goederen en volumeladingen',
      'Rechtstreekse levering van afzender tot bestemming',
      'Duidelijke opvolging tijdens het volledige transporttraject'
    ]
  },
  {
    title: 'Bevoorrading van Schepen',
    rating: 4.9,
    count: 41,
    description: 'Snelle en betrouwbare bevoorrading van schepen met goederen, materialen en benodigdheden, volledig afgestemd op het vaarschema en de planning in de haven.',
    items: [
      'Tijdige levering van goederen en benodigdheden aan schepen',
      'Spoedleveringen voor dringende scheepsbevoorrading',
      'Ophaling bij leveranciers en levering tot aan de haven',
      'Duidelijke communicatie tijdens het volledige leveringstraject'
    ]
  },
  {
    title: 'Palletvervoer',
    rating: 4.7,
    count: 168,
    description: 'Betrouwbaar palletvervoer voor kleine en grote palletzendingen in België en Europa, met een veilige ophaling en tijdige levering op de gewenste bestemming.',
    items: [
      'Transport van europallets en industriepallets',
      'Vervoer van één pallet tot meerdere palletzendingen',
      'Nationaal en internationaal pallettransport',
      'Deelladingen en volledige ladingen mogelijk',
      'Duidelijke opvolging van ophaling tot levering'
    ]
  },
  {
    title: 'Volumetransport',
    rating: 4.5,
    count: 73,
    description: 'Efficiënt volumetransport voor lichte, grote en ruimte innemende goederen in België en Europa, met maximale benutting van de beschikbare laadruimte.',
    items: [
      'Vervoer van lichte en volumineuze goederen',
      'Geschikt voor meubels, verpakkingen, textiel en isolatiematerialen',
      'Nationaal en internationaal volumetransport',
      'Flexibele oplossingen voor deelvrachten en volledige ladingen',
      'Zorgvuldige ophaling en levering op de gewenste bestemming'
    ]
  },
  {
    title: 'Warehousing, Opslag en Overslag',
    rating: 4.8,
    count: 59,
    description: 'Flexibele warehousing, veilige opslag en efficiënte overslag van goederen, afgestemd op uw voorraad, planning en verdere distributie.',
    items: [
      'Tijdelijke en langdurige opslag van goederen',
      'Veilige ontvangst, verwerking en bewaring',
      'Professioneel laden en lossen van zendingen',
      'Overslag tussen voertuigen voor verder transport',
      'Combinatie met nationaal en internationaal transport'
    ]
  }
]
</script>

<style scoped>
.service-price {
  background: var(--bg);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-top: auto;
  color: var(--orange-dark);
  font-weight: bold;
}

.service-list {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.process-step {
  width: 60px;
  height: 60px;
  background: var(--orange);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
}

@media (max-width: 768px) {
  .grid-4 {
    grid-template-columns: 1fr;
  }
}
</style>
