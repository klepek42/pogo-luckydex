import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import PokeDex from "../components/PokeDex";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/SearchBar";
import Stats from "../components/Stats";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <SearchBar />
      <FilterPanel />
      <PokeDex />
      <Stats />
    </div>
  );
};

export default Home;
