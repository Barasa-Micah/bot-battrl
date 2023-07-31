import React from 'react';

const BotCard = ({ bot, enlisted, onBotSelect, onEnlist, onRelease, onDelete }) => {
  const handleButtonClick = () => {
    if (enlisted) {
      onRelease ? onRelease() : onDelete();
    } else {
      onEnlist();
    }
  };

  return (
    <div className={`bot-card${enlisted ? ' enlisted' : ''}`}>
      <h2>{bot.name}</h2>
      <p>Class: {bot.class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleButtonClick}>
        {enlisted ? (onRelease ? 'Release' : 'Delete') : 'Enlist'}
      </button>
      <button onClick={onBotSelect}>View Details</button>
    </div>
  );
};

export default BotCard;
