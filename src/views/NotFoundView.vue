<template>
  <main style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: calc(100vh - 68px); text-align: center; padding: 2rem;">
    <p style="font-size: 6rem; font-weight: 900; color: transparent; background: linear-gradient(135deg, #f9c8d8, #f4a8c0); -webkit-background-clip: text; background-clip: text; line-height: 1; margin-bottom: 1rem;">404</p>
    <p style="color: rgba(245,240,248,0.65); font-size: 1.05rem; max-width: 38ch; line-height: 1.75; margin-bottom: 2rem;">
      This page doesn't exist — or maybe it never did. 🌸
    </p>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;">
      <router-link to="/" class="btn btn-add">Go Home</router-link>
      <router-link to="/documentation" class="btn btn-secondary">Documentation</router-link>
    </div>
  </main>
</template>
