<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Contact</h1>
        <p>Neem contact met ons op voor een vrijblijvende offerte of meer informatie</p>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <!-- Contact Form -->
          <div class="card">
            <h2>Offerte Aanvragen</h2>
            <p>Vul het formulier in en wij nemen zo snel mogelijk contact met u op.</p>
            
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Naam *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  placeholder="Uw volledige naam"
                >
              </div>
              
              <div class="form-group">
                <label for="company">Bedrijf</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="form.company"
                  placeholder="Bedrijfsnaam (optioneel)"
                >
              </div>
              
              <div class="form-group">
                <label for="email">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  placeholder="uw.email@bedrijf.be"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Telefoon *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  required
                  placeholder="+32 470 12 34 56"
                >
              </div>
              
              <div class="form-group">
                <label for="service">Gewenste Dienst</label>
                <select id="service" v-model="form.service">
                  <option value="">Selecteer een dienst</option>
                  <option value="airfreight">✈️ Luchtvracht</option>
                  <option value="seafreight">🚢 Zeevracht</option>
                  <option value="international-road">🌍 Internationaal Wegtransport</option>
                  <option value="info-logistics">📊 Informatielogistiek</option>
                  <option value="pallet">📦 Palletvervoer</option>
                  <option value="volume">📏 Volumevervoer</option>
                  <option value="length">📐 Lengtevervoer</option>
                  <option value="urban">🏙️ Stedelijke Distributie</option>
                  <option value="adr">⚠️ ADR Transport</option>
                  <option value="other">Anders</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="from">Van (locatie)</label>
                <input 
                  type="text" 
                  id="from" 
                  v-model="form.from"
                  placeholder="Vertrekpunt"
                >
              </div>
              
              <div class="form-group">
                <label for="to">Naar (locatie)</label>
                <input 
                  type="text" 
                  id="to" 
                  v-model="form.to"
                  placeholder="Bestemming"
                >
              </div>
              
              <div class="form-group">
                <label for="weight">Gewicht (kg)</label>
                <input 
                  type="number" 
                  id="weight" 
                  v-model="form.weight"
                  placeholder="Geschat gewicht"
                >
              </div>
              
              <div class="form-group">
                <label for="date">Gewenste Datum</label>
                <input 
                  type="date" 
                  id="date" 
                  v-model="form.date"
                >
              </div>
              
              <div class="form-group">
                <label for="message">Bericht *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required
                  placeholder="Beschrijf uw transportbehoefte..."
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Verzenden...' : 'Verstuur Offerte Aanvraag' }}
              </button>

              <p v-if="submitError" class="form-error">
                Er ging iets mis bij het versturen. Probeer het opnieuw of bel ons rechtstreeks.
              </p>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div class="card">
            <h2>Contact Informatie</h2>
            <p>Bereik ons via telefoon, e-mail of bezoek ons op kantoor.</p>
            
            <div class="contact-info">
              <div class="contact-item">
                <h3>📞 Telefoon</h3>
                <p><strong>Hoofdkantoor:</strong><br><a href="tel:+3234567890">+32 3 456 78 90</a></p>
                <p><strong>24/7 Spoedlijn:</strong><br><a href="tel:+32470845712">+32 470 84 57 12</a></p>
              </div>

              <div class="contact-item">
                <h3>✉️ E-mail</h3>
          <p><strong>Algemeen:</strong><br><a href="mailto:info@truxport.be">info@truxport.be</a></p>
          <p><strong>Offertes:</strong><br><a href="mailto:offertes@truxport.be">offertes@truxport.be</a></p>
          <p><strong>Support:</strong><br><a href="mailto:support@truxport.be">support@truxport.be</a></p>
              </div>

              <div class="contact-item">
                <h3>📍 Adres</h3>
                <p><strong>Hoofdkantoor:</strong><br>
                Noorderlaan 123<br>
                2030 Antwerpen<br>
                België</p>
              </div>
              
              <div class="contact-item">
                <h3>🕒 Openingstijden</h3>
                <p><strong>Kantoor:</strong><br>
                Maandag - Vrijdag: 08:00 - 18:00<br>
                Zaterdag: 09:00 - 16:00<br>
                Zondag: Gesloten</p>
                <p><strong>Transport:</strong><br>
                24/7 beschikbaar</p>
              </div>
            </div>
            
            <div class="emergency-contact">
              <h3>🚨 Spoedtransport</h3>
              <p>Voor spoedtransporten buiten kantooruren:</p>
              <p><strong><a href="tel:+32470845712">+32 470 84 57 12</a></strong></p>
              <p>Wij zijn 24/7 beschikbaar voor spoedzendingen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-title">
          <h2>Onze Locatie</h2>
          <p>Bezoek ons op kantoor of bekijk onze locatie op de kaart</p>
        </div>
        
        <div class="map-container">
          <iframe
            class="map-embed"
            title="TruxPort locatie op de kaart"
            src="https://maps.google.com/maps?q=Noorderlaan%20123%2C%202030%20Antwerpen%2C%20Belgi%C3%AB&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="map-placeholder">
            <h3>📍 Noorderlaan 123, Antwerpen</h3>
            <p>Ons hoofdkantoor is gelegen in de Antwerpse havenzone, dichtbij de Ring en de E17/E19 voor snelle toegang tot heel België en Europa.</p>
            <div class="map-features">
              <div class="feature">
                <strong>Parkeren:</strong> Gratis parkeerplaatsen beschikbaar
              </div>
              <div class="feature">
                <strong>Openbaar Vervoer:</strong> Op de route van tram- en buslijnen richting de haven
              </div>
              <div class="feature">
                <strong>Toegankelijkheid:</strong> Volledig toegankelijk voor rolstoelgebruikers
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Veelgestelde Vragen</h2>
          <p>Antwoorden op de meest gestelde vragen</p>
        </div>
        
        <div class="faq-container">
          <div class="faq-item">
            <h3>Hoe snel kan ik een offerte ontvangen?</h3>
            <p>Wij streven ernaar om binnen 2 uur een offerte te sturen voor standaard transporten. Voor complexe transporten kan dit tot 24 uur duren.</p>
          </div>
          
          <div class="faq-item">
            <h3>Zijn jullie 24/7 beschikbaar?</h3>
            <p>Ja, wij zijn 24/7 beschikbaar voor spoedtransporten. Onze spoedlijn is altijd bereikbaar voor urgente zendingen.</p>
          </div>
          
          <div class="faq-item">
            <h3>Welke gebieden bedienen jullie?</h3>
            <p>Wij bedienen heel België en alle EU-landen. Voor lokale distributie richten wij ons op Antwerpen en omliggende regio's.</p>
          </div>
          
          <div class="faq-item">
            <h3>Zijn de vrachtwagens verzekerd?</h3>
            <p>Ja, alle onze vrachtwagens zijn volledig verzekerd. Wij bieden ook aanvullende verzekering voor uw goederen aan.</p>
          </div>
          
          <div class="faq-item">
            <h3>Kunnen jullie gevaarlijke stoffen vervoeren?</h3>
            <p>Ja, wij zijn ADR gecertificeerd voor het vervoer van gevaarlijke stoffen. Onze chauffeurs zijn speciaal opgeleid voor deze transporten.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const submitError = ref(false)

const form = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  from: '',
  to: '',
  weight: '',
  date: '',
  message: ''
})

const submitForm = async () => {
  isSubmitting.value = true
  submitError.value = false

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject: 'Nieuwe offerteaanvraag via truxport.be',
        from_name: form.name,
        ...form
      })
    })

    const result = await response.json()
    if (!result.success) {
      throw new Error(result.message ?? 'Verzenden mislukt')
    }

    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })

    alert('Bedankt voor uw offerte aanvraag! Wij nemen zo snel mogelijk contact met u op.')
  } catch {
    submitError.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form {
  margin-top: 1rem;
}

.form-error {
  margin-top: 1rem;
  margin-bottom: 0;
  color: #dc3545;
}

.contact-info {
  margin-top: 1rem;
}

.contact-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.contact-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.contact-item h3 {
  color: var(--navy);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-item p {
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}

.contact-item a {
  color: var(--navy);
  font-weight: 600;
  text-decoration: none;
}

.contact-item a:hover {
  color: var(--blue);
  text-decoration: underline;
}

.emergency-contact {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 2rem;
}

.emergency-contact h3 {
  color: #856404;
  margin-bottom: 0.5rem;
}

.emergency-contact p {
  color: #856404;
  margin-bottom: 0.5rem;
}

.emergency-contact a {
  color: #856404;
}

.map-container {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.map-embed {
  width: 100%;
  height: 350px;
  border: 0;
  display: block;
}

.map-placeholder {
  padding: 3rem;
  text-align: center;
  background: var(--bg);
}

.map-placeholder h3 {
  color: var(--navy);
  margin-bottom: 1rem;
}

.map-features {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.feature {
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.faq-item p {
  color: var(--text-muted);
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .map-features {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    margin-top: 0;
  }
}
</style>
