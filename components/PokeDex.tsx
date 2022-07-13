import PokeDexItem from "./PokeDexItem";
import styles from "./Pokedex.module.css";
import PokeDexItems from "./PokeDexItems";

const PokeDex = () => {
  return (
    <div className={styles["pokedex-panel"]}>
      <PokeDexItems gen={1} />
      <PokeDexItems gen={2} />
      <PokeDexItems gen={3} />
    </div>
  );
};

export default PokeDex;
