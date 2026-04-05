import React from "react";

const Filter = ({ search, handleSearchChange }) => {
  return (
    <div>
      search: <input value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;
