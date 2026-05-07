<template>
  <main class="content">

    <section v-if="category">

      <h1 class="title">
        {{ category.emoji }} {{ category.title }}
      </h1>

      <p class="desc">{{ category.description }}</p>

      <div class="commands">
        <div
          v-for="cmd in category.commands"
          :key="cmd.name"
          class="cmd"
        >
          <span class="name">{{ cmd.name }}</span>
          <p>{{ cmd.text }}</p>
        </div>
      </div>

    </section>

  </main>
</template>

<script setup>
defineProps({
  category: Object
})
</script>