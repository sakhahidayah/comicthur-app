import { useState } from "react";
import React from "react";
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => {
  const [search, setSearch] = useState(false);
  const handleSearchValue = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <Header searchValue={handleSearchValue} />
      <Main search={search} />
    </div>
  );
};

export default App;
