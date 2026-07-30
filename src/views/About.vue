<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Over Ons</h1>
        <p>Al meer dan 15 jaar uw betrouwbare partner voor professioneel vrachtwagentransport</p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="section">
      <div class="container">
        <div class="story-image">
          <img :src="warehouseImage" alt="Magazijn en overslag van TruxPort" loading="lazy" />
        </div>
        <div class="grid grid-2">
          <div>
            <h2>Ons Verhaal</h2>
            <p>TruxPort is in 2008 opgericht door Jan de Vries, een ervaren chauffeur met een droom: het leveren van betrouwbaar en professioneel transport voor bedrijven van alle groottes.</p>
            
            <p>Wat begon als een eenmansbedrijf met één vrachtwagen, is uitgegroeid tot een toonaangevende transportonderneming met meer dan 50 vrachtwagens en 75 medewerkers.</p>
            
            <p>Onze missie is simpel: het leveren van uitzonderlijke transportdiensten die voldoen aan de hoogste standaarden van veiligheid, betrouwbaarheid en klanttevredenheid.</p>
            
            <div class="values">
              <h3>Onze Waarden</h3>
              <ul>
                <li><strong>Betrouwbaarheid:</strong> Wij leveren wat wij beloven, altijd</li>
                <li><strong>Veiligheid:</strong> De veiligheid van onze chauffeurs en uw goederen staat voorop</li>
                <li><strong>Innovatie:</strong> Wij investeren continu in moderne technologie</li>
                <li><strong>Duurzaamheid:</strong> Milieuvriendelijk transport is onze verantwoordelijkheid</li>
                <li><strong>Klantgerichtheid:</strong> Uw tevredenheid is onze prioriteit</li>
              </ul>
            </div>
          </div>
          
          <div class="company-stats">
            <div class="stat-card">
              <h3>15+</h3>
              <p>Jaar Ervaring</p>
            </div>
            
            <div class="stat-card">
              <h3>50+</h3>
              <p>Vrachtwagens</p>
            </div>
            
            <div class="stat-card">
              <h3>75+</h3>
              <p>Medewerkers</p>
            </div>
            
            <div class="stat-card">
              <h3>500+</h3>
              <p>Tevreden Klanten</p>
            </div>
            
            <div class="stat-card">
              <h3>99%</h3>
              <p>Op Tijd Levering</p>
            </div>
            
            <div class="stat-card">
              <h3>24/7</h3>
              <p>Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Ons Team</h2>
          <p>Gedreven professionals die zorgen voor uitstekende service</p>
        </div>
        
        <div class="grid grid-3">
          <div class="card text-center">
            <div class="team-member">
              <img :src="teamJan" alt="Jan de Vries, directeur en oprichter van TruxPort" class="team-photo" loading="lazy" />
              <h3>Jan de Vries</h3>
              <p class="role">Directeur & Oprichter</p>
              <p>Met 20+ jaar ervaring in de transportsector heeft Jan TruxPort opgericht vanuit de overtuiging dat transport persoonlijk en betrouwbaar moet zijn.</p>
            </div>
          </div>

          <div class="card text-center">
            <div class="team-member">
              <img :src="teamMaria" alt="Maria van der Berg, operations manager bij TruxPort" class="team-photo" loading="lazy" />
              <h3>Maria van der Berg</h3>
              <p class="role">Operations Manager</p>
              <p>Maria zorgt ervoor dat alle transporten vlekkeloos verlopen. Haar aandacht voor detail en organisatievermogen zijn onmisbaar voor ons succes.</p>
            </div>
          </div>

          <div class="card text-center">
            <div class="team-member">
              <img :src="teamPiet" alt="Piet Jansen, hoofd chauffeurs bij TruxPort" class="team-photo" loading="lazy" />
              <h3>Piet Jansen</h3>
              <p class="role">Hoofd Chauffeurs</p>
              <p>Piet leidt ons team van ervaren chauffeurs en zorgt ervoor dat iedereen veilig en professioneel rijdt. Veiligheid staat bij hem altijd voorop.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History Timeline -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Onze Geschiedenis</h2>
          <p>Belangrijke mijlpalen in onze groei</p>
        </div>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">2008</div>
            <div class="timeline-content">
              <h3>Oprichting</h3>
              <p>TruxPort wordt opgericht door Jan de Vries met één vrachtwagen en een droom.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">2012</div>
            <div class="timeline-content">
              <h3>Eerste Uitbreiding</h3>
              <p>Uitbreiding naar 5 vrachtwagens en eerste internationale transporten naar Duitsland en Nederland.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">2015</div>
            <div class="timeline-content">
              <h3>Milieu Certificering</h3>
              <p>Alle vrachtwagens voldoen aan Euro 6 norm en eerste elektrische bestelwagen wordt toegevoegd.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">2018</div>
            <div class="timeline-content">
              <h3>Nieuwe Locatie</h3>
              <p>Verhuizing naar het huidige hoofdkantoor in de Antwerpse havenzone met moderne faciliteiten.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">2020</div>
            <div class="timeline-content">
              <h3>Digitalisering</h3>
              <p>Implementatie van GPS tracking, telematics en online klantportaal voor real-time monitoring.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">2023</div>
            <div class="timeline-content">
              <h3>Huidige Status</h3>
              <p>50+ vrachtwagens, 75+ medewerkers en service in heel Europa. Toonaangevend in duurzaam transport.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Certificeringen & Kwaliteit</h2>
          <p>Wij voldoen aan de hoogste standaarden in de transportsector</p>
        </div>
        
        <div class="cert-badges">
          <div class="cert-badge">
            <div class="cert-icon">🏆</div>
            <div class="cert-name">ISO 9001</div>
            <div class="cert-desc">Kwaliteitsmanagement</div>
          </div>

          <div class="cert-badge">
            <div class="cert-icon">🌱</div>
            <div class="cert-name">ISO 14001</div>
            <div class="cert-desc">Milieumanagement</div>
          </div>

          <div class="cert-badge">
            <div class="cert-icon">⚠️</div>
            <div class="cert-name">ADR 2023</div>
            <div class="cert-desc">Gevaarlijke stoffen</div>
          </div>

          <div class="cert-badge">
            <div class="cert-icon">🛡️</div>
            <div class="cert-name">VCA*</div>
            <div class="cert-desc">Veilig werken</div>
          </div>

          <div class="cert-badge">
            <div class="cert-icon">🚛</div>
            <div class="cert-name">AETR</div>
            <div class="cert-desc">Rijdend personeel</div>
          </div>

          <div class="cert-badge">
            <div class="cert-icon">📋</div>
            <div class="cert-name">ATP</div>
            <div class="cert-desc">Bederfelijke goederen</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <div class="card">
            <h2>Onze Missie</h2>
            <p>Wij streven ernaar om de meest betrouwbare en efficiënte transportpartner te zijn door:</p>
            <ul>
              <li>Uitzonderlijke klantenservice te leveren</li>
              <li>Veiligheid en betrouwbaarheid voorop te stellen</li>
              <li>Te investeren in moderne technologie en duurzaamheid</li>
              <li>Onze medewerkers te ondersteunen en te ontwikkelen</li>
              <li>Continue verbetering van onze processen</li>
            </ul>
          </div>
          
          <div class="card">
            <h2>Onze Visie</h2>
            <p>Wij willen de toonaangevende transportonderneming zijn die:</p>
            <ul>
              <li>De standaard zet voor duurzaam transport</li>
              <li>Innovatie gebruikt om klantwaarde te creëren</li>
              <li>Een inspirerende werkplek biedt voor onze medewerkers</li>
              <li>Positief bijdraagt aan de gemeenschap</li>
              <li>De toekomst van transport vormgeeft</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Sustainability Score -->
    <section class="section section-alt">
      <div class="container">
        <div class="sustainability-box">
          <div class="score-circle">8.2<span>/10</span></div>
          <div>
            <h3>TruxPort Duurzaamheidsscore</h3>
            <p>Onze eigen duurzaamheidsscore, gebaseerd op vlootvernieuwing, brandstofverbruik en CO₂-uitstoot per rit. Elk jaar opnieuw gemeten en gepubliceerd, zodat u onze vooruitgang kunt volgen.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Driver Recruitment -->
    <section id="vacatures" class="section recruitment-section">
      <div class="container">
        <div class="recruitment-box">
          <h2>Word Chauffeur bij TruxPort</h2>
          <p>Wij zijn steeds op zoek naar ervaren en gemotiveerde chauffeurs om ons team te versterken. Modern materieel, vaste routes mogelijk en een team dat voor elkaar klaarstaat.</p>
          <router-link to="/contact" class="btn btn-primary">Solliciteer Nu</router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-band">
      <div class="container text-center">
        <h2>Word Onderdeel van Ons Verhaal</h2>
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          Laten we samenwerken aan uw transportbehoeften. Neem contact met ons op voor een vrijblijvend gesprek.
        </p>
        <router-link to="/contact" class="btn btn-primary">Neem Contact Op</router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import warehouseImage from '../assets/images/about-warehouse.jpg'
import teamJan from '../assets/images/team-jan.jpg'
import teamMaria from '../assets/images/team-maria.jpg'
import teamPiet from '../assets/images/team-piet.jpg'
</script>

<style scoped>
.story-image {
  margin-bottom: 3rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.story-image img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}

.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  display: block;
  border: 3px solid rgba(255, 140, 0, 0.4);
}

.values {
  margin-top: 2rem;
  background: var(--bg);
  padding: 1.5rem;
  border-radius: 8px;
}

.values h3 {
  color: var(--navy);
  margin-bottom: 1rem;
}

.values ul {
  list-style: none;
  padding: 0;
}

.values li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
}

.values li:last-child {
  border-bottom: none;
}

.company-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  font-size: 2rem;
  color: var(--orange);
  margin-bottom: 0.5rem;
}

.stat-card p {
  color: var(--text-muted);
  margin: 0;
}

.team-member h3 {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.role {
  color: var(--orange);
  font-weight: 500;
  margin-bottom: 1rem;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--orange);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-year {
  background: var(--orange);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  white-space: nowrap;
  z-index: 1;
  position: relative;
}

.timeline-item:nth-child(odd) .timeline-year {
  margin-right: 2rem;
}

.timeline-item:nth-child(even) .timeline-year {
  margin-left: 2rem;
}

.timeline-content {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  max-width: 45%;
}

.timeline-content h3 {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--text-muted);
  margin: 0;
}

.cert-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.cert-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  padding: 1.5rem 1rem;
  background: white;
  border-radius: 50%;
  aspect-ratio: 1;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 2px solid var(--orange);
  text-align: center;
}

.cert-icon {
  font-size: 1.8rem;
  margin-bottom: 0.4rem;
}

.cert-name {
  font-weight: 700;
  color: var(--navy);
  font-size: 0.95rem;
}

.cert-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
}

.sustainability-box {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  max-width: 800px;
  margin: 0 auto;
}

.score-circle {
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange), var(--orange-dark));
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
}

.score-circle span {
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 0.15rem;
}

.sustainability-box h3 {
  margin-bottom: 0.5rem;
}

.sustainability-box p {
  margin-bottom: 0;
}

.recruitment-section {
  background: var(--navy);
}

.recruitment-box {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.recruitment-box h2 {
  color: white;
}

.recruitment-box p {
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .sustainability-box {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .company-stats {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column;
    padding-left: 3rem;
  }
  
  .timeline-year {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
  }
  
  .timeline-content {
    max-width: 100%;
    margin-top: 1rem;
  }
}
</style>
