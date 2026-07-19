/* ===========================================
   Askri Fragrances - Firebase Auth
   Handles Google sign-in + admin/user redirect
   =========================================== */

const ADMIN_EMAIL = 'm.abbas.askri@gmail.com';

// Firebase config — paste your own keys here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Sign in with Google
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

// Check if user is logged in (for showing profile icon state)
function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('askri_user') || 'null');
}

// Update nav icon if logged in
function updateLoginIcon() {
  const user = getCurrentUser();
  const loginBtn = document.querySelector('.login-btn');
  if (user && loginBtn) {
    loginBtn.classList.add('logged-in');
    loginBtn.title = user.email;
  }
}

document.addEventListener('DOMContentLoaded', updateLoginIcon);