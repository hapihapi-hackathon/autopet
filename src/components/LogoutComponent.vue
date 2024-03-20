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
                router.push('/'); // ホームページへリダイレクト
            } catch (error) {
                console.error("ログアウトエラー:", error);
                // エラーハンドリング
            }
        }
    }
};
</script>

<template>
    <div>
        <button @click="logout">ログアウト</button>
    </div>
</template>
