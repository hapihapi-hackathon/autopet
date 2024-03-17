<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue'
import MainComponent from './components/MainComponent.vue'
import GetCommitCount from './components/GetCommitCount.vue'
</script>

<template>
  <div id="app" class="content-wrapper">
    <HeaderComponent />
    <MainComponent />
    <GetCommitCount />
  </div>
</template>

<style scoped>
.content-wrapper {
  margin: 48px; /* 中央揃え */
}
</style>
