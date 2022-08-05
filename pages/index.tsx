import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import PokeDex from "../components/PokeDex";

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

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
  // const auth = getAuth(app);

  return (
    <div>
      <Navigation />
      <PokeDex />
    </div>
  );
};

export default Home;
