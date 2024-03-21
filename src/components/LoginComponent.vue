<script lang="ts">
import {signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Firebaseの設定をインポート
import router from '@/router';

export default {
    methods: {
        async loginWithGitHub() {
            const provider = new GithubAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                const email = result.user.email;
                const displayName = result.user.displayName;
                const token = result._tokenResponse.oauthAccessToken;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('displayName', displayName);
                console.log('ログインしました');
                router.push('/home'); // ホームページへリダイレクト
            } catch (error) {
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
