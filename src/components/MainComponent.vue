<script setup lang="ts">
import {computed, ref} from 'vue';
import imageUrl1 from '@/assets/images/01.png';
import imageUrl2 from '@/assets/images/02.png';
import imageUrl3 from '@/assets/images/03.png';
import imageUrl4 from '@/assets/images/04.png';
import imageUrl5 from '@/assets/images/05.png';
import imageUrl6 from '@/assets/images/06.png';

const username = ref('モナ'); // ダミーデータ
const commitNumber = ref<number>(180); // ダミーデータ

const petImage = computed<string>(() => {
    if (commitNumber.value <= 25) {
        return imageUrl1;
    } else if (commitNumber.value <= 50) {
        return imageUrl2;
    } else if (commitNumber.value <= 75) {
        return imageUrl3;
    } else if (commitNumber.value <= 100) {
        return imageUrl4;
    } else if (commitNumber.value <= 125){
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
                    <!-- 経験値バーの内容 -->
                    <img :src="petImage" alt="Pet Image" class="img-fluid"/>
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
.experience-bar {
    background-color: pink;
    margin-left: -200px; /**重なっている部分 */
    z-index: 1;
}
.pet-container {
    background-color: blue;
}
</style>
