<template>
  <div class="card-slider" :style="{ '--per-view': perView }">
    <button
      v-if="slideCount > visibleCount"
      class="slider-arrow slider-prev"
      type="button"
      aria-label="Vorige"
      :disabled="activeIndex === 0"
      @click="scrollTo(activeIndex - 1)"
    >&#8249;</button>

    <div ref="track" class="slider-track" @scroll.passive="onScroll">
      <slot />
    </div>

    <button
      v-if="slideCount > visibleCount"
      class="slider-arrow slider-next"
      type="button"
      aria-label="Volgende"
      :disabled="activeIndex >= slideCount - visibleCount"
      @click="scrollTo(activeIndex + 1)"
    >&#8250;</button>

    <div v-if="slideCount > visibleCount" class="slider-dots">
      <button
        v-for="i in slideCount"
        :key="i"
        type="button"
        class="slider-dot"
        :class="{ active: i - 1 >= activeIndex && i - 1 < activeIndex + visibleCount }"
        :aria-label="`Ga naar slide ${i}`"
        @click="scrollTo(i - 1)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

withDefaults(defineProps<{ perView?: number }>(), { perView: 3 })

const track = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const visibleCount = ref(1)
const slideCount = ref(0)

function slideWidth() {
  const el = track.value
  const first = el?.children[0] as HTMLElement | undefined
  if (!el || !first) return 0
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0
  return first.offsetWidth + gap
}

function onScroll() {
  const el = track.value
  const width = slideWidth()
  if (!el || !width) return
  activeIndex.value = Math.round(el.scrollLeft / width)
}

function measure() {
  const el = track.value
  const width = slideWidth()
  if (!el || !width) return
  slideCount.value = el.children.length
  visibleCount.value = Math.max(1, Math.round(el.clientWidth / width))
  onScroll()
}

function scrollTo(index: number) {
  track.value?.scrollTo({ left: index * slideWidth(), behavior: 'smooth' })
}

onMounted(() => {
  measure()
  window.addEventListener('resize', measure)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', measure)
})
</script>

<style scoped>
.card-slider {
  position: relative;
}

.slider-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0.5rem 0.25rem 1.5rem;
  scrollbar-width: none;
}

.slider-track::-webkit-scrollbar {
  display: none;
}

.slider-track > :slotted(*) {
  flex: 0 0 calc((100% - (var(--per-view) - 1) * 1.5rem) / var(--per-view));
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
}

.slider-arrow {
  position: absolute;
  top: calc(50% - 1rem);
  transform: translateY(-50%);
  z-index: 2;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--white);
  color: var(--navy);
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(15, 41, 66, 0.12);
  transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
}

.slider-arrow:hover:not(:disabled) {
  background: var(--orange);
  border-color: var(--orange);
  color: var(--white);
}

.slider-arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.slider-prev {
  left: -24px;
}

.slider-next {
  right: -24px;
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.slider-dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--border);
  cursor: pointer;
  transition: background 0.2s ease;
}

.slider-dot.active {
  background: var(--orange);
}

@media (max-width: 1280px) {
  .slider-prev {
    left: -8px;
  }

  .slider-next {
    right: -8px;
  }
}

@media (max-width: 1024px) {
  .slider-track > :slotted(*) {
    flex-basis: calc((100% - 1.5rem) / 2);
  }
}

@media (max-width: 768px) {
  .slider-track > :slotted(*) {
    flex-basis: 85%;
  }

  .slider-arrow {
    display: none;
  }
}
</style>
