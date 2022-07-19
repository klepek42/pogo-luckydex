import { Dispatch, SetStateAction } from "react";

interface Props {
  setSearchText: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ setSearchText }: Props) => {
  const changeSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-primary is-rounded"
          type="text"
          placeholder="Search Pokemon"
          onChange={changeSearchHandler}
        />
      </div>
    </div>
  );
};

export default SearchBar;
