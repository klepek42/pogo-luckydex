import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import PokeDex from "../components/PokeDex";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <PokeDex />
    </div>
  );
};

export default Home;
