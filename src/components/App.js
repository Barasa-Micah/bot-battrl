
import React, { useState } from 'react';
import BotCollection from '../BotCollection';
import YourBotArmy from '../YourBotArmy';
import BotCard from './BotCard';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlist = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleRelease = (bot) => {
    setEnlistedBots(enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  const handleDelete = async (bot) => {
    try {
      await fetch(`http://localhost:8001/bots/${bot.id}`, {
        method: 'DELETE',
      });
      handleRelease(bot);
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection onEnlist={handleEnlist} />
      <YourBotArmy enlistedBots={enlistedBots} onRelease={handleRelease} onDelete={handleDelete} />
    </div>
  );
};

export default App;
