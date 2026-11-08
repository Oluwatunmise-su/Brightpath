import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="logo">BrightPath<span>.</span></Link>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="page"><h1>Page not found</h1><Link to="/">Return home</Link></div>} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} BrightPath Studio. New Horizons Project.</p>
      </footer>
    </div>
  )
}

export default App