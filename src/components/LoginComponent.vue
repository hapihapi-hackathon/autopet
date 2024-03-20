<script lang="ts">
// モジュラーインポート方式を使用
import {signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Firebaseの設定をインポート
import router from '@/router';

export default {
    methods: {
        async loginWithGitHub() {
            const provider = new GithubAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                console.log("ログイン成功");
                console.log(result);
                let email: string| null = result.user.email;
                let id
                sessionStorage.setItem('email', email);
                router.push('/home'); // ホームページへリダイレクト
            } catch (error) {
                // エラーハンドリング
                console.error("認証エラー:", error);
            } 
        }
    }
};
</script>

<template>
    <div>
        <button @click="loginWithGitHub">GitHubでログイン</button>
    </div>
</template>
