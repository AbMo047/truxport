<template>
  <section class="section trust-section">
    <div class="container">
      <div class="section-title">
        <h2>Waarom Bedrijven Ons Vertrouwen</h2>
        <p>Geverifieerde certificeringen en garanties, geen loze beloftes</p>
      </div>

      <div class="grid grid-4 trust-grid">
        <div class="card text-center">
          <div class="trust-icon">🏆</div>
          <h3>ISO 9001 & ISO 14001</h3>
          <p>Gecertificeerd kwaliteits- en milieumanagement</p>
        </div>

        <div class="card text-center">
          <div class="trust-icon">⚠️</div>
          <h3>ADR Gecertificeerd</h3>
          <p>Erkend voor transport van gevaarlijke goederen</p>
        </div>

        <div class="card text-center">
          <div class="trust-icon">🛡️</div>
          <h3>Volledig Verzekerd</h3>
          <p>Uw lading is tijdens elk transport gedekt</p>
        </div>

        <div class="card text-center">
          <div class="trust-icon">🕒</div>
          <h3>24/7 Spoedlijn</h3>
          <p>Altijd bereikbaar voor dringende transporten</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-grid {
  margin-top: 0;
}

.trust-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.trust-section h3 {
  color: var(--navy);
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}

.trust-section .card p {
  color: var(--text-muted);
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .trust-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
