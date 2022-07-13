import type { NextPage } from "next";
import Navigation from "../components/Navigation";
import PokeDex from "../components/PokeDex";
import FilterPanel from "../components/FilterPanel";
import SearchBar from "../components/SearchBar";

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <FilterPanel />
      <SearchBar />
      <PokeDex />
    </div>
  );
};

export default Home;
