import React from 'react';

const BotCard = ({ bot, enlisted, onEnlist, onRelease, onDelete }) => {
  const handleButtonClick = () => {
    if (enlisted) {
      onRelease(bot);
    } else {
      onEnlist(bot);
    }
  };

  const handleDischargeClick = () => {
    onDelete(bot);
  };

  return (
    <div className={`bot-card${enlisted ? ' enlisted' : ''}`}>
      <h2>{bot.name}</h2>
      <p>Class: {bot.class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleButtonClick}>
        {enlisted ? 'Release' : 'Enlist'}
      </button>
      {enlisted && <button className="red-button" onClick={handleDischargeClick}>X</button>}
    </div>
  );
};

export default BotCard;
