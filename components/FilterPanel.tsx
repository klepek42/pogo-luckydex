const FilterPanel = () => {
  return (
    <div>
      <div className="tags">
        <span className="tag is-black">Gen 1</span>
        <span className="tag is-success">Gen 2</span>
        <span className="tag is-warning">Gen 3</span>
        <span className="tag is-danger">Gen 4</span>
      </div>
      <div>
        <button className="button is-primary is-outlined">Show all</button>
        <button className="button is-link is-outlined">Show uncompleted</button>
        <button className="button is-info is-outlined">Show completed</button>
      </div>
    </div>
  );
};

export default FilterPanel;
