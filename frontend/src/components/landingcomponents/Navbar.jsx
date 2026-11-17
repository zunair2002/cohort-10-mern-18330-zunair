const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Community', href: '#community' },
  { label: 'Help', href: '#help' },
]

function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="StackNote home">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span>StackNote</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {navigationLinks.map((link) => (
          <a key={link.label} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="sign-in-link" href="#sign-in">Log in</a>
        <a className="button button-dark button-small" href="#sign-up">Sign up</a>
      </div>
    </header>
  )
}

export default Navbar
