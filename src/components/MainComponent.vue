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
const level = ref<number>(20) //ダミーデータ
const percentage = ref<String>('30%') //ダミーデータ
const experience = ref<number>(3) //ダミーデータ

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
        <div class="username-container">
            <h1>{{ username }}</h1>
        </div>
        <div>
            <div class="pet-container">
                <div class="pet-image">
                    <img :src="petImage" alt="Pet Image" class="img-fluid"/>
                </div>
                <div class="experience-container ml-n3">
                    <div class="level-container">Level <span>{{ level }}</span></div>
                    <div class="experience-bar">
                        <div class="service-name">経験値</div>
                        <div class="progress-container d-flex">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress-detail">
                                <p>{{ experience }} / 10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: #CEBEB9;
    margin-top: 32px;
}
.username-container {
    padding-top: 16px;
    padding-left: 32px;
}
.pet-container {
    position: relative;
}
.pet-image {
    margin-left: 10%;
}
.pet-image img {
    height: calc(100vh - 230px);
}
.experience-container {
    position: absolute;
    width: 480px;
    bottom: 18px;
    right: 18px;
}
.level-container {
    text-align: right;
    padding-right: 30px;
    font-size: 30px;
}
.level-container span {
    font-size: 60px;
}
.progress-container {
    padding: 10px;
}
.progress-container .progress {
    width: 82%;
    margin: auto 0;
    height: 1.3rem;
}
.progress-container .progress-detail {
    padding-left: 13px;
}
.progress-container .progress-detail p {
    margin-bottom: 0;
    text-align: center;
}
.experience-bar {
    border-radius: 10px;
    border: #4E343F 5px solid;
    background-color: #6F6884;
}
.experience-bar .service-name {
    background-color: #7A8FAA;
    padding: 8px;
    color: #fff;
}
.experience-bar .progress-bar {
    width: v-bind(percentage);
    background-color: #FEB099;
}
</style>
