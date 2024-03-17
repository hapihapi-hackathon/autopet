<script lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const githubId = 'cocolo93';
    const startDate = '2024-02-29';
    const commitNumber = ref(null);
    const loading = ref(true);

    const getCommitNumber = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubId}/events`);
        const events = response.data;
        let totalCommits = 0;
        events.forEach(event => {
          if (event.type === 'PushEvent' && new Date(event.created_at) >= new Date(startDate)) {
            totalCommits += event.payload.size;
          }
        });
        commitNumber.value = totalCommits;
        loading.value = false;
      } catch (error) {
        console.error('Error fetching commit number:', error);
      }
      console.log(commitNumber)
    };

    onMounted(getCommitNumber);

    return {
            commitNumber
    };
  }
};
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
.main-content {
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
