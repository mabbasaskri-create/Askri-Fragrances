/* ===========================================
   Askri Fragrances - Firebase Auth
   Handles Google sign-in + admin/user redirect
   =========================================== */

const ADMIN_EMAIL = 'm.abbas.askri@gmail.com';

const firebaseConfig = {
  apiKey: "AIzaSyC1bJM3apWd0C6pHU3g606yenjcq2WMfUU",
  authDomain: "askri-fragrances.firebaseapp.com",
  projectId: "askri-fragrances",
  storageBucket: "askri-fragrances.firebasestorage.app",
  messagingSenderId: "477510980518",
  appId: "1:477510980518:web:ad8e39ec15ecb151ea7567",
  measurementId: "G-D58HD8MLTX"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();
let storage = null;
try { storage = firebase.storage(); } catch(e) { console.warn('Storage init skipped:', e); }

let analytics = null;
try { analytics = firebase.analytics(); } catch(e) { console.warn('Analytics init skipped:', e); }

function signInWithGoogle() {
  auth.signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      const userData = { name: user.displayName, email: user.email, photo: user.photoURL };
      sessionStorage.setItem('askri_user', JSON.stringify(userData));

      if (user.email === ADMIN_EMAIL) {
        window.location.href = 'admin.html';
      } else {
        window.location.href = 'orders.html';
      }
    })
    .catch(error => {
      console.error('Auth error:', error);
      if (typeof showToast === 'function') showToast('Sign-in failed: ' + error.message);
    });
}

function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('askri_user') || 'null');
}

function signOutUser() {
  auth.signOut().then(() => {
    sessionStorage.removeItem('askri_user');
    window.location.href = 'index.html';
  });
}

function updateLoginIcon() {
  const user = getCurrentUser();
  const loginBtn = document.querySelector('.login-btn');
  if (user && loginBtn) {
    loginBtn.classList.add('logged-in');
    loginBtn.title = user.email;
  }
}

function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

document.addEventListener('DOMContentLoaded', updateLoginIcon);