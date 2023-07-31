import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, enlistedBots, filters, onBotSelect, onEnlist }) => {
 
  const filteredBots = bots.filter((bot) => filters.includes(bot.class));


  const sortedBots = filteredBots.sort((a, b) => b[sortCriteria] - a[sortCriteria]);

  return (
    <div>
      {sortedBots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          enlisted={enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)}
          onBotSelect={() => onBotSelect(bot)}
          onEnlist={() => onEnlist(bot)}
        />
      ))}
    </div>
  );
};

export default BotCollection;
