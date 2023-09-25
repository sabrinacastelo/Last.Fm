import React, { useState } from 'react';
import '../App.css'

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <h2>Pesquisar Música ou Artista</h2>
      <div>
        <input
          type="text"
          placeholder="Ex: Kill Bill"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button> {/* Adicione este onClick */}
      </div>
    </div>
  );
};

export default Search;
