
<template lang="html">
<!-- <div class="page col-md-3">
  <h1>{{msg}}</h1>
  <div>
    <button class="waves-effect waves-light btn" v-on:click="incrementValue(1)">Increment Value</button><span class="new badge">{{value}}</span>
  </div>
</div> -->
  <!-- <div className="main-content d-flex flex-column"> -->
    <div class="w-100 d-flex flex-column align-items-center">
      <img class="vue-icon" alt="logo" src="../../assets/logo.svg" />
      <h1 class="text-center">Hello World</h1>
      <button class="fetch-btn py-1 px-4" :disabled="false" v-on:click="getData">get data</button>
      <spinner></spinner>
      <data-items :responseData="[]"></data-items>
      <!-- {isFetching ? (
        <Spinner />
      ) :
        (responceData && <Data {...this.props} />)
      } -->
    </div>
  <!-- </div> -->
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
