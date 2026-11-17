const stats = [
  { value: '2014', label: 'App Excellence Award' },
  { value: '2015', label: 'Innovation in Design' },
  { value: '2025', label: 'Global Recognition' },
  { value: '1M+', label: 'Downloads' },
]

function StatsSection() {
  return (
    <section className="stats-section" id="community" aria-label="StackNote achievements">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  )
}

export default StatsSection
