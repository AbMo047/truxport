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
        
        <div class="services-grid">
          <div class="card">
            <h3>ADR Transport</h3>
            <p>Veilig en betrouwbaar ADR transport voor gevaarlijke goederen,
              nationaal en internationaal, volgens de geldende ADR voorschriften.
            </p>

            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
              <li>Nationaal en internationaal vervoer van gevaarlijke goederen</li>
              <li>Transport volgens de geldende ADR regelgeving</li>
              <li>Correcte behandeling en beveiliging van uw lading</li>
              <li>Ondersteuning bij transportdocumentatie en etikettering</li>
              <li>Duidelijke opvolging van ophaling tot levering</li>
            </ul>
            <div class="service-price">
                <strong>
                  Prijs op aanvraag
                </strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Express Leveringen</h3>
            <p>Snelle en betrouwbare expressleveringen voor dringende zendingen in België
              en Europa, met een oplossing op maat van uw planning en bestemming.</p>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
              <li>Snelle ophaling en levering van dringende zendingen</li>
              <li>Nationale en internationale expressleveringen</li>
              <li>Same day en next day levering mogelijk</li>
              <li>Rechtstreekse levering van deur tot deur</li>
              <li>Duidelijke opvolging van ophaling tot bestemming</li>
            </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Sneltransport</h3>
            <p>Direct en betrouwbaar sneltransport voor dringende zendingen in België en Europa.
              Uw goederen worden zo snel mogelijk opgehaald en rechtstreeks naar de bestemming vervoerd.</p>
              <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                <li>Onmiddellijke ophaling van dringende zendingen</li>
                <li>Rechtstreeks transport zonder onnodige tussenstops</li>
                <li>Nationaal en internationaal spoedtransport</li>
                <li>Een voertuig exclusief voor uw zending</li>
                <li>Duidelijke opvolging van ophaling tot levering</li>
              </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Internationaal Transport</h3>
            <p>Betrouwbaar internationaal transport van goederen vanuit België naar bestemmingen
              in heel Europa, met duidelijke communicatie en een zorgvuldige opvolging.
            </p>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
              <li>Goederenvervoer vanuit België naar Europese bestemmingen</li>
              <li>Deelladingen en volledige ladingen mogelijk</li>
              <li>Transport van pallets, goederen en volumeladingen</li>
              <li>Rechtstreekse levering van afzender tot bestemming</li>
              <li>Duidelijke opvolging tijdens het volledige transporttraject</li>
            </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Bevoorrading van Schepen</h3>
            <p>Snelle en betrouwbare bevoorrading van schepen met goederen, materialen en benodigdheden, volledig afgestemd op het vaarschema en de planning in de haven.</p>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
              <li>Tijdige levering van goederen en benodigdheden aan schepen</li>
              <li>Spoedleveringen voor dringende scheepsbevoorrading</li>
              <li>Ophaling bij leveranciers en levering tot aan de haven</li>
              <li>Duidelijke communicatie tijdens het volledige leveringstraject</li>
            </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Palletvervoer</h3>
            <p>Betrouwbaar palletvervoer voor kleine en grote palletzendingen in België en Europa, met een veilige ophaling en tijdige levering op de gewenste bestemming.</p>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
              <li>Transport van europallets en industriepallets</li>
              <li>Vervoer van één pallet tot meerdere palletzendingen</li>
              <li>Nationaal en internationaal pallettransport</li>
              <li>Deelladingen en volledige ladingen mogelijk</li>
              <li>Duidelijke opvolging van ophaling tot levering</li>
            </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Volumetransport</h3>
            <p>Efficiënt volumetransport voor lichte, grote en ruimte innemende goederen in België en Europa, met maximale benutting van de beschikbare laadruimte.
            </p>
            <ul style="margin: 1rem 0; padding-left: 1.5rem;">
              <li>Vervoer van lichte en volumineuze goederen</li>
              <li>Geschikt voor meubels, verpakkingen, textiel en isolatiematerialen</li>
              <li>Nationaal en internationaal volumetransport</li>
              <li>Flexibele oplossingen voor deelvrachten en volledige ladingen</li>
              <li>Zorgvuldige ophaling en levering op de gewenste bestemming</li>
            </ul>
            <div class="service-price">
              <strong>Prijs op aanvraag</strong>
            </div>
          </div>
          
          <div class="card">
            <h3>Warehousing, Opslag en Overslag</h3>
            <p>
              Flexibele warehousing, veilige opslag en efficiënte overslag van goederen,
              afgestemd op uw voorraad, planning en verdere distributie.
            </p>
          <ul class="service-list">
            <li>Tijdelijke en langdurige opslag van goederen</li>
            <li>Veilige ontvangst, verwerking en bewaring</li>
            <li>Professioneel laden en lossen van zendingen</li>
            <li>Overslag tussen voertuigen voor verder transport</li>
            <li>Combinatie met nationaal en internationaal transport</li>
          </ul>
        <div class="service-price">
        <strong>Prijs op aanvraag</strong>
        </div>
        </div>
        </div>
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
import heroImage from '../assets/images/services-hero.webp'
</script>

<style scoped>
.service-price {
  background: var(--bg);
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-top: 1rem;
  color: var(--orange-dark);
  font-weight: bold;
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
