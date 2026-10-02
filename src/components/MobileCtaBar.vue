<template>
  <div v-if="route.path !== '/contact'" class="mobile-cta-bar">
    <a href="tel:+3234567890" class="cta-call">📞 Bel ons</a>
    <router-link to="/contact" class="cta-quote">Offerte aanvragen</router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.mobile-cta-bar {
  display: none;
}

@media (max-width: 768px) {
  .mobile-cta-bar {
    display: flex;
    gap: 0.75rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    padding: 0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom));
    background: var(--white);
    border-top: 1px solid var(--border);
    box-shadow: 0 -4px 16px rgba(15, 41, 66, 0.1);
  }

  .mobile-cta-bar a {
    flex: 1;
    text-align: center;
    padding: 0.8rem 0.5rem;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
  }

  .cta-call {
    color: var(--navy);
    border: 2px solid var(--navy);
  }

  .cta-quote {
    color: var(--white);
    background: var(--orange);
    border: 2px solid var(--orange);
  }
}
</style>
