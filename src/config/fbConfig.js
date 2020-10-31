import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
apiKey: "AIzaSyCT_jXMhvEjSBK2uaV8yOJuLzh0JT-5eMM",
authDomain: "desk-organisation-tool.firebaseapp.com",
databaseURL: "https://desk-organisation-tool.firebaseio.com",
projectId: "desk-organisation-tool",
storageBucket: "desk-organisation-tool.appspot.com",
messagingSenderId: "100366101973",
appId: "1:100366101973:web:f0af8d6362bf0a6fcd215c",
measurementId: "G-6XWS3H73ZR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;