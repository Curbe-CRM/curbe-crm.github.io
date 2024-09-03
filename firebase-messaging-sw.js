importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebaseConfig = {
    apiKey: "AIzaSyD1B7kx2tZTsOtaFtyyLdPm2nSC1rD8B4k",
    appId: "1:925070488780:web:483bdd883edafe1695be69",
    messagingSenderId: "925070488780",
    projectId: "karnataka-e1e23",
    authDomain: "karnataka-e1e23.firebaseapp.com",
    databaseURL: "xxxxxxxxxxxxxxxxxxx",
    storageBucket: "karnataka-e1e23.appspot.com",
    measurementId: "G-0PZ7TKPEKX",
};

firebase.initializeApp(firebaseConfig);

// Necessary to receive background messages:
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log("Received background message ", payload);
//     const notificationTitle = payload.data["title"];
//     const notificationOptions = {
//         body: payload.data["body"],
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });

let darkPatternsValue = 0;

self.addEventListener("message", function (event) {
    if (event.data && event.data.type === "SET_DARK_PATTERNS_VALUE") {
        darkPatternsValue = event.data.value;
    }
});

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    if (darkPatternsValue != 1) {
        return;
    }
    lastNotificationId = currentNotificationId;

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
    console.log("Notification clicked ", event);
    event.notification.close();
    event.waitUntil(clients.openWindow("/?source=notification"));
});
