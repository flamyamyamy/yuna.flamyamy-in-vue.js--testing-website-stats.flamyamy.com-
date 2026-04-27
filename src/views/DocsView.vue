<template>
  <section class="section">
    <h1 class="section-title">// Command Directory</h1>

    <div class="grid-1">
      <div
        v-for="category in commandData"
        :key="category.title"
        class="card doc-card"
      >
        <h3>{{ category.emoji }} {{ category.title }}</h3>
        <p class="doc-desc">{{ category.description }}</p>

        <div class="command-list">
          <div
            v-for="cmd in category.commands"
            :key="cmd.name"
            class="command-item"
          >
            <span class="prompt">{{ cmd.name }}</span>
            <p v-html="cmd.text"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { commandData } from '@/data/commands.js'
</script>