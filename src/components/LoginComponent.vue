<script lang="ts">
// モジュラーインポート方式を使用
import {signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Firebaseの設定をインポート

export default {
    methods: {
        async loginWithGitHub() {
            const provider = new GithubAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                // 認証成功時の処理
                console.log(result);
                console.log("ログインしました");
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
