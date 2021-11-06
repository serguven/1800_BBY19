// App's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDiIZqkXxy6ZwLfdFQ7NHXjZoMwfHEc-Yo",
    authDomain: "excelsior-6f424.firebaseapp.com",
    projectId: "excelsior-6f424",
    storageBucket: "excelsior-6f424.appspot.com",
    messagingSenderId: "993452857406",
    appId: "1:993452857406:web:4261421e20319ab928d96f"
};


const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();