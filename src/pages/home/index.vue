
<template lang="html">
    <div class="w-100 d-flex flex-column align-items-center">
      <img class="vue-icon" alt="logo" src="../../assets/logo.svg" />
      <h1 class="text-center">Hello World</h1>
      <button class="fetch-btn py-1 px-4" :disabled="false" v-on:click="getData">get data</button>
      <spinner v-if="isLoading"></spinner>
      <data-items v-if="!isLoading && responseData" :responseData="responseData"></data-items>
    </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
