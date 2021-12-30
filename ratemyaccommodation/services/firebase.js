import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID
};

export default function initFirebase() {
  if (!firebase.getApps.length){
    firebase.initializeApp(config);
  }
}