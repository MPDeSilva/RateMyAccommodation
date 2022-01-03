import * as firebaseAdmin from 'firebase-admin';

// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from '../next.config';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: serviceAccount.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      projectId: serviceAccount.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: serviceAccount.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  });
}

export { firebaseAdmin };