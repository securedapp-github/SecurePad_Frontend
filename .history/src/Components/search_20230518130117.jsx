import React, { useState } from 'react';
import "../Style/search.css" // Import the CSS file for styling

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('');

  // Dummy data for cards
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'This is the description of Card 1.',
      image: 'card1.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'This is the description of Card 2.',
      image: 'card2.jpg',
    },
  ];

  // Filter the cards based on the filterBy value
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(filterBy.toLowerCase())
  );

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
          <option value="">All</option>
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
