<template>
  <section class="section trust-section">
    <div class="container">
      <p class="trust-label">Vertrouwd door bedrijven zoals</p>
      <div class="logo-strip">
        <span class="client-logo">Delcroix Interieur</span>
        <span class="client-logo">NoordChemie Group</span>
        <span class="client-logo">Verlinde Foodservice</span>
        <span class="client-logo">PortLogix Antwerpen</span>
      </div>

      <div class="grid grid-2 testimonial-grid">
        <div class="card testimonial-card">
          <p class="quote">"TruxPort is al drie jaar onze vaste partner voor palletvervoer naar Duitsland. Altijd op tijd, altijd correct afgeleverd."</p>
          <div class="author">
            <strong>Sofie Van Herck</strong>
            <span>Logistiek Manager, Verlinde Foodservice</span>
          </div>
        </div>

        <div class="card testimonial-card">
          <p class="quote">"Voor onze ADR-transporten vertrouwen we volledig op TruxPort. Professioneel, gecertificeerd en nooit een probleem."</p>
          <div class="author">
            <strong>Kristof Dhondt</strong>
            <span>Operations Director, NoordChemie Group</span>
          </div>
        </div>

        <div class="card testimonial-card">
          <p class="quote">"De scheepsbevoorrading verloopt vlekkeloos, zelfs op korte termijn. Een partner waar we blindelings op kunnen rekenen."</p>
          <div class="author">
            <strong>Ahmed El Amrani</strong>
            <span>Havenmanager, PortLogix Antwerpen</span>
          </div>
        </div>

        <div class="card testimonial-card">
          <p class="quote">"Van meubeltransport tot volledige laadruimtes: TruxPort denkt met ons mee en levert altijd kwaliteit."</p>
          <div class="author">
            <strong>Anneleen Peeters</strong>
            <span>Inkoopmanager, Delcroix Interieur</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-label {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.logo-strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border);
}

.client-logo {
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--navy);
  opacity: 0.55;
  letter-spacing: 0.3px;
}

.testimonial-grid {
  margin-top: 0;
}

.testimonial-card .quote {
  color: var(--text);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-card .author {
  display: flex;
  flex-direction: column;
}

.testimonial-card .author strong {
  color: var(--navy);
}

.testimonial-card .author span {
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .logo-strip {
    gap: 1.5rem;
  }

  .client-logo {
    font-size: 1rem;
  }
}
</style>
