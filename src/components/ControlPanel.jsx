import './ControlPanel.css';
import { useState } from 'react';
import Menu from './Menu';
import Setting from './Setting';
import MakeDrinks from './drinks/MakeDrinks';
import Recipes from './drinks/Recipes';

function ControlPanel() {
  const [tab, setTab] = useState('Drinks');

  const tabComponents = {
    Drinks: <MakeDrinks />,
    Settings: <Setting />,
    Recipes: <Recipes />,
  };

  return (
    <div className="control-panel">
      <Menu setSelection={setTab} />
      <div className="control-panel-main">{tabComponents[tab] || <MakeDrinks />}</div>
    </div>
  );
}

export default ControlPanel;
