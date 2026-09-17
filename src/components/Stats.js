const stats = [["4+", "Featured projects"], ["3", "Gold awards"], ["6+", "Professional certifications"], ["20+", "Technologies"]];

function Stats() {
  return <aside className="stats" aria-label="Portfolio highlights">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><p>{label}</p></div>)}</aside>;
}

export default Stats;
