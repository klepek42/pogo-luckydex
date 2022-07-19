import { Dispatch, SetStateAction } from "react";

interface Props {
  setItemsFilter: Dispatch<SetStateAction<string>>;
  setGenerationFilter: Dispatch<SetStateAction<number>>;
}

const FilterPanel = (props: Props) => {
  const filterItems = (filter: string): void => {
    props.setItemsFilter(filter);
  };

  const filterGeneration = (gen: number): void => {
    props.setGenerationFilter(gen);
  };

  return (
    <div>
      <div className="tags">
        <span className="tag is-black" onClick={() => filterGeneration(0)}>
          All gens
        </span>
        <span className="tag is-black" onClick={() => filterGeneration(1)}>
          Gen 1
        </span>
        <span className="tag is-success" onClick={() => filterGeneration(2)}>
          Gen 2
        </span>
        <span className="tag is-warning" onClick={() => filterGeneration(3)}>
          Gen 3
        </span>
        <span className="tag is-danger" onClick={() => filterGeneration(4)}>
          Gen 4
        </span>
      </div>
      <div className="tags">
        <button
          className="tag button is-danger is-outlined is-small"
          onClick={() => {
            filterItems("");
            filterGeneration(0);
          }}
        >
          Reset filter
        </button>
        <button
          className="tag button is-primary is-outlined is-small"
          onClick={() => filterItems("")}
        >
          Show both
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
