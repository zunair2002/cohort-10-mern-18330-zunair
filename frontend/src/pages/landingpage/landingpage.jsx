import FeaturesSection from '../../components/landingcomponents/FeaturesSection'
import Footer from '../../components/landingcomponents/Footer'
import HeroSection from '../../components/landingcomponents/HeroSection'
import Navbar from '../../components/landingcomponents/Navbar'
import StatsSection from '../../components/landingcomponents/StatsSection'
import './landingpage.css'

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="hero-shell">
        <Navbar />
        <HeroSection />
      </div>
      <StatsSection />
      <FeaturesSection />
      <Footer />
    </main>
  )
}

export default LandingPage