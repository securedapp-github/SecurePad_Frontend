import React, { useState } from 'react';
import "../Style/search.css" // Import the CSS file for styling

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="progress-bar-container">
        <span className="progress-text">Progress:</span>
          <progress className="progress-bar" value="50" max="100"></progress>
        <span className="value-text">5.073ETH</span>
        </div>
        <div className="box-container">
          <div className="box box-1">
            <span className="box-text">Softcap</span>
          </div>
          <div className="box box-2">
            <span className="box-text">Hardcap</span>
          </div>
          <div className="box box-3">
            <span className="box-text">Liquidity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = ({ cards, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('');

  // Dummy data for cards
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description of Card 1.',
      image: 'https://www.xrtoday.com/wp-content/uploads/2022/10/What_Web3_Going_2023.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description of Card 2.',
      image: 'https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg?w=1060&t=st=1684480900~exp=1684481500~hmac=05c88ea1045f51f201781dacfc383e36c3a314f3f37358e39e619cd2e59d91ca',
    },
  ];

  // Filter the cards based on the filterBy value

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(filterBy.toLowerCase())
  );



  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter">
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="">Filter By</option>
          <option value="Card 1">Card 1</option>
          <option value="Card 2">Card 2</option>
        </select>
        
      </div>
      <div className="card-container">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
    
  );
};

export default App;
