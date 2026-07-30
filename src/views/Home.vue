<template>
  <div>
    <section class="hero hero-photo" :style="{ '--hero-image': `url(${heroImage})` }">
      <div class="container">
        <h1>Vrachtwagen Transport in Antwerpen en Europa</h1>
        <p>TruxPort verzorgt betrouwbaar, veilig en efficiënt vrachtwagentransport voor bedrijven in België en de rest van Europa. Persoonlijke service, moderne vloot, altijd op tijd.</p>
        <div class="hero-buttons">
          <router-link to="/contact" class="btn btn-primary">Vraag Offerte Aan</router-link>
          <router-link to="/diensten" class="btn btn-secondary">Bekijk Onze Diensten</router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Waarom Kiezen Voor TruxPort</h2>
          <p>Wat ons onderscheidt in de transport- en logistieksector</p>
        </div>

        <div class="grid grid-3">
          <div class="card">
            <h3>🤝 Betrouwbaarheid</h3>
            <p>Wij leveren wat wij beloven. Duidelijke communicatie en opvolging van ophaling tot levering, bij elke zending.</p>
          </div>

          <div class="card">
            <h3>📞 Persoonlijke Service</h3>
            <p>Eén rechtstreeks aanspreekpunt voor uw transportopdracht, geen callcenters of eindeloze doorverbindingen.</p>
          </div>

          <div class="card">
            <h3>🌱 Moderne & Duurzame Vloot</h3>
            <p>Vrachtwagens volgens de Euro 6 norm, met een groeiend aantal elektrische voertuigen voor emissievrij transport.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Onze Transportdiensten</h2>
          <p>Van spoedzendingen tot internationaal transport, wij hebben de juiste oplossing</p>
        </div>

        <div class="grid grid-3">
          <div class="card">
            <h3>⚠️ ADR Transport</h3>
            <p>Veilig en gecertificeerd transport van gevaarlijke goederen, nationaal en internationaal.</p>
          </div>

          <div class="card">
            <h3>🚀 Express Leveringen</h3>
            <p>Snelle same-day en next-day leveringen voor dringende zendingen in België en Europa.</p>
          </div>

          <div class="card">
            <h3>🌍 Internationaal Transport</h3>
            <p>Betrouwbaar goederenvervoer vanuit België naar bestemmingen in heel Europa.</p>
          </div>

          <div class="card">
            <h3>📦 Palletvervoer</h3>
            <p>Van één pallet tot volledige ladingen, nationaal en internationaal vervoerd.</p>
          </div>

          <div class="card">
            <h3>🏭 Warehousing & Overslag</h3>
            <p>Flexibele opslag en efficiënte overslag, afgestemd op uw voorraad en planning.</p>
          </div>

          <div class="card">
            <h3>🚢 Bevoorrading van Schepen</h3>
            <p>Tijdige levering van goederen aan schepen, afgestemd op het vaarschema in de haven.</p>
          </div>
        </div>

        <div class="text-center" style="margin-top: 2rem;">
          <router-link to="/diensten" class="btn btn-primary">Bekijk Alle Diensten</router-link>
        </div>
      </div>
    </section>

    <!-- Trust / Testimonials -->
    <TrustSection />

    <!-- Stats Section -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>TruxPort in Cijfers</h2>
          <p>Onze ambitie: groeien tot een toonaangevende transportpartner in België en Europa</p>
        </div>

        <div class="grid grid-4">
          <div class="card text-center">
            <h3 class="stat-number">15+</h3>
            <p>Jaar Ervaring</p>
          </div>

          <div class="card text-center">
            <h3 class="stat-number">50+</h3>
            <p>Vrachtwagens</p>
          </div>

          <div class="card text-center">
            <h3 class="stat-number">500+</h3>
            <p>Tevreden Klanten</p>
          </div>

          <div class="card text-center">
            <h3 class="stat-number">100%</h3>
            <p>Klanttevredenheid</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-band">
      <div class="container text-center">
        <h2>Klaar Voor Betrouwbaar Transport?</h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Neem contact met ons op voor een vrijblijvende offerte op maat van uw transportbehoefte.
        </p>
        <div class="hero-buttons">
          <router-link to="/contact" class="btn btn-primary">Vraag Offerte Aan</router-link>
          <router-link to="/vrachtwagens" class="btn btn-secondary">Bekijk Ons Wagenpark</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import heroImage from '../assets/images/home-hero-highway.jpg'
import TrustSection from '../components/TrustSection.vue'
</script>

<style scoped>
.stat-number {
  font-size: 2.5rem;
  color: var(--orange);
  margin-bottom: 0.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .hero-buttons .btn {
    width: 200px;
  }
}
</style>
