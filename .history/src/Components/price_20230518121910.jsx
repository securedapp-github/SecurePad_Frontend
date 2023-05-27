import React from 'react'
import "../Style/price.css"
function price() {
  return (
    <div 
    style={{height:"100%",backgroundImage:"linear-gradient(to right,black,rgb(14, 14, 61))",paddingTop:"4%"}}>
    <h1 className="head">Our Price</h1>
     <div className="price-section">  
    <div className="price-section-items">
        <div className="card">
          <div className="card-header">
            <h2 className="topic">Chihuahua</h2>
          </div>
          <div className="card-body">
            <h3 className="price-text">$49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
          </div>
        </div>
    </div>
    <div className="price-section-items">
        <div className="card">
          <div className="card-header">
            <h2 className="topic">Chihuahua</h2>
          </div>
          <div className="card-body">
            <h3 className="price-text">$49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
          </div>
        </div>
    </div>
    <div className="price-section-items">
        <div className="card">
          <div className="card-header">
            <h2 className="topic">Chihuahua</h2>
          </div>
          <div className="card-body">
            <h3 className="price-text">$49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
          </div>
        </div>
    </div>
    <div className="price-section-items">
        <div className="card">
          <div className="card-header">
            <h2 className="topic">Chihuahua</h2>
          </div>
          <div className="card-body">
            <h3 className="price-text">$49 / mo</h3>
            <p>5 Matches Per Day</p>
            <p>10 Messages Per Day</p>
            <p>Unlimited App Usage</p>
          </div>
        </div>
    </div>
     </div>
     </div>
  )
}

export default price
function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const performSearch = () => {
    // Perform search logic here based on the searchQuery
    // Update the searchResults state with the matching items
    // For example, you can filter an array of data based on searchQuery
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInputChange}
        placeholder="Search..."
      />
      <button onClick={performSearch}>Search</button>
      <ul>
        {searchResults.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;