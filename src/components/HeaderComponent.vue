<script setup lang="ts">
  import logo from '@/assets/images/logo.png';
</script>


<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/"><img :src="logo" alt="outpet"/></a>
        </div>
        <div>
            <a class="navbar-text navbar-right" href="#">setting</a>
        </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    background-color: #CEBEB9;
}
.navbar-brand img {
  width: 70%;
}
.navbar-text {
  color: #212529;
  font-size: 1.4rem;
}
</style>
