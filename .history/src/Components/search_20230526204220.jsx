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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 2,
      title: 'MEME ELON DOGE FLOKI',
      description: 'Fair Launch-Max:No Limit',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 3,
      title: 'MEME ELON DOGE FLOKI',
      description: 'Fair Launch-Max:No Limit',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'This is the description of Card 4.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 5,
  title: 'Card 5',
      description: 'This is the description of Card 5.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'This is the description of Card 6.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },

    {
      id: 7,
      title: 'Card 7',
      description: 'This is the description of Card 7.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 8,
      title: 'Card 8',
      description: 'This is the description of Card 8.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
    },
    {
      id: 9,
      title: 'Card 9',
      description: 'This is the description of Card 9.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmQszkA2eZvidYBvosFsipj56hj9G3CW9e4ovl8j9KWOyXKS_aB06F_-hsyISer7yePo&usqp=CAU',
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
      <div class="search-container">
        <input
          type="text" class="search-box"placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '25px',
            padding: '8px',
            marginBottom: '10px',
            marginTop: '20px',
            width: '20%',
          }}
        /></div>
        
      <div className="filter" style={{ marginLeft: '1100px',marginTop: '-60px'}}>
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            marginLeft: '10px',
            color:'#ccc',
          }}
          
        >
          <option value="" style={{ color: '' }}>All</option>
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
         
        </div>
        <div class="line"> </div>
        <span className="end">Sales Ends in</span>
        <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        </head>
        <div class="icon-container">
        <span class="fas fa-bell"></span>
        <span class="far fa-heart"></span></div>
      </div>
    </div>
  );
};    
export default New;
