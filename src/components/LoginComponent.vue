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
                const displayName = result.user.displayName;
                const token = result._tokenResponse.oauthAccessToken;
                if (!displayName) {
                    throw new Error('表示名を取得できません');
                }
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
    <main>
        <div class="d-flex flex-column justify-content-center align-items-center container">
            <p>GitHubアカウントでログインする</p>
            <button @click="loginWithGitHub">▷はい</button>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: #CEBEB9;
    margin-top: 32px;
}
p {
    font-size: 32px;
}
button {
    margin-top: 24px;
}
.container{
    padding: 16px;
}
</style>

