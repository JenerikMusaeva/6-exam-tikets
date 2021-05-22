import React, { useEffect, useState, useRef } from "react";
import tikets from "./data";
import TiketsList from "./components/TiketsList";
import "./Styles.css";
import Header from "./components/Header";
import Settings from "./components/Settings";

export const FILTERS = {
  Все: "Все",
  "1 пересадка": 1,
  "2 пересадки": 2,
  "3 пересадки": 3,
  "Без пересадок": 0,
};

export const SORTS = [
  "Все",
  "По цене (возраст.)",
  "По цене (убыв.)",
  "Время в полете (возраст.)",
  "Время в полете (убыв.)",
];

function App() {
  let [filteredTickets, setFilteredTickets] = useState([]);
  let [filters, setFilters] = useState(["Все"]);
  let [sort, setSort] = useState("Все");

  let [settings, setSettings] = useState({ filters: ["Все"], sort: "Все" });

  const initialRender = useRef(true);

  useEffect(() => {
    setFilteredTickets(() => {
      console.log("FILTERS");
      const filteredTicketsLocal = tikets.filter((tiket) => {
        if (filters.includes("Все")) {
          return true;
        }
        return filters.some((filterName) => {
          const filterTransfers = FILTERS[filterName];
          return tiket.transfers.length === filterTransfers;
        });
      });

      return sortItems(filteredTicketsLocal, sort);
    });
  }, [filters]);

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setSort(() => newSort);

    setFilteredTickets(() => {
      return sortItems(filteredTickets, newSort);
    });
  };

  const sortItems = (items, sort) => {
    const sortHandler = {
      Все: () => tikets.filter((ticket) => filteredTickets.includes(ticket)),
      "По цене (возраст.)": (a, b) => a.price - b.price,
      "По цене (убыв.)": (a, b) => b.price - a.price,
      "Время в полете (возраст.)": (a, b) => a.wayMinutes - b.wayMinutes,
      "Время в полете (убыв.)": (a, b) => b.wayMinutes - a.wayMinutes,
    };

    return items.sort(sortHandler[sort]);
  };

  return (
    <>
      <Header />
      <Settings
        filters={filters}
        setFilters={setFilters}
        sort={sort}
        handleSortChange={handleSortChange}
      />
      <TiketsList TiketsData={filteredTickets} />
    </>
  );
}

export default App;
