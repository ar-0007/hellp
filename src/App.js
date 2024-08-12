import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './components/Project';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">

      <div className='bg-white text-black'>
        <Navbar />

        <Home />

        <Project />

        <Skills />

        <Portfolio />

        <Testimonials />

        <Contact />

        <Footer />

      </div >
    </div>
  );
}

export default App;
