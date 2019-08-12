import firebase from 'firebase';
// Get a Firestore instance
export default firebase
    .initializeApp({
        apiKey: "AIzaSyCpDMDX2AH78qztXS078F26ap1xCQw02ZI",
        authDomain: "notes-24765.firebaseapp.com",
        databaseURL: "https://notes-24765.firebaseio.com",
        projectId: "notes-24765",
        storageBucket: "",
        messagingSenderId: "836088008178",
        appId: "1:836088008178:web:87a416f181a00819"
    })
    .database()