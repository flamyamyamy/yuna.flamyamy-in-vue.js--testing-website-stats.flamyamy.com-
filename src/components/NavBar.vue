<template>
  <nav class="nav">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">Yuna</router-link>

      <button
        class="hamburger"
        @click="isMenuOpen = !isMenuOpen"
        :class="{ active: isMenuOpen }"
        :aria-expanded="isMenuOpen.toString()"
        aria-label="Toggle navigation"
      >
        <span></span><span></span><span></span>
      </button>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/documentation" @click="closeMenu">Documentation</router-link>
        <router-link to="/legal" @click="closeMenu">Legal</router-link>
        <router-link to="/license" @click="closeMenu">License</router-link>
        <a
          href="https://top.gg/bot/1485836706883043478/vote"
          target="_blank"
          rel="noopener"
          @click="closeMenu"
        >Vote</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
const closeMenu = () => { isMenuOpen.value = false }
</script>
