import './App.css';
import { BrowserRouter ,Switch ,Route} from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Notfound from './components/Notfound/Notfound';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Allcourses from './components/Allcourses/Allcourses';
import Allaboutus from './components/Allaboutus/Allaboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
        <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/allaboutus">
            <Allaboutus></Allaboutus>
          </Route>
          <Route path="/allcourses">
            <Allcourses></Allcourses>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
