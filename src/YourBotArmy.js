
import React from 'react';
import BotCard from './components/BotCard';

const YourBotArmy = ({ enlistedBots, onRelease, onDelete }) => {
  return (
    <div>
      <h1>Bot Army</h1>
      <div className='botts'>
        {enlistedBots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            enlisted={true}
            onEnlist={() => { }}
            onRelease={onRelease}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
