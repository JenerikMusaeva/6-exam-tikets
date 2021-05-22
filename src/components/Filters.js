import React from "react";
import { FILTERS } from "../App";

function Filters({ filters, setFilters }) {
  let handleChange = (e) => {
    let filterActive = e.target.checked;
    let filterName = e.target.value;

    if (
      (filterName === "Все" && filterActive) ||
      (!filterActive && filters.length === 1)
    ) {
      setFilters(() => ["Все"]);
      return;
    }

    if (filterName !== "Все") {
      let newFilters = [];
      if (filterActive) {
        newFilters = filters
          .filter((filter) => filter !== "Все")
          .concat(filterName);
      } else {
        newFilters = filters.filter((filter) => filter !== filterName);
      }
      setFilters(() => newFilters);
    }

  };

  const allFilters = Object.keys(FILTERS).map((filterName) => {
    const isActive = filters.includes(filterName);
    return { filterName, isActive };
  });

  return (
    <div className="filters">
      <div className="filter-transfers">
        <h3 className="filter-title">Количество пересадок</h3>
        {allFilters.map(({ filterName, isActive }) => {
          return (
            <div key={filterName}>
              <label>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  value={filterName}
                  checked={isActive}
                />
                {filterName}
              </label>
            </div>
          );
        })}
      </div>
      </div>
  );
}

export default Filters;
