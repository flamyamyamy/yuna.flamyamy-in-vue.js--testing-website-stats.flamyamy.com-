<template>
  <div class="wiki-layout">
    <DocsSidebar :commandData="commandData" :active="activeCategory" />

    <main class="content">
      <section v-if="activeCategory" class="fade-in">
        <h1 class="title">{{ activeCategory.emoji }} {{ activeCategory.title }}</h1>
        <p class="desc">{{ activeCategory.description }}</p>

        <div class="commands-grid">
          <div v-for="cmd in activeCategory.commands" :key="cmd.name" class="cmd-card">
            <span class="cmd-name">{{ cmd.name }}</span>
            <p class="cmd-text">{{ cmd.text }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { commandData } from '@/data/commands.js'
import DocsSidebar from '@/components/docs/DocsSidebar.vue'

const route = useRoute()
const slugify = (text) => text.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');

const activeCategory = computed(() => {
  const param = route.params.category;
  if (!param) return commandData[0];
  return commandData.find(c => slugify(c.title) === param) || commandData[0];
})
</script>