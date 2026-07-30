<template>
  <div class="star-rating">
    <span class="stars" aria-hidden="true">
      <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= Math.round(rating) }">★</span>
    </span>
    <span class="rating-text">{{ rating.toFixed(1) }} ({{ count }} beoordelingen)</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  rating: number
  count: number
}>()
</script>

<style scoped>
.star-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.stars {
  color: var(--border);
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.star.filled {
  color: var(--orange);
}

.rating-text {
  font-size: 0.85rem;
  color: var(--text-muted);
}
</style>
