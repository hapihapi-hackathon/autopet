<script lang="ts">
import {signInWithPopup, GithubAuthProvider, type UserCredential } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Firebaseの設定をインポート
import router from '@/router';

interface GithubUserCredential extends UserCredential {
    _tokenResponse: {
        oauthAccessToken: string;
    }
}
export default {
    methods: {
        async loginWithGitHub() {
            const provider = new GithubAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider) as GithubUserCredential;
                const displayName = result.user.displayName || 'ナナシさん';
                const token = result._tokenResponse.oauthAccessToken;
                sessionStorage.setItem('token', token);
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
