<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>🚛 TruxPort</h3>
          <p>Professioneel vrachtwagen transport en logistieke diensten. Betrouwbaar, snel en efficiënt.</p>
        </div>
        
        <div class="footer-section">
          <h3>Snelle Links</h3>
          <router-link to="/">Home</router-link>
          <router-link to="/diensten">Onze Diensten</router-link>
          <router-link to="/vrachtwagens">Onze Vrachtwagens</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/over-ons">Over Ons</router-link>
        </div>
        
        <div class="footer-section">
          <h3>Contact Info</h3>
          <a href="tel:+3234567890">📞 +32 3 456 78 90</a>
          <a href="mailto:info@truxport.be">✉️ info@truxport.be</a>
          <p>📍 Noorderlaan 123, 2030 Antwerpen</p>
        </div>
        
        <div class="footer-section">
          <h3>Openingstijden</h3>
          <p>Maandag - Vrijdag: 08:00 - 18:00</p>
          <p>Zaterdag: 09:00 - 16:00</p>
          <p>Zondag: Gesloten</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 TruxPort. Alle rechten voorbehouden.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component - geen extra logica nodig
</script>
