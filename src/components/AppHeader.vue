<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-container">
        <router-link to="/" class="logo">
          🚛 TruxPort
        </router-link>
        
        <ul class="nav-menu" :class="{ active: isMenuOpen }">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/diensten" @click="closeMenu">Onze Diensten</router-link>
          <router-link to="/vrachtwagens" @click="closeMenu">Onze Vrachtwagens</router-link>
          <router-link to="/over-ons" @click="closeMenu">Over Ons</router-link>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
        </ul>
        
        <button class="nav-toggle" @click="toggleMenu" aria-label="Toggle menu">
          ☰
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
