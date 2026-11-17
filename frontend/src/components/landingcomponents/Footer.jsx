const footerGroups = [
  {
    title: 'Features',
    items: ['Notes & ideas', 'Digital notecards', 'Task planning'],
  },
  {
    title: 'Explore',
    items: ['How it works', 'Get started', 'Your workspace'],
  },
  {
    title: 'Community',
    items: ['Our community', 'Ideas & updates', 'Share your ideas'],
  },
]

function Footer() {
  return (
    <div className="footer-shell">
      <section className="footer-acknowledgment" aria-labelledby="acknowledgment-title">
        <div className="acknowledgment-copy">
          <h2 id="acknowledgment-title">A word from all of us</h2>
          <p>
            Every idea brings a new perspective. Thank you to everyone who shares
            their knowledge, creativity, and time with the StackNote community.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-links">
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h2>{group.title}</h2>
              {group.items.map((item) => (
                <span className="footer-text" key={item}>{item}</span>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">S</span>
            <span>StackNote</span>
          </div>
          <p>© 2026 StackNote. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer