import DashboardPreview from './DashboardPreview'

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="team-proof">
          <div className="avatar-stack" aria-hidden="true">
            <span className="team-avatar avatar-one">J</span>
            <span className="team-avatar avatar-two">M</span>
            <span className="team-avatar avatar-three">A</span>
            <span className="team-avatar avatar-four">S</span>
          </div>
          <span>Join 10k+ thinkers</span>
        </div>
        <h1>Organize Your Notes,<br />Tasks, and Ideas.</h1>
        <p className="hero-description">
          Organize all your notes, tasks, and ideas in one clean workspace to stay
          focused, productive, and in control every day.
        </p>
        <a className="button button-dark hero-button" href="#sign-up">Try For Free</a>
      </div>
      <div className="dashboard-wrap">
        <DashboardPreview />
      </div>
    </section>
  )
}

export default HeroSection
