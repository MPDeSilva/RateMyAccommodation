import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/clientApp";

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
      {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/'
}

const FirebaseAuth = () => {
    return (
        <div>
       
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
  
        </div>
    )
}

export default FirebaseAuth