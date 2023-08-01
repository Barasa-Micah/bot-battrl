
import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from '../YourBotArmy';

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
      await fetch(`http://localhost:3000/bots${bot.id}`, {
        method: 'DELETE',
      });
      handleRelease(bot);
    } catch (error) {
      console.error('Error deleting bot:', error);
    }
  };

  return (
    <>
      <h1>Bot Battlr</h1>
      <YourBotArmy enlistedBots={enlistedBots} onRelease={handleRelease} onDelete={handleDelete} />
      <BotCollection onEnlist={handleEnlist} />
    </>
  );
};

export default App;
