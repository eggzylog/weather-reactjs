import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoOptions } from '../utils/api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={geoOptions}
      className="w-full md:w-[75%] lg:w-[50%] mx-auto"
    />
  );
};

export default Search;
