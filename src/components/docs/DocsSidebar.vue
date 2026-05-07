<template>
  <aside class="sidebar">
    <h2 class="sidebar-title">Documentation</h2>
    <ul class="sidebar-list">
      <li v-for="category in commandData" :key="category.title">
        <router-link
          :to="`/documentation/${slug(category.title)}`"
          class="link"
          :class="{ active: active?.title === category.title }"
        >
          <span class="icon">{{ category.emoji }}</span>
          {{ category.title }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
defineProps({
  commandData: Array,
  active: Object
})

const slug = (text) => text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
</script>