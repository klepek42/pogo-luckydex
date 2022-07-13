import PokeDexItem from "./PokeDexItem";
import styles from "./PokeDex.module.css";

const DUMMY_DEX = [
  { id: 1, name: "Bisasam", gen: 1, completed: true },
  { id: 2, name: "Bisaknosp", gen: 1, completed: true },
  { id: 3, name: "Bisaflor", gen: 1, completed: false },
  { id: 4, name: "Glumanda", gen: 1, completed: false },
  { id: 5, name: "Glutexo", gen: 1, completed: false },
  { id: 6, name: "Glurak", gen: 1, completed: false },
  { id: 7, name: "Schiggy", gen: 1, completed: false },
  { id: 8, name: "Schillok", gen: 1, completed: false },
  { id: 9, name: "Turtok", gen: 1, completed: false },
  { id: 10, name: "Raupy", gen: 1, completed: false },
  { id: 11, name: "Safcon", gen: 1, completed: false },
  { id: 12, name: "Smettbo", gen: 1, completed: false },
  { id: 152, name: "Endivie", gen: 2, completed: false },
  { id: 153, name: "Lorblatt", gen: 2, completed: false },
  { id: 154, name: "Meganie", gen: 2, completed: false },
  { id: 155, name: "Feurigel", gen: 2, completed: false },
  { id: 156, name: "Igelavar", gen: 2, completed: false },
  { id: 157, name: "Tornupto", gen: 2, completed: false },
  { id: 158, name: "Karnimani", gen: 2, completed: false },
  { id: 159, name: "Tyracroc", gen: 2, completed: false },
  { id: 160, name: "Impergator", gen: 2, completed: false },
  { id: 252, name: "Geckarbor", gen: 3, completed: false },
  { id: 253, name: "Reptain", gen: 3, completed: false },
  { id: 254, name: "Gewaldro", gen: 3, completed: false },
];

interface Props {
  gen: number;
}

const PokeDexItems = (props: Props) => {
  return (
    <>
      {<h3 className="title is-3">Gen {props.gen} (x %)</h3>}
      <div className={styles["pokedex-items"]}>
        {DUMMY_DEX.filter((entry) => entry.gen === props.gen).map((entry) => {
          return (
            <PokeDexItem
              key={entry.id}
              id={entry.id}
              name={entry.name}
              completed={entry.completed}
            />
          );
        })}
      </div>
    </>
  );
};

export default PokeDexItems;
