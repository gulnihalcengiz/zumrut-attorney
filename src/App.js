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
// import Team from './components/pages/Team/Team';
import Jobs from './components/pages/Jobs/Jobs';
import Contact from './components/pages/Contact/Contact';
import Family from './components/pages/Jobs/Family';
import Dİvorce from './components/pages/Jobs/Dİvorce';
import Accident from './components/pages/Jobs/Accident';
import Criminal from './components/pages/Jobs/Criminal';
import Injury from './components/pages/Jobs/Injury';
import Wrongful from './components/pages/Jobs/Wrongful';
// import Testimonial from './components/pages/Testimonial/Testimonial';
import Blogs from './components/pages/Blogs/Blogs';
import Details from './components/pages/Details/Details';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route exact path='/Home' element={<Home /> }></Route>
          <Route exact path='/Details/:id' element={<Details /> }></Route>
          <Route path='/Jobs' element={<Jobs /> } />
          {/* <Route path='/Team' element={<Team /> } />      */}
          <Route path='/Contact' element={<Contact />} />
          {/* <Route path='/Testimonial' element={<Testimonial />} /> */}
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Jobs/Family' element={<Family />} ></Route>
          <Route path='/Jobs/Divorce' element={<Dİvorce />} ></Route>
          <Route path='/Jobs/Accident' element={<Accident />} ></Route>
          <Route path='/Jobs/Criminal' element={<Criminal />} ></Route>
          <Route path='/Jobs/Injury' element={<Injury />}></Route>
          <Route path='/Jobs/Wrongful' element={<Wrongful />}></Route>
        </Routes>
        <Footer />
        
      </Router>
    </>
  );
}

export default App;
