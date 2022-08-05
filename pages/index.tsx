import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import PokeDex from "../components/PokeDex";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import googleSignIn from "../public/assets/icons/btn_google_light_normal_ios.svg";
import Image from "next/image";

const firebaseConfig = {
  apiKey: "AIzaSyCmgAjj83Z3eFiOPCkcadynQ3lpjc0_iIU",
  authDomain: "luckydex-a711b.firebaseapp.com",
  databaseURL:
    "https://luckydex-a711b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "luckydex-a711b",
  storageBucket: "luckydex-a711b.appspot.com",
  messagingSenderId: "794293588223",
  appId: "1:794293588223:web:b3129466a92ecb7b783cca",
  measurementId: "G-X32DL82881",
};

const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
  logEvent(analytics, "page_view");
}

const Home: NextPage = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogleHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // @ts-ignore
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <Image
        src={googleSignIn}
        onClick={signInWithGoogleHandler}
        alt="Google sign in"
        width={50}
        height={50}
      />
      <Navigation />
      <PokeDex />
    </div>
  );
};

export default Home;
