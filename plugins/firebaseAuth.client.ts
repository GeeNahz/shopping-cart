import { initializeApp } from "firebase/app";

export default defineNuxtPlugin (nuxtApp => {
  const config = useRuntimeConfig()
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: config.firebaseApiKey
  };

  // Initialize Firebase
  initializeApp(firebaseConfig);
  // Initialize user
  initUser()
})
