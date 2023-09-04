import React, { useState, useEffect } from "react";

function BotCollection({ addToArmy }) {
  const [allBotsData, setAllBotsData] = useState([]);

  useEffect(() => {
    const getAllBots = async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          const data = await response.json();
          setAllBotsData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAllBots("http://localhost:8002/bots");
  }, []);

  const handleAddToArmy = (bot) => {
    addToArmy(bot);
  };

  return (
    <div className="all-bots-container">
      {/* Collection of all bots */}
      {allBotsData.map(
        ({
          id,
          name,
          health,
          damage,
          armor,
          bot_class,
          catchphrase,
          avatar_url,
        }) => (
          <div
            className={`bot-container ${bot_class}`}
            key={id}
            onClick={() => handleAddToArmy({ id, name, health, damage, armor, bot_class, catchphrase, avatar_url })}
          >
            <div className="img-div">
              <img src={avatar_url} alt={name} width="100" height="100" />
            </div>
            <p className="bot-name">{name}</p>
            <p>{catchphrase}</p>
            <div className="bot-container-footer">
              <div>{health}</div>
              <div>{damage}</div>
              <div>{armor}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default BotCollection;