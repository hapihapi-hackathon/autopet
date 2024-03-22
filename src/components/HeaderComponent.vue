<script setup lang="ts">
  import logo from '@/assets/images/logo.png';
</script>

<script lang="ts">
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Firebaseの設定をインポート
import router from '@/router';

export default {
    methods: {
        async logout() {
            try {
                await signOut(auth);
                console.log('ログアウトしました');
                sessionStorage.clear();
                router.push('/'); // ホームページへリダイレクト
            } catch (error) {
                console.error("ログアウトエラー:", error);
            }
        }
    }
};
</script>

<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/"><img :src="logo" alt="outpet"/></a>
          </div>
          <div>
            <button @click="logout">ログアウト</button>
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
