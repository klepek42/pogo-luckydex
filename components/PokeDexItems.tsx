import PokeDexItem from "./PokeDexItem";
import styles from "./PokeDex.module.css";

interface Props {
  pokedexItems: {
    id: number;
    name: string;
    gen: number;
    completed: boolean;
  }[];
  searchText: string;
  itemsFilter: string;
  generationFilter: number;
}

const PokeDexItems = (props: Props) => {
  return (
    <>
      {<h3 className="title is-3">Gen</h3>}
      <div className={styles["pokedex-items"]}>
        {props.pokedexItems
          .filter((entry) =>
            props.generationFilter ? entry.gen === props.generationFilter : true
          )
          .filter((entry) => {
            return props.itemsFilter === "uncompleted"
              ? !entry.completed
              : true;
          })
          .filter((entry) => {
            return props.itemsFilter === "completed" ? entry.completed : true;
          })
          .filter((entry) =>
            props.searchText !== ""
              ? entry.name
                  .toLowerCase()
                  .includes(props.searchText.toLowerCase())
              : true
          )
          .map((entry) => {
            return (
              <PokeDexItem
                key={entry.id}
                id={entry.id}
                name={entry.name}
                gen={entry.gen}
                completed={entry.completed}
              />
            );
          })}
      </div>
    </>
  );
};

export default PokeDexItems;
