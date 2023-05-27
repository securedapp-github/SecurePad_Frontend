import React from 'react';
import "../Style/search.css" 
function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterBy, setFilterBy] = useState('all');
  
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleFilterChange = (event) => {
      setFilterBy(event.target.value);
    };
  return (
    <div className="container">
      <div className="search-filter-container">
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            placeholder="Search..."
          />
        </div>
        <div className="filter-container">
          <select value={filterBy} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="filter1">Filter 1</option>
            <option value="filter2">Filter 2</option>
          </select>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <h2>Card 1</h2>
          <p>Card 1 content goes here...</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Card 2 content goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default App;