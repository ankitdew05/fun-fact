import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from './Component/Data';

function App() {
  return (
    <div className='App'>
  
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Data/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
