<template>
  <div id="app">
    <main class="main-content d-flex flex-column">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
