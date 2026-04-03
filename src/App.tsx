import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import HaiwaTVCaseStudy from './pages/case-studies/HaiwaTV';
import PlaceholderCaseStudy from './pages/case-studies/Placeholder';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Case Studies */}
          <Route path="/case-studies/haiwa-tv" element={<HaiwaTVCaseStudy />} />
          <Route path="/case-studies/physiotherapy" element={<PlaceholderCaseStudy title="Physiotherapy Clinics" />} />
          <Route path="/case-studies/blue-metal" element={<PlaceholderCaseStudy title="Blue Metal Suppliers" />} />
          <Route path="/case-studies/finance" element={<PlaceholderCaseStudy title="Finance" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
