import React from "react";
import { SORTS } from "../App";

function Sort({ sort, handleSortChange }) {

  return (
    <div className="sort">
      <div className="sort-tikets">
        <h3 className="sort-title">Сортировать билеты</h3>
        {SORTS.map((sortName) => {
          return (
            <div key={sortName}>
              <label>
                <input
                  onChange={handleSortChange}
                  type="radio"
                  name="sort"
                  value={sortName}
                  checked={sort === sortName}
                />
                {sortName}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sort;
