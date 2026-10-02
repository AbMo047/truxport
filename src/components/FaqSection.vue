<template>
  <section class="section section-alt">
    <div class="container">
      <div class="section-title">
        <h2>Veelgestelde Vragen</h2>
        <p>Snel een antwoord op de meest gestelde vragen over ons transport</p>
      </div>

      <div class="faq-list">
        <details v-for="faq in faqs" :key="faq.question" class="faq-item">
          <summary>{{ faq.question }}</summary>
          <p>{{ faq.answer }}</p>
        </details>
      </div>

      <p class="faq-more">
        Staat uw vraag er niet tussen?
        <router-link to="/contact">Neem contact met ons op</router-link>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const faqs = [
  {
    question: 'Vervoeren jullie gevaarlijke goederen (ADR)?',
    answer: 'Ja. Wij verzorgen nationaal en internationaal ADR transport volgens de geldende ADR regelgeving, inclusief ondersteuning bij transportdocumentatie en etikettering.'
  },
  {
    question: 'Hoe snel kunnen jullie een zending leveren?',
    answer: 'Voor dringende zendingen bieden wij express- en sneltransport aan, met same day en next day levering waar mogelijk. Neem contact op met uw planning en bestemming, dan bekijken wij wat haalbaar is.'
  },
  {
    question: 'Naar welke landen rijden jullie?',
    answer: 'Wij rijden in heel België en vervoeren goederen vanuit België naar bestemmingen in heel Europa, zowel deelladingen als volledige ladingen.'
  },
  {
    question: 'Kan ik ook maar één pallet laten vervoeren?',
    answer: 'Zeker. Wij vervoeren van één pallet tot meerdere palletzendingen, zowel europallets als industriepallets, nationaal en internationaal.'
  },
  {
    question: 'Wat kost een transport?',
    answer: 'De prijs hangt af van de lading, de afstand en de timing. Vraag een vrijblijvende offerte aan via ons contactformulier of telefonisch, dan ontvangt u een prijs op maat.'
  },
  {
    question: 'Kunnen jullie goederen ook opslaan?',
    answer: 'Ja. Wij bieden tijdelijke en langdurige opslag, overslag tussen voertuigen en de combinatie met verder nationaal of internationaal transport.'
  },
  {
    question: 'Kan ik mijn zending volgen?',
    answer: 'Ja. U krijgt duidelijke opvolging van ophaling tot levering, met actuele statusinformatie tijdens het transport.'
  },
  {
    question: 'Helpen jullie met douanedocumenten?',
    answer: 'Wij ondersteunen bij douanedocumenten en formaliteiten voor internationale transporten, zodat uw zending correct en vlot verwerkt wordt.'
  }
]
</script>

<style scoped>
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.faq-item[open] {
  border-color: var(--orange);
}

.faq-item summary {
  list-style: none;
  cursor: pointer;
  padding: 1.1rem 3rem 1.1rem 1.5rem;
  font-weight: 700;
  color: var(--navy);
  position: relative;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--orange);
}

.faq-item[open] summary::after {
  content: '−';
}

.faq-item p {
  padding: 0 1.5rem 1.25rem;
  margin: 0;
  color: var(--text-muted);
}

.faq-more {
  text-align: center;
  margin-top: 2rem;
  color: var(--text-muted);
}

.faq-more a {
  color: var(--orange-dark);
  font-weight: 700;
}
</style>
