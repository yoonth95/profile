import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import Nav from 'components/Nav';
import Main from 'components/Main';
import Footer from 'components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
