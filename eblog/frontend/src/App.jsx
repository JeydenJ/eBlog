// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Header component */}
        <Header />

        <main className="App-main">
          {/* Navigation */}
         

          {/* Page content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

