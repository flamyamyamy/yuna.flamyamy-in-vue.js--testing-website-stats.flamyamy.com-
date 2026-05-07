<template>
  <div class="wiki-layout">
    <DocsSidebar
      :commandData="commandData"
      :active="activeCategory"
    />

    <DocsContent :category="activeCategory" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { commandData } from '@/data/commands.js'

import DocsSidebar from '@/components/docs/DocsSidebar.vue'
import DocsContent from '@/components/docs/DocsContent.vue'

const route = useRoute()

const activeCategory = computed(() => {
  return (
    commandData.find(
      (c) => c.title.toLowerCase().includes(route.params.category)
    ) || commandData[0]
  )
})
</script>