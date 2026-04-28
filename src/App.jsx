import Home from './pages/Home'
import './styles/index.css'
import ScrollToTop from './components/scrollTop.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
