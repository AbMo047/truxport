<template>
  <section class="section not-found">
    <div class="container text-center">
      <h1>Pagina Niet Gevonden</h1>
      <p>De pagina die u zoekt bestaat niet (meer) of is verplaatst.</p>
      <div class="hero-buttons">
        <router-link to="/" class="btn btn-primary">Terug Naar Home</router-link>
        <router-link to="/contact" class="btn btn-secondary">Neem Contact Op</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  padding: 6rem 0;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}
</style>
