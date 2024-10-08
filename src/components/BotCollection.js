import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('  http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className='cont'>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          enlisted={false}
          onEnlist={onEnlist}
          onRelease={() => {}} 
          onDelete={() => {}} 
        />
      ))}
      </div>
    </div>
  );
};

export default BotCollection;
