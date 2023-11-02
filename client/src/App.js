// import './App.css';
import { Route, Routes } from 'react-router-dom';

import NotFound from './components/not-found/NotFound';
import Navbar from './components/navbar/Navbar';
import MainArea from './components/homepage/MainArea';
import Login from './components/login/Login';
import AttendenceMarker from './components/attendence-marker/AttendenceMarker';
import Nav from './components/login/Nav';
import Menu from './components/showmenu/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <MainArea />
          </>
        } />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/attendence' element={<AttendenceMarker />} />

        <Route path="*" element={<NotFound />} /> 
      </Routes>

    </div>
  );
}

export default App;