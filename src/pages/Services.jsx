const services = [
  { number: '01', title: 'Planning', description: 'Turn an early idea into a clear and manageable plan.' },
  { number: '02', title: 'Creative Support', description: 'Bring your message to life with thoughtful content and design.' },
  { number: '03', title: 'Guidance', description: 'Get practical direction as you work towards your next goal.' },
]

function Services() {
  return (
    <section className="page">
      <p className="eyebrow">WHAT WE DO</p>
      <h1>Our Services</h1>
      <p className="page-lead">Straightforward support to help you move forward.</p>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services