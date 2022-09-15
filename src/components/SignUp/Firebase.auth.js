        import firebaseConfig from './FirebaseConfig';
        import { initializeApp } from "firebase/app";
        import { getAuth, signInWithPopup, GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";

        export const firebaseInitializeApp = ()=>{
            
          const app =  initializeApp(firebaseConfig)
          const auth = getAuth(app);
        }



        export  const submitGoogleSigin = () =>{
        const GoogleProvider = new GoogleAuthProvider()
        const auth = getAuth();
        return signInWithPopup(auth, GoogleProvider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const {displayName, email , photoURL} = result.user;

          const newUserInfo = {
            name:displayName,
            email:email,
            photo:photoURL,
          }
            return newUserInfo
          
          }).catch((error) => {
          
            const errorCode = error.code;
            const errorMessage = error.message;
          
            const email = error.customData.email;
          
            const credential = GoogleAuthProvider.credentialFromError(error);
        
          });
        }
        // facebookProvider
       export const submitFacebookSigin = () =>{
        const facebookProvider = new FacebookAuthProvider();
        const auth = getAuth();
       return signInWithPopup(auth, facebookProvider)
          .then((result) => {
            const user = result.user;
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            return user
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);

            
          });
        }



