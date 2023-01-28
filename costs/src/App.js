import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/pages/Home';
import Company from './components/pages/pages/Company';
import Contact from './components/pages/pages/Contact';
import NewProject from './components/pages/pages/NewProject';
import Project from './components/pages/pages/Project';

import Container from './components/pages/layouts/Container';
import Navbar from './components/pages/layouts/Navbar';
import Footer from './components/pages/layouts/Footer';

function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Container customClass='min-height'>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/project'><Project/></Route>
        <Route exact path='/company'><Company/></Route>
      
      <Route exact path='/contact'><Contact/></Route>
      <Route exact path='/newproject'><NewProject/></Route>
      </Container>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
