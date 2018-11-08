<template>
  <div id="app">
    <div class="main-content d-flex flex-column">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
