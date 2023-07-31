import React from 'react';
import BotCard from './BotCard';

const YourBotArmy = ({ enlistedBots, onRelease, onDelete }) => {
  return (
    <div>
      {enlistedBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onRelease={() => onRelease(bot)}
          onDelete={() => onDelete(bot)}
        />
      ))}
    </div>
  );
};

export default YourBotArmy;
