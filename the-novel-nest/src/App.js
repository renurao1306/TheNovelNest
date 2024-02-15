// import logo from './logo.svg';
import './App.css';
import Booklist from './components/Booklist'
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import RegistrationForm from './components/RegistrationForm';
import Cart from './components/Cart';
import Orders from './components/Orders';
import About from './components/About';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <Header/>
      <Banner/>
      <Booklist />
      <Footer/> */}

      
        <Routes>
          <Route path='' element={<><Header/><Banner/><Booklist/><Footer/></>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/register' element={<RegistrationForm/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
