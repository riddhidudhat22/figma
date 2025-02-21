
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Userroute from './route/Userroute';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/*' element={<Userroute />} />
      </Routes>
    </>
  );
}

export default App;
