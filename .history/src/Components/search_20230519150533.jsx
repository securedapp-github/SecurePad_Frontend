import React, { useState } from 'react';
import "../Style/search.css" // Import the CSS file for styling

const Card = ({ title, description, image }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const newProgress = 75; // Set the desired progress value
    setProgress(newProgress);
  };

  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="progress-container">
          <span className="progress-text">Progress:</span>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
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
      <button className="update-button" onClick={updateProgress}>
        Update Progress
      </button>
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
