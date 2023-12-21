
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Create from './Components/Create/Create';
import Display from './Components/Display/Display';
import { useState } from 'react';

function App() {
  const [search,setSearch] = useState("");
  return (
    <div className="App">
      <Navbar onSearchChange={setSearch}  />
      <Create />
      <Display search={search} /> 
      
    </div>
  );
}

export default App;
