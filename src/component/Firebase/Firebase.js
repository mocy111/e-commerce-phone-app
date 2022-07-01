import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAgiCrnt1xv9mTsdYMDQoKR5Xd4yeycol4",
    authDomain: "shopping-app-b9a31.firebaseapp.com",
    databaseURL: "https://shopping-app-b9a31.firebaseio.com",
    projectId: "shopping-app-b9a31",
    storageBucket: "shopping-app-b9a31.appspot.com",
    messagingSenderId: "567235010950",
    appId: "1:567235010950:web:80ac47ad7c7d98a3a10c07"
  };

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth();
        this.db = app.firestore()
        
    }

    // inscription
    signUpUser = (email,password) =>
        this.auth.createUserWithEmailAndPassword(email,password);

        // conexion 

        loginUser = (email,password) => 
        this.auth.signInWithEmailAndPassword(email,password)
        
        
    // deconexion 
    signOutUser = () => this.auth.signOut()

    // Récupérer le mot de passe
    passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

   user = (uid) => this.db.doc(`users/${uid}`);
}


export default Firebase