<script setup lang="ts">
import {computed, ref} from 'vue';
import imageUrl1 from '@/assets/images/01.png';
import imageUrl2 from '@/assets/images/02.png';
import imageUrl3 from '@/assets/images/03.png';
import imageUrl4 from '@/assets/images/04.png';
import imageUrl5 from '@/assets/images/05.png';

const username = ref('モナ'); // ダミーデータ
const commitNumber = ref<number>(111); // ダミーデータ

const petImage = computed<string>(() => {
    if (commitNumber.value <= 25) {
        return imageUrl1;
    } else if (commitNumber.value <= 50) {
        return imageUrl2;
    } else if (commitNumber.value <= 75) {
        return imageUrl3;
    } else if (commitNumber.value <= 100) {
        return imageUrl4;
    } else {
        return imageUrl5;
    }
});
</script>

<template>
    <main class="main-content">
      <h1>{{ username }}</h1>
      <img :src="petImage" alt="Pet Image" class="pet-image"/>
    </main>
</template>

<style scoped>
main {
  background-color: #CEBEB9;
  margin-top: 32px;
}
</style>
