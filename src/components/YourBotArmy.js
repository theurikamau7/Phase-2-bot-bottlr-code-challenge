import React from "react";

function YourBotArmy({ selectedBots, releaseFromArmy }) {
  const bots = selectedBots.map(
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
      <div className={`bot-container ${bot_class}`} key={id}>
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
        <button onClick={() => releaseFromArmy(id)}>Release</button>
      </div>
    )
  );

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h2>Your Bot Army</h2>
          {bots.length > 0 ? bots : <p>No bots selected</p>}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;