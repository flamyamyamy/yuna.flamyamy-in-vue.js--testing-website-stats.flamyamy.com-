<template>
  <main class="home-page">
    <section class="hero">
      <!-- floating ambient dots instead of the ugly blob -->
      <div class="hero-bg-dots" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <h1 class="glitch">Yuna</h1>
          <p class="hero-subtitle">Built with love, fueled by passion.</p>

          <div class="terminal-line">
            <span class="prompt">$</span>
            <span class="terminal-text">{{ displayText }}</span>
          </div>

          <p class="hero-description">
            Yuna brings moderation, utility tools, leveling, and automations
            together for communities that want to feel safer, more fun, and
            more connected.
          </p>

          <div class="hero-actions">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1485836706883043478&permissions=0&scope=bot%20applications.commands"
              class="btn btn-add"
              target="_blank"
              rel="noopener"
            >Add Bot</a>
            <a
              href="https://discord.gg/RjTFsjRT7y"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener"
            >Discord</a>
            <router-link to="/documentation" class="btn btn-tertiary">
              Documentation
            </router-link>
          </div>
        </div>

        <div class="hero-image-wrapper">
          <img
            src="https://i.imgur.com/etR7f4F.png"
            alt="Yuna character illustration"
            class="hero-image"
            width="420"
            height="460"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section class="section section-tight">
      <h2 class="section-title">// Core Features</h2>
      <div class="grid-3">
        <div class="card">
          <h3>🛡️ Moderation</h3>
          <p>Scalable moderation systems with advanced staff tooling and automation.</p>
        </div>
        <div class="card">
          <h3>🏆 Leveling</h3>
          <p>Community XP, rank cards, leaderboards and rich progression systems.</p>
        </div>
        <div class="card">
          <h3>🌸 Community</h3>
          <p>Engagement features designed to keep members active, welcomed, and rewarded.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  'Moderation. Tickets. And much more.',
  'Moderation. Tickets. Built for you.',
  'Multilingual. Modular. Always evolving.',
  'Moderation. Games. And much more.',
]

const displayText = ref('')
const currentPhraseIndex = ref(0)
const typing = ref(true)
let intervalId = null
let pauseTimeoutId = null

const getNextPhraseIndex = () => {
  let next = Math.floor(Math.random() * phrases.length)
  while (next === currentPhraseIndex.value && phrases.length > 1) {
    next = Math.floor(Math.random() * phrases.length)
  }
  return next
}

const startTyping = () => {
  const phrase = phrases[currentPhraseIndex.value]
  if (typing.value) {
    if (displayText.value.length < phrase.length) {
      displayText.value += phrase[displayText.value.length]
    } else {
      typing.value = false
      clearInterval(intervalId)
      pauseTimeoutId = setTimeout(() => {
        intervalId = setInterval(startTyping, 38)
      }, 1400)
    }
  } else {
    if (displayText.value.length > 0) {
      displayText.value = displayText.value.slice(0, -1)
    } else {
      currentPhraseIndex.value = getNextPhraseIndex()
      typing.value = true
      clearInterval(intervalId)
      intervalId = setInterval(startTyping, 68)
    }
  }
}

onMounted(() => { intervalId = setInterval(startTyping, 68) })
onUnmounted(() => { clearInterval(intervalId); clearTimeout(pauseTimeoutId) })
</script>
