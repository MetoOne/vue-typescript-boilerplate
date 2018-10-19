<template>
  <div class="items mx-auto col-md-6 col-xs-12">
    <!-- {responceData && responceData.map((data, i) => {
      const href = `mailo:${data.email}`;
      return ( -->
    <div class="item py-2" v:for="data of responceData">
      <h4>{{data.name}}</h4>
      <a class="d-block" href="'mailo':data.email`">{{data.email}}</a>
      <i>{{data.body}}</i>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
