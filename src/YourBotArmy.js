
import React from 'react';
import BotCard from './components/BotCard';

const YourBotArmy = ({ enlistedBots, onRelease, onDelete }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {enlistedBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          enlisted={true}
          onEnlist={() => {}} 
          onRelease={onRelease}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
