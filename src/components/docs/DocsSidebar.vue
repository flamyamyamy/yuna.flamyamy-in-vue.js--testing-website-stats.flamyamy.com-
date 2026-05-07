<template>
  <aside class="sidebar">

    <h2 class="sidebar-title">📚 Docs</h2>

    <ul class="sidebar-list">
      <li
        v-for="category in commandData"
        :key="category.title"
      >
        <router-link
          :to="`/docs/${slug(category.title)}`"
          class="link"
          :class="{ active: active?.title === category.title }"
          @mouseenter="hovered = category"
          @mouseleave="hovered = null"
        >
          <span class="icon">{{ category.emoji }}</span>
          {{ category.title }}
        </router-link>
      </li>
    </ul>

    <!-- Hover Preview -->
    <div v-if="hovered" class="preview">
      <h4>{{ hovered.emoji }} {{ hovered.title }}</h4>
      <p>{{ hovered.description }}</p>

      <div class="mini">
        <code v-for="c in hovered.commands.slice(0,2)" :key="c.name">
          {{ c.name }}
        </code>
      </div>
    </div>

  </aside>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  commandData: Array,
  active: Object
})

const hovered = ref(null)

const slug = (text) =>
  text.toLowerCase().replace(/ /g, '-')
</script>