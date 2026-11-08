import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO BRIGHTPATH</p>
        <h1>Simple ideas.<br /><span>Meaningful progress.</span></h1>
        <p className="intro">
          We help people and small businesses take their next step with clear,
          practical support and thoughtful solutions.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/services">Explore our services</Link>
          <Link className="text-link" to="/about">Get to know us →</Link>
        </div>
      </div>
      <div className="hero-card">
        <div className="circle">B</div>
        <h2>A good place to start</h2>
        <p>A clean, welcoming space for ideas to grow.</p>
        <div className="card-line"></div>
        <p className="small-note">CREATIVE • PRACTICAL • PEOPLE-FOCUSED</p>
      </div>
    </section>
  )
}

export default Home