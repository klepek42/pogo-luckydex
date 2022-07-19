import Image from "next/image";
import styles from "./PokedexItem.module.css";

interface Props {
  id: number;
  name: string;
  gen: number;
  completed: boolean;
}

const PokeDexItem = ({ id, name, gen, completed }: Props) => {
  const fullId = `${id}`.padStart(3, "0");
  const imgSrc = `/../public/assets/images/pokemon_icon_${fullId}_00.png`;

  const changeCompleted = () => {};

  return (
    <div className={styles["pokedex-item"]}>
      <label>{id} </label>
      <label>{name}</label>
      <Image src={imgSrc} width="128" height="128" alt={name} />
      <input type="checkbox" checked={completed} onChange={changeCompleted} />
    </div>
  );
};

export default PokeDexItem;
