import React from 'react';
import './App.css';
import Panel from "./components/Panel/Panel";
import Hystogram from "./components/Hystogram/Hystogram";
import ChartF from "./components/ChartF/ChartF";

function App() {
    return (
        <div className="App">
          <div className="panel">
              <Panel/>
          </div>

          <div className="charts">
              <Hystogram/>
              <ChartF />
          </div>
        </div>
    );
}

export default App;
