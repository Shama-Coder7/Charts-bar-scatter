// import './App.css';
import React from 'react';
// import { BarChart } from 'recharts';
// import { BarChart } from 'recharts';
import BarChart from './charts/BarChart';
import ScatterPlot from './charts/ScatterPlot';

function App() {
  return (
    <div className="App">
     
     <ScatterPlot />
<BarChart />
     </div>
  );
}

export default App;
