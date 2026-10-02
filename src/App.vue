<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
    <MobileCtaBar />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import MobileCtaBar from './components/MobileCtaBar.vue'
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

@media (max-width: 768px) {
  #app .footer {
    padding-bottom: calc(2rem + 76px + env(safe-area-inset-bottom));
  }
}
</style>
