// ================= FIREBASE CONFIG =================
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, onValue, set, get, push, orderByChild, limitToLast, query, orderByKey }
  from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAb9UCL2PH_wbQMhoaq_ZcM4kWLlnWpgQ",
  authDomain: "monitoring-penyiraman.firebaseapp.com",
  databaseURL: "https://monitoring-penyiraman-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-penyiraman",
  storageBucket: "monitoring-penyiraman.firebasestorage.app",
  messagingSenderId: "441005426529",
  appId: "1:441005426529:web:c71373ad8ba641454ca720",
  measurementId: "G-4NZMBGHWNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export untuk dipakai di halaman lain
export { db, ref, onValue, set, get, push, orderByChild, limitToLast, query, orderByKey };
