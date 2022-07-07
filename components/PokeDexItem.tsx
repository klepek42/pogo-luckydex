import Image from "next/image";
import styles from "./PokedexItem.module.css";

interface Props {
  id: number;
  name: string;
}

const PokeDexItem = (props: Props) => {
  const fullId = `${props.id}`.padStart(3, "0");
  const imgSrc = `/../public/assets/images/pokemon_icon_${fullId}_00.png`;

  return (
    <div className={styles["pokedex-item"]}>
      <label>{props.id} </label>
      <label>{props.name}</label>
      <Image src={imgSrc} width="128" height="128" alt=`${props.name}-icon` />
      <input type="checkbox" />
    </div>
  );
};

export default PokeDexItem;
