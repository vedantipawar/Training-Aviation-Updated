import './App.css';
import NavBar from './components/NavBar';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import Logo from './images/Logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyAccount from './pages/MyAccount';
import EmergencyProcedures from './pages/EmergencyProcedures';
import CFI from './pages/CFI';
import Scenarios from './pages/Scenarios';

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <Router>
        <header className={showNav ? 'header active' : 'header'}>
          <GiHamburgerMenu
            onClick={() => setShowNav(!showNav)} 
            size={30}
          />
          <img src={Logo} alt="LOGO" className={showNav ? 'logo active' : 'logo'} />
        </header>
        <NavBar show={showNav} />

        <div className='main'>
          <Routes>
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/emergencyprocedures" element={<EmergencyProcedures />} />
            <Route path="/scenarios" element={<Scenarios />} />
            <Route path="/cfi" element={<CFI />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
