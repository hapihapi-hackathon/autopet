import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebaseプロジェクトの設定。
const firebaseConfig = {
    apiKey: "AIzaSyC9TSSjh95Ka7BPjPmmfnpWC8s-5t2gZDs",
    authDomain: "outpet-2024.firebaseapp.com",
    projectId: "outpet-2024",
    storageBucket: "outpet-2024.appspot.com",
    messagingSenderId: "491781218520",
    appId: "1:491781218520:web:eee4f6bdeb1dbe09f2f7ad"
};

// Firebaseアプリの初期化
const app = initializeApp(firebaseConfig);

// 認証サービスの取得
const auth = getAuth(app);

export { auth };