import React, { useState } from 'react';
import "../Style/search.css" // Import the CSS file for styling

const New = ({onSearch }) => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const cardsData = [
    {
      id: 1,
      title: 'MEME ELON DOGE FLOKI',
      description: 'Fair Launch-Max:No Limit',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 2,
      title: 'MEME ELON DOGE FLOKI',
      description: 'Fair Launch-Max:No Limit',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 3,
      title: 'MEME ELON DOGE FLOKI',
      description: 'Fair Launch-Max:No Limit',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the description of Card 4.',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 5,
  title: 'Card 5',
      description: 'This is the description of Card 5.',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'This is the description of Card 6.',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },

    {
      id: 7,
      title: 'Card 7',
      description: 'This is the description of Card 7.',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 8,
      title: 'Card 8',
      description: 'This is the description of Card 8.',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
    {
      id: 9,
      title: 'Card 9',
      description: 'This is the description of Card 9.',
      image: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/6017571e6018ade2cc76d75d_with%20coins%20meta-20-p-1080.jpg',
    },
  ];


  // Filter the cards based on the filterBy value

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(filterBy.toLowerCase())
  );

  const searchedCards = filteredCards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase()) ||
    card.description.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="container"> 
      <div className="search">
        <input
          type="text" placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />
        
      <div className="filter">
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
        >
          <option value="">Filter By</option>
          <option value="Card 1">Card 1</option>
          <option value="Card 2">Card 2</option>
          <option value="Card 3">Card 3</option>
          <option value="Card 4">Card 4</option>
          <option value="Card 5">Card 5</option>
          <option value="Card 6">Card 6</option>
          <option value="Card 7">Card 7</option>
          <option value="Card 8">Card 8</option>
          <option value="Card 9">Card 9</option>
        </select>
        </div></div>

        <div className="card-container">
        {searchedCards.map((card) => (
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

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="progress-bar-container">
        <span className="progress-text">Progress 17.6%</span>
          <progress className="progress-bar" value="50" max="100"></progress>
        <span className="value-text">5.073ETH </span>
        <span className="new-text">10BNB</span>
        </div>
        <div className="box-container">
          <div className="box box-1">
            <span className="box-text">Softcap</span>
            <span className="Softcap-text">10BNB</span>
          </div>
          <div className="box box-2">
            <span className="box-text">Hardcap</span>
            <span className="Softcap-text">10BNB</span>

          </div>
          <div className="box box-3">
            <span className="box-text">Liquidity</span>
            <span className="Liquidity-text">60%</span>
          </div>
          <div className="box box-4">
            <span className="box-text">Locked</span>
            <span className="Locked-text">365 Days  </span>
          </div>
          <div class="box">Box</div>
        </div>
      </div>
    </div>
  );
};    
export default New;
