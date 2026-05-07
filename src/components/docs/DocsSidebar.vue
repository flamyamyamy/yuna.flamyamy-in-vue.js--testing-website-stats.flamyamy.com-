<template>
  <aside class="sidebar" aria-label="Documentation navigation">
    <h2 class="sidebar-title">Documentation</h2>
    <ul class="sidebar-list" role="list">
      <li v-for="category in commandData" :key="category.title">
        <router-link
          :to="`/documentation/${slugify(category.title)}`"
          class="link"
          :class="{ active: active?.title === category.title }"
        >
          <span class="icon" aria-hidden="true">{{ category.emoji }}</span>
          {{ category.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { slugify } from '@/utils/slugify.js'

defineProps({
  commandData: Array,
  active: Object
})
</script>
