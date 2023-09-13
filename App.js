import logo from './logo.svg';
import './App.css';
import FetchAxios from './FetchAxios';
import AxiosPostMethod from './AxiosPostMethod';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AxiosPostMethod />} />
        <Route path='/PostData' element={<FetchAxios />} />
      </Routes>
    </BrowserRouter>
     {/* <FetchAxios /> */}
     {/* <AxiosPostMethod /> */}
    </div>
  );
}

export default App;
