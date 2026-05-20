// export const firebaseConfig = {
//   apiKey: "AIzaSyAkv4N1zgPOd1YfeuF0m4SaFidAakypoUc",
//   authDomain: "aichat-3be39.firebaseapp.com",
//   projectId: "aichat-3be39",
//   storageBucket: "aichat-3be39.firebasestorage.app",
//   messagingSenderId: "610806628496",
//   appId: "1:610806628496:web:c33b14cb57d8af6961d815"
// };


export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "aichat-3be39.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};