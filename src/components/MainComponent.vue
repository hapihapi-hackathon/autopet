<script setup lang="ts">
import {computed, ref} from 'vue';
import imageUrl1 from '@/assets/images/01.png'; // 0~9
import imageUrl2 from '@/assets/images/02.png'; // 10~29
import imageUrl3 from '@/assets/images/03.png'; // 30~49
import imageUrl4 from '@/assets/images/04.png'; // 50~79
import imageUrl5 from '@/assets/images/05.png'; // 80~129
import imageUrl6 from '@/assets/images/06.png'; // 130~

const username = ref<string>('はぴはぴ花子'); // ダミーデータ
const commitNumber = ref<number>(-1); // ダミーデータ

const gitLevel = computed<number>(() => {
    return Math.floor(commitNumber.value / 10);
});

const petImage = computed<string>(() => {
    let level: number = gitLevel.value;
    if (level <= 0) {
        return imageUrl1;
    } else if (level < 3) {
        return imageUrl2;
    } else if (level < 5) {
        return imageUrl3;
    } else if (level < 8) {
        return imageUrl4;
    } else if (level < 13) {
        return imageUrl5;
    } else {
        return imageUrl6;
    }
});
</script>

<template>
    <main class="main-content">
        <div>
            <h1>{{ username }}</h1>
        </div>
        <div class="d-flex">
            <div class="flex-fill pet-container">
                <img :src="petImage" alt="Pet Image" class="img-fluid"/>
            </div>
            <div class="flex-fill experience-bar ml-n3">
                    <p>TODO:経験値バー</p>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: #CEBEB9;
    margin-top: 32px;
}
/*見やすくするため仮で色つけてます*/
/* .experience-bar {
    background-color: pink;
}
.pet-container {
    background-color: blue;
} */
</style>
