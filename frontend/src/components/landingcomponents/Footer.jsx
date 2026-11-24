const footerGroups = [
  {
    title: 'Download',
    items: ['iPhone app', 'Android app', 'Mac app', 'Windows app'],
  },
  {
    title: 'Practice',
    items: ['Products', 'Use cases', 'Articles', 'Exams'],
  },
]

function Footer() {
  return (
    <footer className="footer-shell" aria-label="Footer">
      <div className="footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="/" aria-label="StackNote home">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>StackNote</span>
          </a>
          <p>Design tools &amp; free assets for<br />web developers and designers</p>
        </div>

        <div className="footer-links">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.items.map((item) => (
                <a className="footer-text" href="#" key={item}>{item}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-contact">
          <h2>Get in touch</h2>
          <a className="footer-join" href="mailto:hello@stacknote.app">Join us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Terms &amp; Privacy</a>
          <a href="#">Cookies</a>
        </div>
        <p>© 2026 StackNote. All rights reserved.</p>
        <div className="footer-social" aria-label="Social links">
          <a href="#" aria-label="GitHub">GH</a>
          <a href="#" aria-label="Twitter">TW</a>
          <a href="#" aria-label="Instagram">IG</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer