import firebase from "firebase/app";
import 'firebase/auth'

if(!firebase.apps.length){
    firebase.initializeApp({
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, //principal
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, //principal
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, //principal
    })
}

export default firebase