const noteCards = [
  { title: 'Movie Review', color: 'peach', detail: '3 notes' },
  { title: 'Class Notes', color: 'lavender', detail: '8 notes' },
  { title: 'Book Lists', color: 'blue', detail: '5 notes' },
]

function DashboardPreview() {
  return (
    <div className="dashboard-window" aria-label="Preview of the StackNote workspace">
      <aside className="dashboard-sidebar">
        <a className="dashboard-brand" href="#home">StackNote</a>
        <div className="window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <nav className="sidebar-links" aria-label="Workspace sections">
          <a className="sidebar-link active" href="#all-docs"><span>▤</span> All Docs</a>
          <a className="sidebar-link" href="#tasks"><span>✓</span> Tasks</a>
          <a className="sidebar-link" href="#calendar"><span>▦</span> Calendar</a>
        </nav>
        <p className="sidebar-heading">Starred</p>
        <a className="sidebar-link" href="#journal"><span>☆</span> Journal</a>
        <a className="sidebar-link" href="#notes"><span>▧</span> Notes</a>
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <h2>My Notes &amp; Ideas</h2>
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <input aria-label="Search notes" placeholder="Search" />
          </label>
          <button className="icon-button notification-button" type="button" aria-label="Notifications">♧</button>
          <span className="user-avatar" aria-label="User profile">A</span>
        </div>

        <div className="documents-heading">
          <h3>All Docs</h3>
          <div className="view-buttons" aria-label="Document view options">
            <button type="button" aria-label="Grid view">▦</button>
            <button type="button" aria-label="Sort documents">↕</button>
          </div>
        </div>

        <div className="note-grid">
          {noteCards.map((card) => (
            <a className={`note-card note-card-${card.color}`} href="#all-docs" key={card.title}>
              <span className="note-title">{card.title}</span>
              <span className="note-card-footer">
                <span className="note-count">{card.detail}</span>
                <span className="note-card-menu" aria-hidden="true">•••</span>
              </span>
            </a>
          ))}
          <a className="new-folder-card" href="#new-folder">
            <span className="folder-icon" aria-hidden="true">▧</span>
            <span>New folder</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview
