import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './components/ThemeProvider';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CaseStudiesIndex from './pages/CaseStudiesIndex';
import HaiwaTVCaseStudy from './pages/case-studies/HaiwaTV';
import PlaceholderCaseStudy from './pages/case-studies/Placeholder';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="bastorians-theme">
      <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Case Studies */}
          <Route path="/case-studies" element={<CaseStudiesIndex />} />
          <Route path="/case-studies/haiwa-tv" element={<HaiwaTVCaseStudy />} />
          <Route path="/case-studies/physiotherapy" element={<PlaceholderCaseStudy title="Physiotherapy Clinics" />} />
          <Route path="/case-studies/blue-metal" element={<PlaceholderCaseStudy title="Blue Metal Suppliers" />} />
          <Route path="/case-studies/finance" element={<PlaceholderCaseStudy title="Finance" />} />
          <Route path="/case-studies/real-estate" element={<PlaceholderCaseStudy title="Real Estate" />} />
          <Route path="/case-studies/event-management" element={<PlaceholderCaseStudy title="Event Management" />} />
          <Route path="/case-studies/edtech" element={<PlaceholderCaseStudy title="EdTech" />} />
          <Route path="/case-studies/homemade-cakes" element={<PlaceholderCaseStudy title="Homemade Cakes" />} />
          <Route path="/case-studies/language-training" element={<PlaceholderCaseStudy title="Language Training Institutes" />} />
          <Route path="/case-studies/skill-academy" element={<PlaceholderCaseStudy title="Skill Training Academy" />} />
            <Route path="/case-studies/jothidam" element={<PlaceholderCaseStudy title="Jothidam" />} />
            <Route path="/case-studies/fabric-suppliers" element={<PlaceholderCaseStudy title="Fabric Suppliers" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
