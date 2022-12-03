import './App.css';
import Navbar from './common/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Footer from './common/Footer/Footer';
import Team from './components/pages/Team/Team';
import Jobs from './components/pages/Jobs/Jobs';
import Contact from './components/pages/Contact/Contact';
// import Wedo from './components/pages/WhatWeDo/Wedo';
import Family from './components/pages/Family/Family';
import Dİvorce from './components/pages/Divorce/Dİvorce';
import Accident from './components/pages/Accident/Accident';
import Criminal from './components/pages/Criminal/Criminal';
import Injury from './components/pages/Injury/Injury';
import Wrongful from './components/pages/Wrongful/Wrongful';
import Testimonial from './components/pages/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/Home' element={<Home /> }></Route>
          <Route path='/Jobs' element={<Jobs /> } />
          <Route path='/Team' element={<Team /> } />     
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/Wedo' element={<Wedo />} ></Route> */}
          <Route path='/Testimonial' element={<Testimonial />} />
          <Route path='/Family' element={<Family />} ></Route>
          <Route path='/Divorce' element={<Dİvorce />} ></Route>
          <Route path='/Accident' element={<Accident />} ></Route>
          <Route path='/Criminal' element={<Criminal />} ></Route>
          <Route path='/Injury' element={<Injury />}></Route>
          <Route path='/Wrongful' element={<Wrongful />}></Route>
        </Routes>
        <Footer />
        
      </Router>
    </>
  );
}

export default App;
