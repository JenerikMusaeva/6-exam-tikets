import React from "react";
import Filters from "../components/Filters";
import Sort from "../components/Sort";

function Settings({ filters, setFilters, sort, handleSortChange}) {

  return (
    <div className="settings">
      <Filters filters={filters} setFilters={setFilters} />
      <Sort sort={sort} handleSortChange={handleSortChange} />
    </div>
  );
}

export default Settings;
