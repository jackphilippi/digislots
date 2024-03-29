import React from 'react';
import ReactDOM from 'react-dom';
import DigiSlotMachine from './components/DigiSlotMachine';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <h1 className='display-4'>Digimon World 1 Evolution Slot Machine</h1>
      <p className='lead'>This tool provides the criteria for digivolving your digimon into another randomly selected digimon.</p>
      <DigiSlotMachine />
      <p className='text-end'>If you encounter any problems or would like to request a feature, please <a href="https://github.com/jackphilippi/digislots">raise an issue on Github</a>.</p>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
