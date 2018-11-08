<template>
  <div class="items mx-auto col-md-6 col-xs-12">
    <div class="item py-2" v-for="item of responseData" :key="item.id">
      <h4>{{item.name}}</h4>
      <a class="d-block" href="'mailo':item.email`">{{item.email}}</a>
      <i>{{item.body}}</i>
    </div>
  </div>
</template>
<script lang="ts" src="./index.ts"></script>
<style lang="scss" scoped src="./index.scss"></style>
