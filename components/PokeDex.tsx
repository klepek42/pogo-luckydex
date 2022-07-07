import PokeDexItem from "./PokeDexItem";
import styles from "./Pokedex.module.css";

const DUMMY_DEX = [
  { id: 1, name: "Bisasam" },
  { id: 2, name: "Bisaknosp" },
  { id: 3, name: "Bisaflor" },
  { id: 4, name: "Glumanda" },
  { id: 5, name: "Glutexo" },
  { id: 6, name: "Glurak" },
  { id: 7, name: "Schiggy" },
  { id: 8, name: "Schillok" },
  { id: 9, name: "Turtok" },
  { id: 10, name: "Raupy" },
  { id: 11, name: "Safcon" },
  { id: 12, name: "Smettbo" },
];

const PokeDex = () => {
  return (
    <>
      <h3 className="title is-3">Gen 1</h3>
      <div className={styles["pokedex-items"]}>
        {DUMMY_DEX.map((entry) => {
          return <PokeDexItem key={entry.id} id={entry.id} name={entry.name} />;
        })}
      </div>
    </>
  );
};

export default PokeDex;
