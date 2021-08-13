import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

firebase.initializeApp(
    {
        apiKey: "AIzaSyAccjXnkNpBpUcEge5M_yrF8F9i_WltTuo",
        authDomain: "reels-class-e3d00.firebaseapp.com",
        projectId: "reels-class-e3d00",
        storageBucket: "reels-class-e3d00.appspot.com",
        messagingSenderId: "998125515304",
        appId: "1:998125515304:web:cdabec647cbd38a87c3b1d"
    }
)
export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;