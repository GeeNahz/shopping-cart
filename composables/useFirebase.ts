import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export const createUser: any = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const creds = await createUserWithEmailAndPassword(auth, email, password)
    return creds.user
  }
  catch (err) {
    console.log(err)
    // const errorCode = err.code;
    // const errorMessage = err.message;
  }
}

export const signInUserEmailPassword: any = async (email: string, password: string) => {
  const auth = getAuth();
  try {
    const creds = await signInWithEmailAndPassword(auth, email, password)
    return creds.user
  } catch (err) {
   console.log(err) 
  }
}

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth)
    // Sign-out successful.
  } catch (err) {
    console.log(err)
    // An error happened.
  }
}

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("Auth changed: ", user)
      // ...
    } else {
      // User is signed out
      // ...
      console.log("Auth changed signout")
    }
    firebaseUser.value = user
  });
}

