const SearchBar = () => {
  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-primary is-rounded"
          type="text"
          placeholder="Search Pokemon"
        />
      </div>
      <p className="help">Gültige Eingaben: Name, Dex Nr.</p>
    </div>
  );
};

export default SearchBar;
