import Image from "next/image";

const PokeDexItem = () => {
  return (
    <div>
      <input type="checkbox" />
      <label />
      <Image
        src="/../public/assets/images/bauz.png"
        width="64"
        height="64"
        className="item-img"
      />
    </div>
  );
};

export default PokeDexItem;
