<script setup lang="ts">
import LogoutComponent from './components/LogoutComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
</script>

<template>
    <div id="app" class="content-wrapper">
        <HeaderComponent />
        <MainComponent />
    </div>
</template>

<style scoped>
.content-wrapper {
  margin: 48px; /* 中央揃え */
}
</style>