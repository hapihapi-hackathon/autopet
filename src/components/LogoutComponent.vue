<script lang="ts">
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Firebaseの設定をインポート

export default {
    methods: {
        async logout() {
            try {
                await signOut(auth);
                console.log('ログアウトしました');
                // ログアウト成功後の処理（例：ログインページへのリダイレクトなど）
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
