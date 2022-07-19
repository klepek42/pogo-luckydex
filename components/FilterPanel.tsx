import { Dispatch, SetStateAction } from "react";

interface Props {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const FilterPanel = (props: Props) => {
  const filterItems = (filter: string): void => {
    props.setFilter(filter);
  };

  return (
    <div>
      <div className="tags">
        <span className="tag is-black" onClick={() => filterItems("1")}>
          Gen 1
        </span>
        <span className="tag is-success" onClick={() => filterItems("2")}>
          Gen 2
        </span>
        <span className="tag is-warning" onClick={() => filterItems("3")}>
          Gen 3
        </span>
        <span className="tag is-danger" onClick={() => filterItems("4")}>
          Gen 4
        </span>
      </div>
      <div className="tags">
        <button
          className="tag button is-primary is-outlined is-small"
          onClick={() => filterItems("")}
        >
          Show all
        </button>
        <button
          className="tag button is-link is-outlined is-small"
          onClick={() => filterItems("uncompleted")}
        >
          Show uncompleted
        </button>
        <button
          className="tag button is-info is-outlined is-small"
          onClick={() => filterItems("completed")}
        >
          Show completed
        </button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default FilterPanel;
