import {  Route, Routes } from 'react-router-dom';

import './App.css';
import Challenge from './components/Challengev0';
import ListMover from './components/ListMover';
import Weather from './views/Weather'
import DragNDrop from './views/DragNDrop';
import AddMultiButton from './views/AddMultiButton';
import Testing from './components/Testing';

function App() {
  return (
    <Routes>
      
      <Route path="/challenge" element={<Challenge />} ></Route>
      <Route path="/lista1" element={<ListMover />} ></Route>
      <Route path="/weather" element={<Weather />} ></Route>
      <Route path="/dnd" element={<DragNDrop />} ></Route>
      <Route path="/addMultiButton" element={< AddMultiButton />} ></Route>
      <Route path="/" element={< Testing >
      </Testing>} ></Route>
      
    </Routes>
);
  
}

export default App;
