importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyD1B7kx2tZTsOtaFtyyLdPm2nSC1rD8B4k",
  appId: "1:925070488780:web:483bdd883edafe1695be69",
  messagingSenderId: "925070488780",
  projectId: "karnataka-e1e23",
  authDomain: "karnataka-e1e23.firebaseapp.com",
  databaseURL: "xxxxxxxxxxxxxxxxxxx",
  storageBucket: "karnataka-e1e23.appspot.com",
  measurementId: "G-0PZ7TKPEKX",
});

// Necessary to receive background messages:
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.data['title'];
  const notificationOptions = {
    body: payload.data['body'],
  };
  self.registration.showNotification(notificationTitle,notificationOptions);
});