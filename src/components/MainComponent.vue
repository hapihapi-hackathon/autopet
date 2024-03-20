<script setup lang="ts">
import {computed, ref, onMounted} from 'vue';
import axios from 'axios';
import imageUrl1 from '@/assets/images/01.png'; // 0~9
import imageUrl2 from '@/assets/images/02.png'; // 10~29
import imageUrl3 from '@/assets/images/03.png'; // 30~49
import imageUrl4 from '@/assets/images/04.png'; // 50~79
import imageUrl5 from '@/assets/images/05.png'; // 80~129
import imageUrl6 from '@/assets/images/06.png'; // 130~

const username = ref<string>('はぴはぴ花子'); // ダミーデータ
const githubId = 'cocolo93';
const email = 'chococolo0903@gmail.com'
const startDate = '2024-03-17T00:00:00Z';
const commitNumber = ref<number>(0);
const loading = ref<boolean>(true);

const getCommitNumber = async () => {
    try {
        const response = await axios.get(`https://api.github.com/users/${githubId}/events`);
        const events = response.data;
        events.forEach((event: { type: string; created_at: string; payload: { commits: { author: { email: string; }; }[]; }; }) => {
            if (event.type === 'PushEvent' && new Date(event.created_at) >= new Date(startDate)) {
                event.payload.commits.forEach((commit: { author: { email: string; }; }) => {
                    if (commit.author.email === email) {
                        commitNumber.value += 1;
                    }
                })
            }
        });
        loading.value = false;
    } catch (error) {
        console.error('Error fetching commit number:', error);
    }
    console.log(commitNumber.value)
};

onMounted(getCommitNumber);

const experience = computed<number>(() => {
    return commitNumber.value % 10;
});

const gitLevel = computed<number>(() => {
    return Math.floor(commitNumber.value / 10);
});

const percentage = computed<string>(() => {
    const progress = (experience.value / 10) * 100;
    return `${progress.toFixed(0)}%`;
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
        <div class="username-container">
            <h1>{{ username }}</h1>
        </div>
        <div>
            <div class="pet-container">
                <div class="pet-image">
                    <img :src="petImage" alt="Pet Image" class="img-fluid"/>
                </div>
                <div class="experience-container ml-n3">
                    <div class="level-container">Level <span>{{ gitLevel }}</span></div>
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
