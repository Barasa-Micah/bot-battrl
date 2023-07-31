import React from 'react';

const BotSpecs = ({ bot, goBackToListView, enlistBot }) => {
  const handleEnlistClick = () => {
    enlistBot(bot);
    goBackToListView();
  };

  return (
    <div className="bot-specs">
      <h2>{bot.name}</h2>
      <p>Class: {bot.class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={goBackToListView}>Back to List</button>
      <button onClick={handleEnlistClick}>Enlist</button>
    </div>
  );
};

export default BotSpecs;
