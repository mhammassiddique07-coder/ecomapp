import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Faq from './components/pages/Faq.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;