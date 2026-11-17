const featureCards = [
  {
    number: '01',
    title: 'Keep every idea in one place',
    text: 'Capture a thought the moment it comes to you, then find it again without digging through scattered apps.',
  },
  {
    number: '02',
    title: 'Turn notes into next steps',
    text: 'Make a task from any note, set a gentle reminder, and keep your plans moving forward.',
  },
]

function FeaturesSection() {
  return (
    <section className="features-section" id="pricing">
      <div className="section-heading">
        <span className="eyebrow">The Future of Note-Taking</span>
        <h2>Master Your Knowledge with<br />Digital Notecards</h2>
        <p>
          A thoughtful note-taking space to keep your ideas connected
          <br className="desktop-break" /> and your workflow effortlessly clear.
        </p>
      </div>

      <div className="feature-showcase">
        <div className="showcase-copy">
          <span className="showcase-label">A calmer way to work</span>
          <h3>Revolutionary Note-Taking Format</h3>
          <p>
            No more scattered files. Create powerful, connected notes with a
            simple format that feels natural from day one.
          </p>
          <a className="text-link" href="#download">Explore the workspace <span aria-hidden="true">→</span></a>
        </div>

        <article className="example-note">
          <div className="example-note-top">
            <span>Personal Engineering</span>
            <span aria-hidden="true">↗</span>
          </div>
          <h4>Electronic Switch</h4>
          <p>
            A transistor is a semiconductor device consisting of at least
            three terminals, designed to control the flow of current.
          </p>
          <div className="note-tags">
            <span>Electronics</span>
            <span>Study notes</span>
          </div>
          <div className="note-related">
            <span className="related-dot" />
            Related to <strong>Circuits &amp; signals</strong>
          </div>
        </article>
      </div>

      <div className="feature-card-grid" id="download">
        {featureCards.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <span className="feature-number">{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <span className="feature-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
