<template>
  <div>
    <!-- Hero Section -->
    <section class="hero hero-photo" :style="{ '--hero-image': `url(${heroImage})` }">
      <div class="container">
        <h1>Onze Vrachtwagens</h1>
        <p>Modern, veilig en milieuvriendelijk wagenpark voor elke transportbehoefte</p>
      </div>
    </section>

    <!-- Fleet Overview -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Ons Wagenpark</h2>
          <p>Van kleine bestelwagens tot grote vrachtwagens - wij hebben de juiste voertuigen voor elke klus</p>
        </div>
        
        <CardSlider>
          <div class="card">
            <h3>🚐 Bestelwagens (3.5 ton)</h3>
            <p>Perfect voor stadsdistributie en kleine leveringen. Wendbaar en brandstofzuinig.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Laadvermogen:</strong> 1.500 kg
              </div>
              <div class="spec-item">
                <strong>Laadruimte:</strong> 12 m³
              </div>
              <div class="spec-item">
                <strong>Lengte:</strong> 6 meter
              </div>
              <div class="spec-item">
                <strong>Brandstof:</strong> Diesel / Elektrisch
              </div>
            </div>
            <div class="truck-features">
              <h4>Features:</h4>
              <ul>
                <li>GPS tracking</li>
                <li>Klimaatregeling</li>
                <li>Hydraulische laadklep</li>
                <li>Euro 6 norm</li>
              </ul>
            </div>
          </div>
          
          <div class="card">
            <h3>🚛 Middelgrote Vrachtwagens (7.5 ton)</h3>
            <p>Ideaal voor regionale distributie en middelgrote ladingen. Betrouwbaar en efficiënt.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Laadvermogen:</strong> 4.500 kg
              </div>
              <div class="spec-item">
                <strong>Laadruimte:</strong> 25 m³
              </div>
              <div class="spec-item">
                <strong>Lengte:</strong> 8 meter
              </div>
              <div class="spec-item">
                <strong>Brandstof:</strong> Diesel / CNG
              </div>
            </div>
            <div class="truck-features">
              <h4>Features:</h4>
              <ul>
                <li>GPS tracking</li>
                <li>Klimaatregeling</li>
                <li>Hydraulische laadklep</li>
                <li>Euro 6 norm</li>
                <li>ADAS veiligheidssystemen</li>
              </ul>
            </div>
          </div>
          
          <div class="card">
            <h3>🚚 Grote Vrachtwagens (18 ton)</h3>
            <p>Voor zware ladingen en lange afstanden. Krachtig en comfortabel voor de chauffeur.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Laadvermogen:</strong> 12.000 kg
              </div>
              <div class="spec-item">
                <strong>Laadruimte:</strong> 60 m³
              </div>
              <div class="spec-item">
                <strong>Lengte:</strong> 12 meter
              </div>
              <div class="spec-item">
                <strong>Brandstof:</strong> Diesel / LNG
              </div>
            </div>
            <div class="truck-features">
              <h4>Features:</h4>
              <ul>
                <li>GPS tracking</li>
                <li>Klimaatregeling</li>
                <li>Hydraulische laadklep</li>
                <li>Euro 6 norm</li>
                <li>ADAS veiligheidssystemen</li>
                <li>Comfortabele cabine</li>
              </ul>
            </div>
          </div>
          
          <div class="card">
            <h3>🚛 Trekker + Aanhanger (40 ton)</h3>
            <p>Voor de zwaarste ladingen en internationale transporten. Maximale capaciteit en efficiëntie.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Laadvermogen:</strong> 25.000 kg
              </div>
              <div class="spec-item">
                <strong>Laadruimte:</strong> 100 m³
              </div>
              <div class="spec-item">
                <strong>Lengte:</strong> 18 meter
              </div>
              <div class="spec-item">
                <strong>Brandstof:</strong> Diesel / LNG
              </div>
            </div>
            <div class="truck-features">
              <h4>Features:</h4>
              <ul>
                <li>GPS tracking</li>
                <li>Klimaatregeling</li>
                <li>Hydraulische laadklep</li>
                <li>Euro 6 norm</li>
                <li>ADAS veiligheidssystemen</li>
                <li>Luxe cabine met bed</li>
                <li>Automatische versnellingsbak</li>
              </ul>
            </div>
          </div>
        </CardSlider>
      </div>
    </section>

    <!-- Specialized Vehicles -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Gespecialiseerde Voertuigen</h2>
          <p>Voor bijzondere transporten en specifieke behoeften</p>
        </div>
        
        <CardSlider>
          <div class="card">
            <h3>✈️ Luchtvracht Voertuigen</h3>
            <p>Gespecialiseerde voertuigen voor luchthaven transport en spoedzendingen.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Type:</strong> Bestelwagens & kleine vrachtwagens
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 1.5t - 7.5t
              </div>
              <div class="spec-item">
                <strong>Features:</strong> Luchthaven toegang, spoed transport
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>🚢 Zeevracht Voertuigen</h3>
            <p>Containerwagens en trailers voor zeevracht transport en overslag.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Container Types:</strong> 20ft, 40ft, 45ft
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 18t - 40t
              </div>
              <div class="spec-item">
                <strong>Features:</strong> Twistlocks, zijladen, port access
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>⚠️ ADR Vrachtwagens</h3>
            <p>Gecertificeerd voor het transport van gevaarlijke stoffen.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>ADR Klassen:</strong> 1-9
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 7.5t - 18t
              </div>
              <div class="spec-item">
                <strong>Certificering:</strong> ADR 2023
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>📦 Palletwagens</h3>
            <p>Gespecialiseerd voor efficiënt palletvervoer en consolidatie.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Pallet Types:</strong> Euro, industrie, chep
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 7.5t - 18t
              </div>
              <div class="spec-item">
                <strong>Features:</strong> Hydraulische laadklep, pallet tracking
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>📏 Volumewagens</h3>
            <p>Gespecialiseerd voor lichte maar volumineuze goederen.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Volume:</strong> 25m³ - 100m³
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 3.5t - 12t
              </div>
              <div class="spec-item">
                <strong>Features:</strong> Ruime laadruimte, volume optimalisatie
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>📐 Lengtewagens</h3>
            <p>Speciale trailers voor lange en oversize goederen.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Lengte:</strong> Tot 18 meter
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 7.5t - 25t
              </div>
              <div class="spec-item">
                <strong>Features:</strong> Lange trailers, oversize bevestiging
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>🏙️ Stedelijke Voertuigen</h3>
            <p>Elektrische en milieuvriendelijke voertuigen voor stedelijke distributie.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Type:</strong> Elektrische bestelwagens
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 1.5t - 3.5t
              </div>
              <div class="spec-item">
                <strong>Features:</strong> Zero-emissie, binnenstad toegang
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>❄️ Koelwagens</h3>
            <p>Gespecialiseerde koelwagens voor temperatuurgevoelige ladingen.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Temperatuur:</strong> -25°C tot +15°C
              </div>
              <div class="spec-item">
                <strong>Capaciteit:</strong> 3.5t - 18t
              </div>
              <div class="spec-item">
                <strong>Certificering:</strong> ATP
              </div>
            </div>
          </div>
          
          <div class="card">
            <h3>📊 IT & Monitoring</h3>
            <p>Voertuigen uitgerust met geavanceerde tracking en monitoring systemen.</p>
            <div class="truck-specs">
              <div class="spec-item">
                <strong>Tracking:</strong> GPS, telematics, real-time
              </div>
              <div class="spec-item">
                <strong>Monitoring:</strong> Temperatuur, vochtigheid, trilling
              </div>
              <div class="spec-item">
                <strong>Connectivity:</strong> 4G/5G, WiFi, Bluetooth
              </div>
            </div>
          </div>
        </CardSlider>
      </div>
    </section>

    <!-- Technology & Safety -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Technologie & Veiligheid</h2>
          <p>Moderne technologie voor veilig en efficiënt transport</p>
        </div>
        
        <CardSlider :per-view="2">
          <div class="card">
            <h3>🛡️ Veiligheidssystemen</h3>
            <ul>
              <li><strong>ADAS:</strong> Advanced Driver Assistance Systems</li>
              <li><strong>ABS:</strong> Anti-lock Braking System</li>
              <li><strong>ESP:</strong> Electronic Stability Program</li>
              <li><strong>LDW:</strong> Lane Departure Warning</li>
              <li><strong>FCW:</strong> Forward Collision Warning</li>
              <li><strong>ACC:</strong> Adaptive Cruise Control</li>
            </ul>
          </div>
          
          <div class="card">
            <h3>📱 Tracking & Monitoring</h3>
            <ul>
              <li><strong>GPS Tracking:</strong> Real-time locatie monitoring</li>
              <li><strong>Telematics:</strong> Brandstofverbruik en rijgedrag</li>
              <li><strong>Camera's:</strong> Voor- en achteruitrijcamera's</li>
              <li><strong>Sensoren:</strong> Temperatuur en vochtigheid</li>
              <li><strong>Alarm:</strong> Inbraak- en brandalarm</li>
              <li><strong>Connectivity:</strong> 4G/5G verbinding</li>
            </ul>
          </div>
        </CardSlider>
      </div>
    </section>

    <!-- Environmental -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Milieuvriendelijk Transport</h2>
          <p>Wij zetten ons in voor duurzaam en milieuvriendelijk transport</p>
        </div>
        
        <CardSlider>
          <div class="card text-center">
            <h3>🌱 Euro 6 Norm</h3>
            <p>Alle vrachtwagens voldoen aan de strengste Europese emissienormen</p>
          </div>
          
          <div class="card text-center">
            <h3>⚡ Elektrische Voertuigen</h3>
            <p>Een groeiend aantal elektrische bestelwagens voor emissievrij transport</p>
          </div>
          
          <div class="card text-center">
            <h3>🔄 Brandstofbesparing</h3>
            <p>Moderne motoren en aerodynamica zorgen voor optimaal brandstofverbruik</p>
          </div>
        </CardSlider>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-band">
      <div class="container text-center">
        <h2>Welke Vrachtwagen Heeft U Nodig?</h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Neem contact met ons op voor advies over de juiste vrachtwagen voor uw transport.
        </p>
        <router-link to="/contact" class="btn btn-primary">Vraag Advies Aan</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import heroImage from '../assets/images/trucks-hero.jpg'
import CardSlider from '../components/CardSlider.vue'
</script>

<style scoped>
.truck-specs {
  background: var(--bg);
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem 0;
}

.spec-item {
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border);
}

.spec-item strong {
  margin-right: 0.4rem;
}

.spec-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.truck-features {
  margin-top: 1rem;
}

.truck-features h4 {
  margin-bottom: 0.5rem;
  color: var(--orange-dark);
}

.truck-features ul {
  list-style: none;
  padding: 0;
}

.truck-features li {
  padding: 0.25rem 0;
  color: var(--text-muted);
}

.truck-features li:before {
  content: "✓ ";
  color: #28a745;
  font-weight: bold;
}

</style>
