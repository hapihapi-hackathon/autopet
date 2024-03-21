<script setup lang="ts">
import LoginComponent from './components/LoginComponent.vue';
import HeaderCompoent2 from './components/HeaderComponent2.vue';
</script>

<template>
    <div id="app" class="content-wrapper">
        <HeaderCompoent2 />
        <LoginComponent />
    </div>
</template>

<style scoped>
.content-wrapper {
  margin: 48px; /* 中央揃え */
}
</style>