import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';

const App = () => {
  const [allBots, setAllBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filters, setFilters] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('health');

  useEffect(() => {
    axios.get('http://localhost:8001/bots') 
      .then((response) => {
        setAllBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bot data:', error);
      });
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const releaseBot = (bot) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id)
    );
  };

  const deleteBotForever = (bot) => {
    
    axios.delete(`http://localhost:8001/bots${bot.id}`)
      .then(() => {
        setAllBots((prevAllBots) => prevAllBots.filter((b) => b.id !== bot.id));
        releaseBot(bot);
      })
      .catch((error) => {
        console.error('Error deleting bot:', error);
      });
  };

  const handleBotSelect = (bot) => {
    setSelectedBot(bot);
  };

  const goBackToListView = () => {
    setSelectedBot(null);
  };

  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const handleSortChange = (selectedSort) => {
    setSortCriteria(selectedSort);
  };

  return (
    <div>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} goBackToListView={goBackToListView} enlistBot={enlistBot} />
      ) : (
        <>
          <SortBar onSortChange={handleSortChange} />
          <BotCollection
            bots={allBots}
            enlistedBots={enlistedBots}
            filters={filters}
            onBotSelect={handleBotSelect}
            onEnlist={enlistBot}
          />
          <YourBotArmy
            enlistedBots={enlistedBots}
            onRelease={releaseBot}
            onDelete={deleteBotForever}
          />
        </>
      )}
    </div>
  );
};

export default App;
