import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import Login from "../components/Login/Login";
import PokeDex from "../components/PokeDex";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      {/*<FrontPage />*/}

      <PokeDex />

      <div className="box">Switch to Darkmode</div>

      <Login />
    </div>
  );
};

export default Home;
